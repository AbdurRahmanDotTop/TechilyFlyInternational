globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { O as renderTemplate, S as renderComponent, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { t as $$PublicLayout } from "./PublicLayout_BSjpQger.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, { "title": "404 - Page Not Found" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-[70vh] flex items-center justify-center bg-background px-4"><div class="max-w-xl w-full text-center space-y-8 p-10 bg-white rounded-2xl shadow-sm border border-border"><div class="space-y-4"><h1 class="text-7xl font-extrabold text-foreground tracking-tighter">404</h1><h2 class="text-3xl font-bold text-foreground">Page Not Found</h2><p class="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">Sorry, the page you’re looking for doesn’t exist or may have been moved.</p></div><div class="pt-4"><a href="/" class="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-200">Back to Home</a></div></div></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/404.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
