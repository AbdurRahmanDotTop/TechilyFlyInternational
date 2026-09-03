globalThis.process ??= {};
globalThis.process.env ??= {};
import { A as defineMiddleware, t as sequence } from "./chunks/sequence_CmURaZTY.mjs";
import { t as getAuth } from "./chunks/auth_CyDY6j-t.mjs";
import { env } from "cloudflare:workers";
//#region src/middleware.ts
var onRequest$1 = defineMiddleware(async (context, next) => {
	const { request, cookies, redirect, url } = context;
	const isEmployerRoute = url.pathname.startsWith("/employer");
	const isCandidateRoute = url.pathname.startsWith("/candidate");
	const isAdminRoute = url.pathname.startsWith("/admin");
	if (isEmployerRoute || isCandidateRoute || isAdminRoute) {
		const dbEnv = env;
		if (!dbEnv) console.warn("No env found in middleware");
		const lucia = getAuth(dbEnv);
		const sessionId = cookies.get(lucia.sessionCookieName)?.value ?? null;
		if (!sessionId) return redirect("/login");
		try {
			const { session, user } = await lucia.validateSession(sessionId);
			if (session && session.fresh) {
				const sessionCookie = lucia.createSessionCookie(session.id);
				context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
			}
			if (!session) {
				const sessionCookie = lucia.createBlankSessionCookie();
				context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
				return redirect("/login");
			}
			if (isEmployerRoute && user.role !== "EMPLOYER") return redirect("/login");
			if (isAdminRoute && user.role !== "ADMIN") return redirect("/login");
			if (isCandidateRoute && user.role !== "CANDIDATE") return redirect("/login");
			context.locals.user = user;
			context.locals.session = session;
		} catch (e) {
			return redirect("/login");
		}
	}
	return next();
});
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(onRequest$1);
//#endregion
export { onRequest };
