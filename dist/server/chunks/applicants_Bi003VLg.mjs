globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_DEJhPYUR.mjs";
import { t as createComponent } from "./compiler_ppDonbjW.mjs";
import { t as $$EmployerLayout } from "./EmployerLayout_DhaYNqLl.mjs";
//#region src/pages/employer/applicants.astro
var applicants_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Applicants,
	file: () => $$file,
	url: () => $$url
});
var $$Applicants = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "EmployerLayout", $$EmployerLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div><div class="mb-6"><h1 class="text-3xl font-bold">Applicants</h1><p class="text-muted-foreground">Review and manage candidates who applied to your jobs.</p></div><div class="bg-card rounded-lg border border-border overflow-hidden"><div class="p-8 text-center"><h3 class="text-lg font-medium">No applicants found</h3><p class="text-muted-foreground mt-2">When candidates apply to your jobs, they will appear here.</p></div></div></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/employer/applicants.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/employer/applicants.astro";
var $$url = "/employer/applicants";
//#endregion
//#region \0virtual:astro:page:src/pages/employer/applicants@_@astro
var page = () => applicants_exports;
//#endregion
export { page };
