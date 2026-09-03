globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { O as renderTemplate, S as renderComponent, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { t as $$EmployerLayout } from "./EmployerLayout_D3JfCK_k.mjs";
//#region src/pages/employer/index.astro
var employer_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "EmployerLayout", $$EmployerLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div><h1 class="text-3xl font-bold mb-4">Employer Dashboard</h1><p class="text-muted-foreground">Manage your job postings and applicants.</p></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/employer/index.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/employer/index.astro";
var $$url = "/employer";
//#endregion
//#region \0virtual:astro:page:src/pages/employer/index@_@astro
var page = () => employer_exports;
//#endregion
export { page };
