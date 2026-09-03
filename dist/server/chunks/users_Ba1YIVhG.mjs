globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { O as renderTemplate, S as renderComponent, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { t as $$AdminLayout } from "./AdminLayout_BPSSze98.mjs";
//#region src/pages/admin/users.astro
var users_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Users,
	file: () => $$file,
	url: () => $$url
});
var $$Users = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div><div class="mb-6"><h1 class="text-3xl font-bold">Users Management</h1><p class="text-muted-foreground">Manage platform users, employers, and candidates.</p></div><div class="bg-card rounded-lg border border-border overflow-hidden"><div class="p-8 text-center"><h3 class="text-lg font-medium">No users found</h3><p class="text-muted-foreground mt-2">User list will appear here.</p></div></div></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/users.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/users.astro";
var $$url = "/admin/users";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/users@_@astro
var page = () => users_exports;
//#endregion
export { page };
