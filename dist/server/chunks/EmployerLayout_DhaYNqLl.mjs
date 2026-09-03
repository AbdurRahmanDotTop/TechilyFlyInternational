globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as renderSlot, d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_DEJhPYUR.mjs";
import { t as createComponent } from "./compiler_ppDonbjW.mjs";
import { t as $$Layout } from "./Layout_DyOPQHO5.mjs";
//#region src/layouts/EmployerLayout.astro
var $$EmployerLayout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex min-h-screen"><aside class="w-64 bg-foreground text-white p-6 flex flex-col justify-between"><div><h2 class="text-xl font-bold mb-6 text-primary">Employer Hub</h2><nav class="space-y-2"><a href="/employer" class="block px-4 py-2 rounded hover:bg-white/10 transition-colors">Dashboard</a><a href="/employer/jobs" class="block px-4 py-2 rounded hover:bg-white/10 transition-colors">My Jobs</a><a href="/employer/applicants" class="block px-4 py-2 rounded hover:bg-white/10 transition-colors">Applicants</a></nav></div><div><form action="/api/auth/logout" method="POST"><button type="submit" class="w-full text-left px-4 py-2 rounded bg-destructive text-white hover:bg-destructive/80 transition-colors">Logout</button></form></div></aside><main class="flex-1 p-8 bg-secondary/30">${renderSlot($$result, $$slots["default"])}</main></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/layouts/EmployerLayout.astro", void 0);
//#endregion
export { $$EmployerLayout as t };
