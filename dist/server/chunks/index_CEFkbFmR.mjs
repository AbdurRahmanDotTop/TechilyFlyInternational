globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { B as createAstro, O as renderTemplate, S as renderComponent, j as addAttribute, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { d as or, i as jobs, l as like, s as and, t as getDb } from "./db_BeN8plLf.mjs";
import { t as $$PublicLayout } from "./PublicLayout_BD6CmzQV.mjs";
import { t as createLucideIcon } from "./createLucideIcon_ChIzLsjp.mjs";
import { n as MapPin, r as Briefcase, t as Search } from "./search_CgMV_wv2.mjs";
import { env } from "cloudflare:workers";
/**
* @license lucide-react v1.39.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Calendar = createLucideIcon("calendar", [
	["path", {
		d: "M8 2v3",
		key: "1ioesn"
	}],
	["path", {
		d: "M16 2v3",
		key: "otl347"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}]
]);
//#endregion
//#region src/pages/jobs/index.astro
var jobs_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const searchParams = Astro.url.searchParams;
	const q = searchParams.get("q") || "";
	const location = searchParams.get("location") || "";
	const db = getDb(env);
	let conditions = [];
	if (q) conditions.push(or(like(jobs.title, `%${q}%`), like(jobs.description, `%${q}%`)));
	if (location) conditions.push(or(like(jobs.city, `%${location}%`), like(jobs.country, `%${location}%`)));
	let query = db.select().from(jobs);
	if (conditions.length > 0) query = query.where(and(...conditions));
	const fetchedJobs = await query.all();
	return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-screen bg-background py-16"><div class="container mx-auto px-4 max-w-6xl"><!-- Search Header --><div class="mb-12"><h1 class="text-4xl font-bold mb-6 text-foreground tracking-tight">Search Results</h1><form action="/jobs" method="GET" class="bg-card p-4 rounded-2xl shadow-sm border border-border flex flex-col md:flex-row gap-4 animate-in fade-in slide-in-from-bottom-5"><div class="relative flex-1">${renderComponent($$result, "Search", Search, { "className": "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" })}<input name="q"${addAttribute(q, "value")} placeholder="Job title, keyword, or company" class="w-full pl-12 h-14 text-lg border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"></div><div class="relative flex-1">${renderComponent($$result, "MapPin", MapPin, { "className": "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" })}<input name="location"${addAttribute(location, "value")} placeholder="City or Country" class="w-full pl-12 h-14 text-lg border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"></div><button type="submit" class="h-14 px-8 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-xl transition-all shadow-md">Search</button></form></div><!-- Results Section --><div><h2 class="text-2xl font-semibold mb-6 text-foreground">${fetchedJobs.length} ${fetchedJobs.length === 1 ? "Job" : "Jobs"} Found</h2>${fetchedJobs.length === 0 ? renderTemplate`<div class="bg-card rounded-2xl border border-border p-12 text-center shadow-sm"><div class="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">${renderComponent($$result, "Search", Search, { "className": "h-8 w-8 text-muted-foreground" })}</div><h3 class="text-2xl font-semibold text-foreground mb-2">No jobs match your search</h3><p class="text-muted-foreground text-lg mb-6">Try adjusting your keywords or location to find more results.</p><a href="/jobs" class="inline-block px-6 py-3 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-xl transition-colors">Clear Search</a></div>` : renderTemplate`<div class="grid gap-6">${fetchedJobs.map((job) => renderTemplate`<a${addAttribute(`/jobs/${job.slug}`, "href")} class="block bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-md transition-all group"><div class="flex flex-col md:flex-row md:items-start justify-between gap-4"><div><h3 class="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">${job.title}</h3><div class="flex flex-wrap items-center gap-4 text-muted-foreground mb-4"><div class="flex items-center gap-1.5">${renderComponent($$result, "Briefcase", Briefcase, { "className": "w-4 h-4" })}<span>Full-time</span></div><div class="flex items-center gap-1.5">${renderComponent($$result, "MapPin", MapPin, { "className": "w-4 h-4" })}<span>${job.city}${job.city && job.country ? ", " : ""}${job.country || "Remote"}</span></div><div class="flex items-center gap-1.5">${renderComponent($$result, "Calendar", Calendar, { "className": "w-4 h-4" })}<span>Expires ${new Date(job.expiryAt).toLocaleDateString()}</span></div></div></div><div class="flex-shrink-0"><span class="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg">View Details</span></div></div></a>`)}</div>`}</div></div></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/jobs/index.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/jobs/index.astro";
var $$url = "/jobs";
//#endregion
//#region \0virtual:astro:page:src/pages/jobs/index@_@astro
var page = () => jobs_exports;
//#endregion
export { page };
