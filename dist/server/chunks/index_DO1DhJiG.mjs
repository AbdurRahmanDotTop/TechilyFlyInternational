globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { O as renderTemplate, S as renderComponent, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { t as $$CandidateLayout } from "./CandidateLayout_B0lylTV_.mjs";
//#region src/pages/candidate/index.astro
var candidate_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "CandidateLayout", $$CandidateLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-4xl mx-auto"><h1 class="text-3xl font-bold mb-4">Candidate Dashboard</h1><p class="text-muted-foreground">Track your job applications and update your profile.</p></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/candidate/index.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/candidate/index.astro";
var $$url = "/candidate";
//#endregion
//#region \0virtual:astro:page:src/pages/candidate/index@_@astro
var page = () => candidate_exports;
//#endregion
export { page };
