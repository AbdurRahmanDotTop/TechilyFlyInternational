globalThis.process ??= {};
globalThis.process.env ??= {};
import { O as renderTemplate, S as renderComponent, T as renderSlot, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { t as $$Layout } from "./Layout_CV3nNXHY.mjs";
//#region src/layouts/CandidateLayout.astro
var $$CandidateLayout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col min-h-screen"><header class="border-b bg-white p-4 flex justify-between items-center sticky top-0 z-40"><h2 class="text-xl font-bold text-primary">Candidate Portal</h2><nav class="space-x-6 flex items-center"><a href="/candidate" class="text-sm font-medium hover:text-primary transition-colors">Dashboard</a><a href="/candidate/profile" class="text-sm font-medium hover:text-primary transition-colors">Profile</a><a href="/candidate/applications" class="text-sm font-medium hover:text-primary transition-colors">My Applications</a><form action="/api/auth/logout" method="POST" class="inline"><button type="submit" class="text-sm font-medium text-destructive hover:text-destructive/80 transition-colors">Logout</button></form></nav></header><main class="flex-1 p-8 bg-background">${renderSlot($$result, $$slots["default"])}</main></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/layouts/CandidateLayout.astro", void 0);
//#endregion
export { $$CandidateLayout as t };
