import { Hono } from 'hono';
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getDb } from '../../lib/db';
import { jobs, users, candidateProfiles, employers } from '../../lib/db/schema';
import { getAuth } from '../../lib/auth';
import { eq } from 'drizzle-orm';

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

// Export all methods for Astro to handle
const handleRequest: APIRoute = ({ request }) => {
  // Pass the request to Hono, along with Cloudflare environment variables
  // @ts-ignore
  return app.fetch(request, env);
};

export const ALL = handleRequest;
