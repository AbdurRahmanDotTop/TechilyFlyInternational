globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { O as renderTemplate, S as renderComponent, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { t as $$AdminLayout } from "./AdminLayout_BPSSze98.mjs";
//#region src/pages/admin/jobs.astro
var jobs_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Jobs,
	file: () => $$file,
	url: () => $$url
});
var $$Jobs = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div><div class="mb-6"><h1 class="text-3xl font-bold">Jobs Management</h1><p class="text-muted-foreground">Review, approve, or reject job postings.</p></div><div class="bg-card rounded-lg border border-border overflow-hidden"><div class="p-8 text-center"><h3 class="text-lg font-medium">No jobs in queue</h3><p class="text-muted-foreground mt-2">All jobs have been reviewed.</p></div></div></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/jobs.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/jobs.astro";
var $$url = "/admin/jobs";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/jobs@_@astro
var page = () => jobs_exports;
//#endregion
export { page };
