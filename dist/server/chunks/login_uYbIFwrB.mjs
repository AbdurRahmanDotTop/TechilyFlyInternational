globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { i as renderComponent, u as renderTemplate } from "./server_BdwtqBY8.mjs";
import { t as require_react } from "./react_DrT0j-Yv.mjs";
import { t as createComponent } from "./compiler_COBsY1UB.mjs";
import { t as $$PublicLayout } from "./PublicLayout_iWdOhoJ9.mjs";
import { t as require_jsx_runtime } from "./jsx-runtime_kxRjB8xb.mjs";
import { t as S } from "./dist_Dhhdr-tS.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function LoginForm() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[calc(100vh-200px)] items-center justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-sm space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold",
					children: "Login"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Enter your email below to login to your account"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						placeholder: "Email",
						className: "w-full p-2 border rounded"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						placeholder: "Password",
						className: "w-full p-2 border rounded"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center my-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(S, { siteKey: "1x00000000000000000000AA" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "w-full bg-primary hover:bg-primary/90 text-white p-2 rounded",
						children: "Sign In"
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/pages/login.astro
var login_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Login,
	file: () => $$file,
	url: () => $$url
});
var $$Login = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "LoginForm", LoginForm, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/components/auth/LoginForm.tsx",
		"client:component-export": "default"
	})}` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/login.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/login.astro";
var $$url = "/login";
//#endregion
//#region \0virtual:astro:page:src/pages/login@_@astro
var page = () => login_exports;
//#endregion
export { page };
