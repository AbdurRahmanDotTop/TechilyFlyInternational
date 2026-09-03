import { Hono } from 'hono';
import type { APIRoute } from 'astro';
import { getDb } from '../../lib/db';
import { jobs } from '../../lib/db/schema';

const app = new Hono<{ Bindings: any }>().basePath('/api');

app.get('/hello', (c) => c.text('Hello from Hono in Astro!'));

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
const handleRequest: APIRoute = ({ request, locals }) => {
  // Pass the request to Hono, along with Cloudflare environment variables
  // @ts-ignore
  return app.fetch(request, locals.runtime?.env);
};

export const ALL = handleRequest;
