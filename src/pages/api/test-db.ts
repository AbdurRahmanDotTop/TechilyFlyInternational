import type { APIRoute } from 'astro';
import { getDb } from '../../lib/db';
import { users } from '../../lib/db/schema';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async () => {
  try {
    const db = getDb(env);
    const allUsers = await db.select().from(users).all();
    return new Response(JSON.stringify(allUsers), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e: any) {
    return new Response(e.message, { status: 500 });
  }
};
