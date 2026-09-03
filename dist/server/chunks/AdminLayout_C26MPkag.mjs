globalThis.process ??= {};
globalThis.process.env ??= {};
import { B as createAstro, O as renderTemplate, S as renderComponent, T as renderSlot, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { t as $$Layout } from "./Layout_Da7V5GUR.mjs";
//#region src/layouts/AdminLayout.astro
createAstro("https://astro.build");
var $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AdminLayout;
	const { title } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex min-h-screen"><aside class="w-64 bg-foreground text-white p-6 flex flex-col justify-between"><div><div class="mb-6"><a href="/" class="text-xl font-bold tracking-tight block mb-2"><span class="text-primary">Techily Fly</span><span class="text-white ml-1">International</span></a><h2 class="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Admin Panel</h2></div><nav class="space-y-2"><a href="/admin" class="block px-4 py-2 rounded bg-foreground/80">Dashboard</a><a href="/admin/jobs" class="block px-4 py-2 rounded hover:bg-foreground/80">Jobs Queue</a><a href="/admin/users" class="block px-4 py-2 rounded hover:bg-foreground/80">Users</a></nav></div><div class="mt-8 pt-6 border-t border-muted-foreground/20"><p class="text-xs text-muted-foreground mb-2">Support Contact</p><a href="mailto:admin@international.techilyfly.com" class="text-sm hover:text-primary transition-colors break-all block mb-6">admin@international.techilyfly.com</a><form action="/api/auth/logout" method="POST"><button type="submit" class="w-full text-left px-4 py-2 rounded bg-destructive text-white hover:bg-destructive/80 transition-colors">Logout</button></form></div></aside><main class="flex-1 p-8 bg-background">${renderSlot($$result, $$slots["default"])}</main></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/layouts/AdminLayout.astro", void 0);
//#endregion
export { $$AdminLayout as t };
