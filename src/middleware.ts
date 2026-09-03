import { defineMiddleware } from 'astro:middleware';
import { getAuth } from './lib/auth';
import { env } from 'cloudflare:workers';

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, cookies, redirect, url } = context;

  // Protect /employer, /candidate, /admin routes
  const isEmployerRoute = url.pathname.startsWith('/employer');
  const isCandidateRoute = url.pathname.startsWith('/candidate');
  const isAdminRoute = url.pathname.startsWith('/admin');

  if (isEmployerRoute || isCandidateRoute || isAdminRoute) {
    const dbEnv = env;
    if (!dbEnv) {
      console.warn("No env found in middleware");
    }
    
    const lucia = getAuth(dbEnv);
    const sessionId = cookies.get(lucia.sessionCookieName)?.value ?? null;

    if (!sessionId) {
      return redirect('/login');
    }

    try {
      const { session, user } = await lucia.validateSession(sessionId);

      if (session && session.fresh) {
        const sessionCookie = lucia.createSessionCookie(session.id);
        context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes as any);
      }
      
      if (!session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes as any);
        return redirect('/login');
      }

      // Role authorization
      if (isEmployerRoute && user.role !== 'EMPLOYER') return redirect('/login');
      if (isAdminRoute && user.role !== 'ADMIN') return redirect('/login');
      if (isCandidateRoute && user.role !== 'CANDIDATE') return redirect('/login');

      // Attach user to locals
      (context.locals as any).user = user;
      (context.locals as any).session = session;

    } catch (e) {
      // DB failure or invalid session
      return redirect('/login');
    }
  }

  return next();
});
