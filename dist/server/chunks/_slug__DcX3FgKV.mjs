globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { S as createAstro, i as renderComponent, u as renderTemplate } from "./server_BdwtqBY8.mjs";
import { t as require_react } from "./react_DrT0j-Yv.mjs";
import { t as createComponent } from "./compiler_COBsY1UB.mjs";
import { n as $$PublicLayout, t as require_jsx_runtime } from "./jsx-runtime_Z7dso4w-.mjs";
import { r as Button, t as CircleCheck } from "./circle-check_BoEzJB_r.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function JobDetails({ slug }) {
	const job = {
		title: "Senior Software Engineer",
		employer: "Tech Corp Gulf",
		country: "United Arab Emirates",
		city: "Dubai",
		expiry: "2024-12-31",
		status: "EXPIRED",
		isVerified: true,
		description: "We are looking for a Senior Software Engineer with 5+ years of experience in React and Node.js to join our expanding team in Dubai."
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-4xl mx-auto py-12 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white p-8 rounded-lg shadow-sm border mb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-bold mb-2",
						children: job.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center text-xl text-gray-600 mb-4",
						children: [job.employer, job.isVerified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 flex items-center text-blue-600",
							title: "Verified Employer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 fill-blue-600 text-white" })
						})]
					})] }), job.status === "EXPIRED" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "secondary",
						className: "bg-gray-300 text-gray-600 cursor-not-allowed",
						disabled: true,
						children: "Applications Closed"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						className: "bg-teal-600 hover:bg-teal-700",
						children: "Apply Now"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex space-x-6 text-sm text-gray-500 mb-8 pb-8 border-b",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold mr-2",
								children: "Location:"
							}),
							" ",
							job.city,
							", ",
							job.country
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold mr-2",
								children: "Expires:"
							}),
							" ",
							job.expiry
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "prose max-w-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold mb-4",
						children: "Job Description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-gray-700 leading-relaxed",
						children: job.description
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/pages/jobs/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Slug = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	return renderTemplate`${renderComponent($$result, "PublicLayout", $$PublicLayout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "JobDetails", JobDetails, {
		"slug": slug || "",
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/components/jobs/JobDetails.tsx",
		"client:component-export": "default"
	})}` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/jobs/[slug].astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/jobs/[slug].astro";
var $$url = "/jobs/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/jobs/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
