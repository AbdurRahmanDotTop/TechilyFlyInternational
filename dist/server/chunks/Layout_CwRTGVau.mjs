globalThis.process ??= {};
globalThis.process.env ??= {};
import { S as createAstro, f as renderHead, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_BdwtqBY8.mjs";
import { t as createComponent } from "./compiler_COBsY1UB.mjs";
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "Techily Fly", description = "Find Your Next Career in the Gulf" } = Astro.props;
	return renderTemplate`<html lang="en" class="h-full antialiased"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead($$result)}</head><body class="min-h-full flex flex-col">${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/layouts/Layout.astro", void 0);
//#endregion
export { $$Layout as t };
