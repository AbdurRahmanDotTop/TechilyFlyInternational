globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { O as renderTemplate, S as renderComponent, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { t as $$EmployerLayout } from "./EmployerLayout_D3JfCK_k.mjs";
//#region src/pages/employer/jobs.astro
var jobs_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Jobs,
	file: () => $$file,
	url: () => $$url
});
var $$Jobs = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "EmployerLayout", $$EmployerLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div><div class="flex justify-between items-center mb-6"><div><h1 class="text-3xl font-bold">My Jobs</h1><p class="text-muted-foreground">Manage your job postings here.</p></div><button class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium">+ Post New Job</button></div><div class="bg-card rounded-lg border border-border overflow-hidden"><div class="p-8 text-center"><h3 class="text-lg font-medium">No jobs posted yet</h3><p class="text-muted-foreground mt-2">Create your first job posting to attract top talent.</p></div></div></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/employer/jobs.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/employer/jobs.astro";
var $$url = "/employer/jobs";
//#endregion
//#region \0virtual:astro:page:src/pages/employer/jobs@_@astro
var page = () => jobs_exports;
//#endregion
export { page };
