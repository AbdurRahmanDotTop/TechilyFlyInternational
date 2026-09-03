globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as renderSlot, d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_DEJhPYUR.mjs";
import { t as createComponent } from "./compiler_ppDonbjW.mjs";
import { t as $$Layout } from "./Layout_DyOPQHO5.mjs";
//#region src/layouts/AdminLayout.astro
var $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex min-h-screen"><aside class="w-64 bg-foreground text-white p-6 flex flex-col justify-between"><div><h2 class="text-xl font-bold mb-6 text-primary tracking-tight">Admin Panel</h2><nav class="space-y-2"><a href="/admin" class="block px-4 py-2 rounded bg-foreground/80">Dashboard</a><a href="/admin/jobs" class="block px-4 py-2 rounded hover:bg-foreground/80">Jobs Queue</a><a href="/admin/users" class="block px-4 py-2 rounded hover:bg-foreground/80">Users</a></nav></div><div class="mt-8 pt-6 border-t border-muted-foreground/20"><p class="text-xs text-muted-foreground mb-2">Support Contact</p><a href="mailto:admin@international.techilyfly.com" class="text-sm hover:text-primary transition-colors break-all block mb-6">admin@international.techilyfly.com</a><form action="/api/auth/logout" method="POST"><button type="submit" class="w-full text-left px-4 py-2 rounded bg-destructive text-white hover:bg-destructive/80 transition-colors">Logout</button></form></div></aside><main class="flex-1 p-8 bg-background">${renderSlot($$result, $$slots["default"])}</main></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/layouts/AdminLayout.astro", void 0);
//#endregion
export { $$AdminLayout as t };
