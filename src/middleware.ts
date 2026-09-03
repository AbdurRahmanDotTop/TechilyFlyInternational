import { defineMiddleware } from 'astro:middleware';
import { getAuth } from './lib/auth';
import { env } from 'cloudflare:workers';

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, cookies, redirect, url } = context;

  const isEmployerRoute = url.pathname.startsWith('/employer');
  const isCandidateRoute = url.pathname.startsWith('/candidate');
  const isAdminRoute = url.pathname.startsWith('/admin');
  const isProtectedRoute = isEmployerRoute || isCandidateRoute || isAdminRoute;

  const dbEnv = env;
  if (dbEnv) {
    const lucia = getAuth(dbEnv);
    const sessionId = cookies.get(lucia.sessionCookieName)?.value ?? null;

    if (sessionId) {
      try {
        const { session, user } = await lucia.validateSession(sessionId);

        if (session && session.fresh) {
          const sessionCookie = lucia.createSessionCookie(session.id);
          context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes as any);
        }
        
        if (!session) {
          const sessionCookie = lucia.createBlankSessionCookie();
          context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes as any);
        } else {
          // Attach user to locals for all routes
          (context.locals as any).user = user;
          (context.locals as any).session = session;
        }
      } catch (e) {
        // DB failure or invalid session - ignore for public routes
        console.error("Session validation error in middleware", e);
      }
    }
  }

  // Handle protected route redirects
  if (isProtectedRoute) {
    const user = (context.locals as any).user;
    if (!user) {
      return redirect('/login');
    }

    // Role authorization
    if (isEmployerRoute && user.role !== 'EMPLOYER') return redirect('/login');
    if (isAdminRoute && user.role !== 'ADMIN') return redirect('/login');
    if (isCandidateRoute && user.role !== 'CANDIDATE') return redirect('/login');
  }

  return next();
});
