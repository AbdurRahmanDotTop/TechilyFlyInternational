globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { O as renderTemplate, S as renderComponent, j as addAttribute, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { i as jobs, t as getDb } from "./db_BeN8plLf.mjs";
import { t as $$AdminLayout } from "./AdminLayout__M20q1yf.mjs";
import { env } from "cloudflare:workers";
//#region src/pages/admin/jobs.astro
var jobs_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Jobs,
	file: () => $$file,
	url: () => $$url
});
var $$Jobs = createComponent(async ($$result, $$props, $$slots) => {
	const allJobs = await getDb(env).select().from(jobs).all();
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div><div class="mb-6"><h1 class="text-3xl font-bold text-foreground">Jobs Management</h1><p class="text-muted-foreground">Review, approve, or reject job postings.</p></div><div class="bg-card rounded-lg border border-border overflow-hidden shadow-sm">${allJobs.length === 0 ? renderTemplate`<div class="p-8 text-center"><h3 class="text-lg font-medium text-foreground">No jobs in queue</h3><p class="text-muted-foreground mt-2">All jobs have been reviewed.</p></div>` : renderTemplate`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead class="bg-muted/50 border-b border-border"><tr><th class="px-6 py-4 font-medium text-muted-foreground">Job ID</th><th class="px-6 py-4 font-medium text-muted-foreground">Title</th><th class="px-6 py-4 font-medium text-muted-foreground">Location</th><th class="px-6 py-4 font-medium text-muted-foreground">Status</th><th class="px-6 py-4 font-medium text-muted-foreground">Action</th></tr></thead><tbody class="divide-y divide-border">${allJobs.map((job) => renderTemplate`<tr class="hover:bg-muted/20 transition-colors"><td class="px-6 py-4 font-mono text-xs text-muted-foreground">${job.id.substring(0, 8)}...</td><td class="px-6 py-4 text-foreground font-medium">${job.title}</td><td class="px-6 py-4 text-muted-foreground">${job.city}${job.city && job.country ? ", " : ""}${job.country || "Remote"}</td><td class="px-6 py-4"><span${addAttribute(`inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${job.status === "PUBLISHED" ? "bg-primary/10 text-primary" : job.status === "DRAFT" ? "bg-muted text-muted-foreground" : "bg-destructive/10 text-destructive"}`, "class")}>${job.status}</span></td><td class="px-6 py-4"><a${addAttribute(`/jobs/${job.slug}`, "href")} target="_blank" class="text-primary hover:underline text-sm font-medium">View</a></td></tr>`)}</tbody></table></div>`}</div></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/jobs.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/jobs.astro";
var $$url = "/admin/jobs";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/jobs@_@astro
var page = () => jobs_exports;
//#endregion
export { page };
