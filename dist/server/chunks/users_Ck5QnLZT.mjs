globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { O as renderTemplate, S as renderComponent, j as addAttribute, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { o as users, t as getDb } from "./db_BeN8plLf.mjs";
import { t as $$AdminLayout } from "./AdminLayout__M20q1yf.mjs";
import { env } from "cloudflare:workers";
//#region src/pages/admin/users.astro
var users_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Users,
	file: () => $$file,
	url: () => $$url
});
var $$Users = createComponent(async ($$result, $$props, $$slots) => {
	const allUsers = await getDb(env).select().from(users).all();
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div><div class="mb-6"><h1 class="text-3xl font-bold text-foreground">Users Management</h1><p class="text-muted-foreground">Manage platform users, employers, and candidates.</p></div><div class="bg-card rounded-lg border border-border overflow-hidden shadow-sm">${allUsers.length === 0 ? renderTemplate`<div class="p-8 text-center"><h3 class="text-lg font-medium text-foreground">No users found</h3><p class="text-muted-foreground mt-2">User list will appear here.</p></div>` : renderTemplate`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead class="bg-muted/50 border-b border-border"><tr><th class="px-6 py-4 font-medium text-muted-foreground">User ID</th><th class="px-6 py-4 font-medium text-muted-foreground">Email</th><th class="px-6 py-4 font-medium text-muted-foreground">Role</th><th class="px-6 py-4 font-medium text-muted-foreground">Joined At</th></tr></thead><tbody class="divide-y divide-border">${allUsers.map((user) => renderTemplate`<tr class="hover:bg-muted/20 transition-colors"><td class="px-6 py-4 font-mono text-xs text-muted-foreground">${user.id.substring(0, 8)}...</td><td class="px-6 py-4 text-foreground font-medium">${user.email}</td><td class="px-6 py-4"><span${addAttribute(`inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${user.role === "ADMIN" ? "bg-destructive/10 text-destructive" : user.role === "EMPLOYER" ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"}`, "class")}>${user.role}</span></td><td class="px-6 py-4 text-muted-foreground">${new Date(user.createdAt).toLocaleDateString()}</td></tr>`)}</tbody></table></div>`}</div></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/users.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/users.astro";
var $$url = "/admin/users";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/users@_@astro
var page = () => users_exports;
//#endregion
export { page };
