globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_BDykq6kg.mjs";
import { B as createAstro, O as renderTemplate, S as renderComponent } from "./sequence_Cy34-R2h.mjs";
import { t as require_react } from "./react_DrT0j-Yv.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { t as $$PublicLayout } from "./PublicLayout_DgJZzNdn.mjs";
import { r as Button, t as CircleCheck } from "./circle-check_CrCMRUfo.mjs";
import { t as require_jsx_runtime } from "./jsx-runtime_kxRjB8xb.mjs";
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
						className: "flex items-center text-xl text-muted-foreground mb-4",
						children: [job.employer, job.isVerified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 flex items-center text-primary",
							title: "Verified Employer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 fill-blue-600 text-white" })
						})]
					})] }), job.status === "EXPIRED" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "secondary",
						className: "bg-muted text-muted-foreground cursor-not-allowed",
						disabled: true,
						children: "Applications Closed"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						className: "bg-primary hover:bg-primary/90",
						children: "Apply Now"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex space-x-6 text-sm text-muted-foreground mb-8 pb-8 border-b",
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
					className: "prose max-w-none mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold mb-4",
						children: "Job Description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground/80 leading-relaxed",
						children: job.description
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-primary/5 p-8 rounded-xl border border-primary/20 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold text-foreground mb-3",
							children: "नौकरी के लिए अपना CV भेजें"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-foreground/80 mb-6 text-lg",
							children: [
								"नौकरी के लिए अपना CV, पासपोर्ट और पासपोर्ट साइज फोटो भेजें।",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"अगर नौकरी या प्रक्रिया से जुड़ी कोई जानकारी चाहिए, तो बेझिझक हमसे संपर्क करें।"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/918825164657",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center justify-center h-12 px-6 rounded-md bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-5 h-5 mr-2 fill-current",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
								}), "Apply via WhatsApp (+91 88251)"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/917320085578",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center justify-center h-12 px-6 rounded-md bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-5 h-5 mr-2 fill-current",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
								}), "Apply via WhatsApp (+91 73200)"]
							})]
						})
					]
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
