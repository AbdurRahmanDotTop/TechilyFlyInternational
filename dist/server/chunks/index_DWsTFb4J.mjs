globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { d as maybeRenderHead, i as renderComponent, s as renderSlot, u as renderTemplate } from "./server_BdwtqBY8.mjs";
import { t as createComponent } from "./compiler_COBsY1UB.mjs";
import { t as $$Layout } from "./Layout_CwRTGVau.mjs";
//#region src/layouts/CandidateLayout.astro
var $$CandidateLayout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col min-h-screen"><header class="border-b bg-white p-4 flex justify-between items-center"><h2 class="text-xl font-bold text-teal-600">Candidate Portal</h2><nav class="space-x-4"><a href="/candidate" class="text-sm font-medium">Dashboard</a><a href="/candidate/profile" class="text-sm font-medium">Profile</a><a href="/candidate/applications" class="text-sm font-medium">My Applications</a></nav></header><main class="flex-1 p-8 bg-slate-50">${renderSlot($$result, $$slots["default"])}</main></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/layouts/CandidateLayout.astro", void 0);
//#endregion
//#region src/pages/candidate/index.astro
var candidate_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "CandidateLayout", $$CandidateLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-4xl mx-auto"><h1 class="text-3xl font-bold mb-4">Candidate Dashboard</h1><p class="text-gray-500">Track your job applications and update your profile.</p></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/candidate/index.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/candidate/index.astro";
var $$url = "/candidate";
//#endregion
//#region \0virtual:astro:page:src/pages/candidate/index@_@astro
var page = () => candidate_exports;
//#endregion
export { page };
