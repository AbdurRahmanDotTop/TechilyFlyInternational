globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll, r as __toESM } from "./rolldown-runtime_BDykq6kg.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_DEJhPYUR.mjs";
import { t as require_react } from "./react_DrT0j-Yv.mjs";
import { t as createComponent } from "./compiler_ppDonbjW.mjs";
import { r as jobs } from "./schema_BqQlk95h.mjs";
import { t as getDb } from "./db_1u8eNC5E.mjs";
import { t as $$AdminLayout } from "./AdminLayout_cKmvRKHp.mjs";
import { t as createLucideIcon } from "./createLucideIcon_ChIzLsjp.mjs";
import { t as Trash2 } from "./trash-2_CLqIj8by.mjs";
import { t as require_jsx_runtime } from "./jsx-runtime_kxRjB8xb.mjs";
import { env } from "cloudflare:workers";
/**
* @license lucide-react v1.39.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheckBig = createLucideIcon("circle-check-big", [["path", {
	d: "M21.801 10A10 10 0 1 1 17 3.335",
	key: "yps3ct"
}], ["path", {
	d: "m9 11 3 3L22 4",
	key: "1pflzl"
}]]);
/**
* @license lucide-react v1.39.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleX = createLucideIcon("circle-x", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]);
/**
* @license lucide-react v1.39.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Pencil = createLucideIcon("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]);
//#endregion
//#region src/components/admin/AdminJobActions.tsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminJobActions({ job }) {
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)(job);
	const handleStatusChange = async (newStatus) => {
		if (!confirm(`Are you sure you want to ${newStatus.toLowerCase()} this job?`)) return;
		setLoading(true);
		try {
			if ((await fetch(`/api/admin/jobs/${job.id}/status`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ status: newStatus })
			})).ok) window.location.reload();
			else alert("Failed to update status");
		} catch (e) {
			alert("Error updating status");
		}
		setLoading(false);
	};
	const handleDelete = async () => {
		if (!confirm("Are you sure you want to permanently delete this job? This action cannot be undone.")) return;
		setLoading(true);
		try {
			if ((await fetch(`/api/admin/jobs/${job.id}`, { method: "DELETE" })).ok) window.location.reload();
			else alert("Failed to delete job");
		} catch (e) {
			alert("Error deleting job");
		}
		setLoading(false);
	};
	const handleUpdate = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			if ((await fetch(`/api/admin/jobs/${job.id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData)
			})).ok) {
				setIsEditing(false);
				window.location.reload();
			} else alert("Failed to update job");
		} catch (e) {
			alert("Error updating job");
		}
		setLoading(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			job.status !== "PUBLISHED" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => handleStatusChange("PUBLISHED"),
				disabled: loading,
				title: "Approve",
				className: "p-1.5 text-green-600 hover:bg-green-50 rounded-md transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { size: 16 })
			}),
			job.status !== "REJECTED" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => handleStatusChange("REJECTED"),
				disabled: loading,
				title: "Reject",
				className: "p-1.5 text-orange-600 hover:bg-orange-50 rounded-md transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { size: 16 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setIsEditing(true),
				disabled: loading,
				title: "Edit",
				className: "p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 16 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: handleDelete,
				disabled: loading,
				title: "Delete",
				className: "p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
			}),
			isEditing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background rounded-lg shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 py-4 border-b border-border flex justify-between items-center bg-muted/30",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							children: "Edit Job"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsEditing(false),
							className: "text-muted-foreground hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { size: 20 })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleUpdate,
						className: "overflow-y-auto p-6 flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium mb-1",
								children: "Title"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: formData.title,
								onChange: (e) => setFormData({
									...formData,
									title: e.target.value
								}),
								className: "w-full border border-input bg-background px-3 py-2 rounded-md",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-medium mb-1",
									children: "City"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: formData.city || "",
									onChange: (e) => setFormData({
										...formData,
										city: e.target.value
									}),
									className: "w-full border border-input bg-background px-3 py-2 rounded-md"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-medium mb-1",
									children: "Country"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: formData.country || "",
									onChange: (e) => setFormData({
										...formData,
										country: e.target.value
									}),
									className: "w-full border border-input bg-background px-3 py-2 rounded-md"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium mb-1",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: formData.status,
								onChange: (e) => setFormData({
									...formData,
									status: e.target.value
								}),
								className: "w-full border border-input bg-background px-3 py-2 rounded-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "DRAFT",
										children: "DRAFT"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "PUBLISHED",
										children: "PUBLISHED"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "REJECTED",
										children: "REJECTED"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium mb-1",
								children: "Description (Markdown/Text)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: formData.description,
								onChange: (e) => setFormData({
									...formData,
									description: e.target.value
								}),
								className: "w-full border border-input bg-background px-3 py-2 rounded-md min-h-[200px]",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-end gap-3 mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsEditing(false),
									className: "px-4 py-2 border border-border rounded-md hover:bg-muted",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: loading,
									className: "px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",
									children: loading ? "Saving..." : "Save Changes"
								})]
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
//#region src/pages/admin/jobs.astro
var jobs_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Jobs,
	file: () => $$file,
	url: () => $$url
});
var $$Jobs = createComponent(async ($$result, $$props, $$slots) => {
	const allJobs = await getDb(env).select().from(jobs).all();
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div><div class="mb-6"><h1 class="text-3xl font-bold text-foreground">Jobs Management</h1><p class="text-muted-foreground">Review, approve, or reject job postings.</p></div><div class="bg-card rounded-lg border border-border overflow-hidden shadow-sm">${allJobs.length === 0 ? renderTemplate`<div class="p-8 text-center"><h3 class="text-lg font-medium text-foreground">No jobs in queue</h3><p class="text-muted-foreground mt-2">All jobs have been reviewed.</p></div>` : renderTemplate`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead class="bg-muted/50 border-b border-border"><tr><th class="px-6 py-4 font-medium text-muted-foreground">Job ID</th><th class="px-6 py-4 font-medium text-muted-foreground">Title</th><th class="px-6 py-4 font-medium text-muted-foreground">Location</th><th class="px-6 py-4 font-medium text-muted-foreground">Status</th><th class="px-6 py-4 font-medium text-muted-foreground">Action</th></tr></thead><tbody class="divide-y divide-border">${allJobs.map((job) => renderTemplate`<tr class="hover:bg-muted/20 transition-colors"><td class="px-6 py-4 font-mono text-xs text-muted-foreground">${job.id.substring(0, 8)}...</td><td class="px-6 py-4 text-foreground font-medium">${job.title}</td><td class="px-6 py-4 text-muted-foreground">${job.city}${job.city && job.country ? ", " : ""}${job.country || "Remote"}</td><td class="px-6 py-4"><span${addAttribute(`inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${job.status === "PUBLISHED" ? "bg-primary/10 text-primary" : job.status === "DRAFT" ? "bg-muted text-muted-foreground" : "bg-destructive/10 text-destructive"}`, "class")}>${job.status}</span></td><td class="px-6 py-4"><div class="flex items-center gap-3"><a${addAttribute(`/jobs/${job.slug}`, "href")} target="_blank" class="text-primary hover:underline text-sm font-medium mr-2">View</a>${renderComponent($$result, "AdminJobActions", AdminJobActions, {
		"client:load": true,
		"job": job,
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/components/admin/AdminJobActions.tsx",
		"client:component-export": "AdminJobActions"
	})}</div></td></tr>`)}</tbody></table></div>`}</div></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/jobs.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/jobs.astro";
var $$url = "/admin/jobs";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/jobs@_@astro
var page = () => jobs_exports;
//#endregion
export { page };
