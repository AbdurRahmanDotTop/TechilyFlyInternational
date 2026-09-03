'use server';

import { getDb } from '@/lib/db';
import { jobs } from '@/lib/db/schema';

export async function createJobAction(formData: { title: string, description: string, country: string, city: string, expiryAt: string }) {
  try {
    const db = getDb();
    const id = crypto.randomUUID();
    const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + id.substring(0, 6);
    
    // In a real app, you would fetch employerId from the authenticated user's session
    // const session = await getAuthSession();
    // const employerId = session.user.employerId;
    
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

    return { success: true, slug };
  } catch (error) {
    console.error('Failed to create job:', error);
    return { success: false, error: 'Internal Server Error' };
  }
}
