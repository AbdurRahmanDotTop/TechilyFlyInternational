globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { O as renderTemplate, S as renderComponent, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { c as users, t as getDb } from "./db_BmW1G98j.mjs";
import { t as $$Layout } from "./Layout_Da7V5GUR.mjs";
import { env } from "cloudflare:workers";
//#region src/pages/test-env.astro
var test_env_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TestEnv,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$TestEnv = createComponent(async ($$result, $$props, $$slots) => {
	let envCheck = {
		hasEnv: !!env,
		hasDbBinding: env ? !!env.DB : false,
		dbType: env && env.DB ? typeof env.DB : "none"
	};
	let errorMsg = "";
	let dbUsers = [];
	try {
		dbUsers = await getDb(env).select().from(users).all();
	} catch (e) {
		errorMsg = String(e) + "\n" + e.stack;
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Test Env" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"><h1 class="text-3xl font-bold mb-8">Environment Test</h1><div class="space-y-6"><div class="bg-white shadow overflow-hidden sm:rounded-lg p-6"><h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">Worker Env Check</h3><pre class="bg-gray-100 p-4 rounded overflow-x-auto"><code>${JSON.stringify(envCheck, null, 2)}</code></pre></div><div class="bg-white shadow overflow-hidden sm:rounded-lg p-6"><h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">DB Users Test</h3>${errorMsg ? renderTemplate`<div class="p-4 bg-red-50 text-red-700 rounded-md"><h4 class="font-bold">Database Error:</h4><pre class="mt-2 text-sm whitespace-pre-wrap">${errorMsg}</pre></div>` : renderTemplate`<div><p class="text-green-600 font-bold mb-4">Successfully connected to database!</p><p>Users count: ${dbUsers.length}</p></div>`}</div></div></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/test-env.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/test-env.astro";
var $$url = "/test-env";
//#endregion
//#region \0virtual:astro:page:src/pages/test-env@_@astro
var page = () => test_env_exports;
//#endregion
export { page };
