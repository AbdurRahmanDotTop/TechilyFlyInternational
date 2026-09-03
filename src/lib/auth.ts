import { Lucia } from 'lucia';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { getDb } from './db';
import { users, sessions } from './db/schema';

export function getAuth(env: any) {
  const db = getDb(env);
  const adapter = new DrizzleSQLiteAdapter(db, sessions, users);
  
  return new Lucia(adapter, {
    sessionCookie: {
      expires: false,
      attributes: {
        secure: process.env.NODE_ENV === 'production'
      }
    },
    getUserAttributes: (attributes) => {
      return {
        email: attributes.email,
        role: attributes.role,
      };
    }
  });
}

declare module 'lucia' {
  interface Register {
    Lucia: ReturnType<typeof getAuth>;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  email: string;
  role: string;
}
