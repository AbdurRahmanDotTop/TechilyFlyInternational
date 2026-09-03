globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { O as renderTemplate, S as renderComponent, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { t as $$CandidateLayout } from "./CandidateLayout_DNbhwnMe.mjs";
//#region src/pages/candidate/profile.astro
var profile_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Profile,
	file: () => $$file,
	url: () => $$url
});
var $$Profile = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "CandidateLayout", $$CandidateLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-4xl mx-auto"><div class="mb-6"><h1 class="text-3xl font-bold">My Profile</h1><p class="text-muted-foreground">Manage your personal information and resume.</p></div><div class="bg-card rounded-lg border border-border overflow-hidden"><div class="p-8"><h3 class="text-lg font-medium border-b pb-2 mb-4 border-border">Personal Information</h3><p class="text-muted-foreground">Your profile information goes here. (Profile completion feature coming soon)</p></div></div></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/candidate/profile.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/candidate/profile.astro";
var $$url = "/candidate/profile";
//#endregion
//#region \0virtual:astro:page:src/pages/candidate/profile@_@astro
var page = () => profile_exports;
//#endregion
export { page };
