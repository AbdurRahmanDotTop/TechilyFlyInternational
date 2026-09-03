globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { c as users, t as getDb } from "./db_BmW1G98j.mjs";
import { env } from "cloudflare:workers";
//#region src/pages/api/test-db.ts
var test_db_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async () => {
	try {
		const allUsers = await getDb(env).select().from(users).all();
		return new Response(JSON.stringify(allUsers), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (e) {
		return new Response(e.message, { status: 500 });
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/test-db@_@ts
var page = () => test_db_exports;
//#endregion
export { page };
