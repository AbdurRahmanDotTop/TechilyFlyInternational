export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { jobs } from '@/lib/db/schema';
import { lte, eq, and } from 'drizzle-orm';

export async function GET(request: Request) {
  try {
    const db = getDb();
    const now = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD

    const result = await db.update(jobs)
      .set({ 
        status: 'EXPIRED',
        acceptingApplications: false 
      })
      .where(
        and(
          eq(jobs.status, 'PUBLISHED'),
          lte(jobs.expiryAt, now)
        )
      )
      .returning({ id: jobs.id });

    return NextResponse.json({ success: true, expiredCount: result.length, expiredJobs: result });
  } catch (error) {
    console.error('Cron Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
