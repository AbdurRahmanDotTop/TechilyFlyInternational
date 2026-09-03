globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { O as renderTemplate, S as renderComponent, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { t as $$CandidateLayout } from "./CandidateLayout_CfAcwQ2C.mjs";
//#region src/pages/candidate/applications.astro
var applications_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Applications,
	file: () => $$file,
	url: () => $$url
});
var $$Applications = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "CandidateLayout", $$CandidateLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-4xl mx-auto"><div class="mb-6"><h1 class="text-3xl font-bold">My Applications</h1><p class="text-muted-foreground">Track the status of jobs you have applied to.</p></div><div class="bg-card rounded-lg border border-border overflow-hidden"><div class="p-8 text-center"><h3 class="text-lg font-medium">No applications found</h3><p class="text-muted-foreground mt-2">You haven't applied to any jobs yet.</p></div></div></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/candidate/applications.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/candidate/applications.astro";
var $$url = "/candidate/applications";
//#endregion
//#region \0virtual:astro:page:src/pages/candidate/applications@_@astro
var page = () => applications_exports;
//#endregion
export { page };
