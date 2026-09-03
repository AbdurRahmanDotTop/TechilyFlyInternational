globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __commonJSMin } from "./rolldown-runtime_BDykq6kg.mjs";
import { d as maybeRenderHead, i as renderComponent, s as renderSlot, u as renderTemplate } from "./server_BdwtqBY8.mjs";
import { t as createComponent } from "./compiler_COBsY1UB.mjs";
import { t as $$Layout } from "./Layout_CwRTGVau.mjs";
//#region src/layouts/PublicLayout.astro
var $$PublicLayout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-screen flex flex-col"><header class="border-b bg-white sticky top-0 z-50"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16 items-center"><div class="flex-shrink-0"><a href="/" class="text-2xl font-bold text-teal-600 tracking-tight">Techily Fly</a></div><nav class="hidden md:flex space-x-8"><a href="/" class="text-gray-700 hover:text-teal-600 font-medium">Find Jobs</a><a href="/login" class="text-gray-700 hover:text-teal-600 font-medium">Candidate Sign In</a><a href="/employer" class="bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md font-medium transition-colors">Employer Portal</a></nav></div></div></header><main class="flex-1 bg-slate-50">${renderSlot($$result, $$slots["default"])}</main><footer class="bg-gray-900 text-white py-12"><div class="max-w-7xl mx-auto px-4 text-center"><p class="text-gray-400">&copy; 2026 Techily Fly International. All rights reserved.</p></div></footer></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/layouts/PublicLayout.astro", void 0);
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}));
//#endregion
export { $$PublicLayout as n, require_jsx_runtime as t };
