globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { O as renderTemplate, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { o as users, t as getDb } from "./db_BeN8plLf.mjs";
import { env } from "cloudflare:workers";
//#region src/pages/test-users.astro
var test_users_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TestUsers,
	file: () => $$file,
	url: () => $$url
});
var $$TestUsers = createComponent(async ($$result, $$props, $$slots) => {
	const allUsers = await getDb(env).select().from(users).all();
	return renderTemplate`<html>${maybeRenderHead($$result)}<body><h1>Users Test</h1><p>Length: ${allUsers.length}</p><pre>${JSON.stringify(allUsers, null, 2)}</pre></body></html>`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/test-users.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/test-users.astro";
var $$url = "/test-users";
//#endregion
//#region \0virtual:astro:page:src/pages/test-users@_@astro
var page = () => test_users_exports;
//#endregion
export { page };
