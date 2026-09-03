globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { d as maybeRenderHead, i as renderComponent, s as renderSlot, u as renderTemplate } from "./server_BdwtqBY8.mjs";
import { t as createComponent } from "./compiler_COBsY1UB.mjs";
import { t as $$Layout } from "./Layout_CwRTGVau.mjs";
//#region src/layouts/EmployerLayout.astro
var $$EmployerLayout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex min-h-screen"><aside class="w-64 bg-blue-900 text-white p-6"><h2 class="text-xl font-bold mb-6">Employer Hub</h2><nav class="space-y-2"><a href="/employer" class="block px-4 py-2 rounded bg-blue-800">Dashboard</a><a href="/employer/jobs" class="block px-4 py-2 rounded hover:bg-blue-800">My Jobs</a><a href="/employer/applicants" class="block px-4 py-2 rounded hover:bg-blue-800">Applicants</a></nav></aside><main class="flex-1 p-8 bg-blue-50/30">${renderSlot($$result, $$slots["default"])}</main></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/layouts/EmployerLayout.astro", void 0);
//#endregion
//#region src/pages/employer/index.astro
var employer_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "EmployerLayout", $$EmployerLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div><h1 class="text-3xl font-bold mb-4">Employer Dashboard</h1><p class="text-gray-500">Manage your job postings and applicants.</p></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/employer/index.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/employer/index.astro";
var $$url = "/employer";
//#endregion
//#region \0virtual:astro:page:src/pages/employer/index@_@astro
var page = () => employer_exports;
//#endregion
export { page };
