globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { d as maybeRenderHead, i as renderComponent, s as renderSlot, u as renderTemplate } from "./server_BdwtqBY8.mjs";
import { t as createComponent } from "./compiler_COBsY1UB.mjs";
import { t as $$Layout } from "./Layout_DRxUoOlG.mjs";
//#region src/layouts/AdminLayout.astro
var $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex min-h-screen"><aside class="w-64 bg-foreground text-white p-6 flex flex-col justify-between"><div><h2 class="text-xl font-bold mb-6 text-primary tracking-tight">Admin Panel</h2><nav class="space-y-2"><a href="/admin" class="block px-4 py-2 rounded bg-foreground/80">Dashboard</a><a href="/admin/jobs" class="block px-4 py-2 rounded hover:bg-foreground/80">Jobs Queue</a><a href="/admin/users" class="block px-4 py-2 rounded hover:bg-foreground/80">Users</a></nav></div><div class="mt-8 pt-6 border-t border-muted-foreground/20"><p class="text-xs text-muted-foreground mb-2">Support Contact</p><a href="mailto:admin@international.techilyfly.com" class="text-sm hover:text-primary transition-colors break-all">admin@international.techilyfly.com</a></div></aside><main class="flex-1 p-8 bg-background">${renderSlot($$result, $$slots["default"])}</main></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/layouts/AdminLayout.astro", void 0);
//#endregion
//#region src/pages/admin/index.astro
var admin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div><h1 class="text-3xl font-bold mb-4">Admin Dashboard</h1><p class="text-muted-foreground">Manage the platform.</p></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/index.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/index.astro";
var $$url = "/admin";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/index@_@astro
var page = () => admin_exports;
//#endregion
export { page };
