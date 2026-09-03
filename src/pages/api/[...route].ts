import { Hono } from 'hono';
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getDb } from '../../lib/db';
import { jobs, users, candidateProfiles, employers, sessions, applications } from '../../lib/db/schema';
import { getAuth } from '../../lib/auth';
import { eq, inArray } from 'drizzle-orm';

async function hashPassword(password: string) {
  const msgUint8 = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

const app = new Hono<{ Bindings: any }>().basePath('/api');

app.get('/hello', (c) => c.text('Hello from Hono in Astro!'));

// Authentication Routes
app.post('/auth/register', async (c) => {
  try {
    const { fullName, email, password, role } = await c.req.json();
    const db = getDb(c.env);
    
    // Check if user exists
    const existing = await db.select().from(users).where(eq(users.email, email)).get();
    if (existing) {
      return c.json({ error: 'Email already in use' }, 400);
    }

    const userId = crypto.randomUUID();
    const hashedPassword = await hashPassword(password);

    // Create user
    await db.insert(users).values({
      id: userId,
      email,
      hashedPassword,
      role: role || 'CANDIDATE',
    });

    // Create profile based on role
    if (role === 'EMPLOYER') {
      await db.insert(employers).values({
        id: crypto.randomUUID(),
        userId,
        companyName: fullName, // Assuming fullname is company name for MVP
      });
    } else {
      await db.insert(candidateProfiles).values({
        id: crypto.randomUUID(),
        userId,
        fullName,
      });
    }

    // Create session
    const lucia = getAuth(c.env);
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    c.header('Set-Cookie', sessionCookie.serialize(), { append: true });

    return c.json({ success: true, role: role || 'CANDIDATE' });
  } catch (error) {
    console.error('Registration error:', error);
    return c.json({ error: 'Failed to register' }, 500);
  }
});

app.post('/auth/login', async (c) => {
  try {
    const { email, password } = await c.req.json();
    const db = getDb(c.env);
    
    const user = await db.select().from(users).where(eq(users.email, email)).get();
    if (!user || !user.hashedPassword) {
      return c.json({ error: 'Invalid email or password' }, 400);
    }

    const validPassword = (await hashPassword(password)) === user.hashedPassword;
    if (!validPassword) {
      return c.json({ error: 'Invalid email or password' }, 400);
    }

    // Create session
    const lucia = getAuth(c.env);
    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    c.header('Set-Cookie', sessionCookie.serialize(), { append: true });

    return c.json({ success: true, role: user.role });
  } catch (error) {
    console.error('Login error:', error);
    return c.json({ error: 'Failed to login' }, 500);
  }
});

app.post('/auth/logout', async (c) => {
  try {
    const lucia = getAuth(c.env);
    const sessionId = lucia.readSessionCookie(c.req.header('Cookie') ?? "");
    if (!sessionId) {
      return c.json({ error: 'No session' }, 401);
    }
    await lucia.invalidateSession(sessionId);
    const sessionCookie = lucia.createBlankSessionCookie();
    c.header('Set-Cookie', sessionCookie.serialize(), { append: true });
    return c.json({ success: true });
  } catch (error) {
    return c.json({ error: 'Failed to logout' }, 500);
  }
});

app.post('/jobs', async (c) => {
  try {
    const formData = await c.req.json();
    const db = getDb(c.env);
    const id = crypto.randomUUID();
    const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + id.substring(0, 6);
    
    // Mock employerId for MVP
    const mockEmployerId = 'mock_emp_123'; 
    
    await db.insert(jobs).values({
      id,
      employerId: mockEmployerId,
      title: formData.title,
      slug,
      description: formData.description,
      country: formData.country,
      city: formData.city,
      expiryAt: formData.expiryAt,
      status: 'PUBLISHED',
      acceptingApplications: true,
    });

    return c.json({ success: true, slug });
  } catch (error) {
    console.error('Failed to create job:', error);
    return c.json({ success: false, error: 'Internal Server Error' }, 500);
  }
});

async function requireAdmin(c: any) {
  const lucia = getAuth(c.env);
  const sessionId = lucia.readSessionCookie(c.req.header('Cookie') ?? "");
  if (!sessionId) return null;
  const { user } = await lucia.validateSession(sessionId);
  if (!user || user.role !== 'ADMIN') return null;
  return user;
}

// Admin Routes
app.put('/admin/jobs/:id/status', async (c) => {
  const admin = await requireAdmin(c);
  if (!admin) return c.json({ error: 'Unauthorized' }, 403);
  
  const id = c.req.param('id');
  const { status } = await c.req.json();
  const db = getDb(c.env);
  
  await db.update(jobs).set({ status }).where(eq(jobs.id, id));
  return c.json({ success: true });
});

app.put('/admin/jobs/:id', async (c) => {
  const admin = await requireAdmin(c);
  if (!admin) return c.json({ error: 'Unauthorized' }, 403);
  
  const id = c.req.param('id');
  const data = await c.req.json();
  const db = getDb(c.env);
  
  await db.update(jobs).set({
    title: data.title,
    slug: data.slug,
    description: data.description,
    city: data.city,
    country: data.country,
    status: data.status,
    employerId: data.employerId,
    acceptingApplications: data.acceptingApplications,
    expiryAt: data.expiryAt,
    publishedAt: data.publishedAt,
    closedAt: data.closedAt,
  }).where(eq(jobs.id, id));
  return c.json({ success: true });
});

app.delete('/admin/jobs/:id', async (c) => {
  const admin = await requireAdmin(c);
  if (!admin) return c.json({ error: 'Unauthorized' }, 403);
  
  const id = c.req.param('id');
  const db = getDb(c.env);
  
  // Clean up related data manually to avoid FK constraint issues if cascade is disabled
  // First delete applications for this job
  const { applications } = await import('../../lib/db/schema');
  await db.delete(applications).where(eq(applications.jobId, id));
  // Then delete the job
  await db.delete(jobs).where(eq(jobs.id, id));
  
  return c.json({ success: true });
});

app.put('/admin/users/:id/role', async (c) => {
  const admin = await requireAdmin(c);
  if (!admin) return c.json({ error: 'Unauthorized' }, 403);
  
  const id = c.req.param('id');
  const { role } = await c.req.json();
  const db = getDb(c.env);
  
  await db.update(users).set({ role }).where(eq(users.id, id));
  return c.json({ success: true });
});

app.put('/admin/users/:id', async (c) => {
  const admin = await requireAdmin(c);
  if (!admin) return c.json({ error: 'Unauthorized' }, 403);
  
  const id = c.req.param('id');
  const data = await c.req.json();
  const db = getDb(c.env);
  
  await db.update(users).set({ 
    email: data.email,
    role: data.role 
  }).where(eq(users.id, id));
  return c.json({ success: true });
});

app.delete('/admin/users/:id', async (c) => {
  const admin = await requireAdmin(c);
  if (!admin) return c.json({ error: 'Unauthorized' }, 403);
  
  const id = c.req.param('id');
  const db = getDb(c.env);
  // 1. Delete Employer data
  const employer = await db.select().from(employers).where(eq(employers.userId, id)).get();
  if (employer) {
    const employerJobs = await db.select({ id: jobs.id }).from(jobs).where(eq(jobs.employerId, employer.id)).all();
    const jobIds = employerJobs.map(j => j.id);
    if (jobIds.length > 0) {
      await db.delete(applications).where(inArray(applications.jobId, jobIds));
      await db.delete(jobs).where(eq(jobs.employerId, employer.id));
    }
    await db.delete(employers).where(eq(employers.userId, id));
  }
  
  // 2. Delete Candidate data
  const candidate = await db.select().from(candidateProfiles).where(eq(candidateProfiles.userId, id)).get();
  if (candidate) {
    await db.delete(applications).where(eq(applications.candidateId, candidate.id));
    await db.delete(candidateProfiles).where(eq(candidateProfiles.userId, id));
  }
  
  // 3. Delete Sessions and User
  await db.delete(sessions).where(eq(sessions.userId, id));
  await db.delete(users).where(eq(users.id, id));
  
  return c.json({ success: true });
});

// Export all methods for Astro to handle
const handleRequest: APIRoute = ({ request }) => {
  // Pass the request to Hono, along with Cloudflare environment variables
  // @ts-ignore
  return app.fetch(request, env);
};

export const ALL = handleRequest;
