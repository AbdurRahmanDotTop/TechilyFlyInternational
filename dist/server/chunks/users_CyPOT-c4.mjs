globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll, r as __toESM } from "./rolldown-runtime_BDykq6kg.mjs";
import { O as renderTemplate, S as renderComponent, j as addAttribute, k as maybeRenderHead } from "./sequence_Cy34-R2h.mjs";
import { t as require_react } from "./react_DrT0j-Yv.mjs";
import { t as createComponent } from "./compiler_QGfFmrLY.mjs";
import { c as users, t as getDb } from "./db_BmW1G98j.mjs";
import { t as $$AdminLayout } from "./AdminLayout_C26MPkag.mjs";
import { t as createLucideIcon } from "./createLucideIcon_ChIzLsjp.mjs";
import { n as Pencil, r as CircleX, t as Trash2 } from "./trash-2_D1n5DyNo.mjs";
import { t as require_jsx_runtime } from "./jsx-runtime_kxRjB8xb.mjs";
import { env } from "cloudflare:workers";
/**
* @license lucide-react v1.39.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var UserCog = createLucideIcon("user-cog", [
	["path", {
		d: "M10 15H6a4 4 0 0 0-4 4v2",
		key: "1nfge6"
	}],
	["path", {
		d: "m14.305 16.53.923-.382",
		key: "1itpsq"
	}],
	["path", {
		d: "m15.228 13.852-.923-.383",
		key: "eplpkm"
	}],
	["path", {
		d: "m16.852 12.228-.383-.923",
		key: "13v3q0"
	}],
	["path", {
		d: "m16.852 17.772-.383.924",
		key: "1i8mnm"
	}],
	["path", {
		d: "m19.148 12.228.383-.923",
		key: "1q8j1v"
	}],
	["path", {
		d: "m19.53 18.696-.382-.924",
		key: "vk1qj3"
	}],
	["path", {
		d: "m20.772 13.852.924-.383",
		key: "n880s0"
	}],
	["path", {
		d: "m20.772 16.148.924.383",
		key: "1g6xey"
	}],
	["circle", {
		cx: "18",
		cy: "15",
		r: "3",
		key: "gjjjvw"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]);
//#endregion
//#region src/components/admin/AdminUserActions.tsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminUserActions({ user }) {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)(user);
	const handleUpdate = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			if ((await fetch(`/api/admin/users/${user.id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData)
			})).ok) {
				setIsEditing(false);
				window.location.reload();
			} else alert("Failed to update user");
		} catch (e) {
			alert("Error updating user");
		}
		setLoading(false);
	};
	const handleRoleChange = async (e) => {
		const newRole = e.target.value;
		if (!confirm(`Are you sure you want to change this user's role to ${newRole}?`)) {
			e.target.value = user.role;
			return;
		}
		setLoading(true);
		try {
			if ((await fetch(`/api/admin/users/${user.id}/role`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ role: newRole })
			})).ok) window.location.reload();
			else alert("Failed to update role");
		} catch (error) {
			alert("Error updating role");
		}
		setLoading(false);
	};
	const handleDelete = async () => {
		if (!confirm(`DANGER: Are you sure you want to permanently delete user ${user.email}? This will ALSO delete their profile, jobs, and applications. This action CANNOT be undone.`)) return;
		setLoading(true);
		try {
			if ((await fetch(`/api/admin/users/${user.id}`, { method: "DELETE" })).ok) window.location.reload();
			else alert("Failed to delete user");
		} catch (error) {
			alert("Error deleting user");
		}
		setLoading(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCog, {
					size: 16,
					className: "absolute left-2 text-muted-foreground pointer-events-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: user.role,
					onChange: handleRoleChange,
					disabled: loading,
					className: "pl-8 pr-2 py-1 text-xs border border-border rounded-md bg-background hover:bg-muted/50 cursor-pointer appearance-none transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "CANDIDATE",
							children: "CANDIDATE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "EMPLOYER",
							children: "EMPLOYER"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "ADMIN",
							children: "ADMIN"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setIsEditing(true),
				disabled: loading,
				title: "Edit User",
				className: "p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors flex items-center gap-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { size: 16 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: handleDelete,
				disabled: loading,
				title: "Delete User",
				className: "p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors flex items-center gap-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
			}),
			isEditing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background rounded-lg shadow-xl w-full max-w-md overflow-hidden flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 py-4 border-b border-border flex justify-between items-center bg-muted/30",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold",
							children: "Edit User"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIsEditing(false),
							className: "text-muted-foreground hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { size: 20 })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleUpdate,
						className: "p-6 flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium mb-1",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								value: formData.email,
								onChange: (e) => setFormData({
									...formData,
									email: e.target.value
								}),
								className: "w-full border border-input bg-background px-3 py-2 rounded-md",
								required: true
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium mb-1",
								children: "Role"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: formData.role,
								onChange: (e) => setFormData({
									...formData,
									role: e.target.value
								}),
								className: "w-full border border-input bg-background px-3 py-2 rounded-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "CANDIDATE",
										children: "CANDIDATE"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "EMPLOYER",
										children: "EMPLOYER"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "ADMIN",
										children: "ADMIN"
									})
								]
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
//#region src/pages/admin/users.astro
var users_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Users,
	file: () => $$file,
	url: () => $$url
});
var $$Users = createComponent(async ($$result, $$props, $$slots) => {
	const allUsers = await getDb(env).select().from(users).all();
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div><div class="mb-6"><h1 class="text-3xl font-bold text-foreground">Users Management</h1><p class="text-muted-foreground">Manage platform users, employers, and candidates.</p></div><div class="bg-card rounded-lg border border-border overflow-hidden shadow-sm">${allUsers.length === 0 ? renderTemplate`<div class="p-8 text-center"><h3 class="text-lg font-medium text-foreground">No users found</h3><p class="text-muted-foreground mt-2">User list will appear here.</p></div>` : renderTemplate`<div class="overflow-x-auto"><table class="w-full text-left text-sm"><thead class="bg-muted/50 border-b border-border"><tr><th class="px-6 py-4 font-medium text-muted-foreground">User ID</th><th class="px-6 py-4 font-medium text-muted-foreground">Email</th><th class="px-6 py-4 font-medium text-muted-foreground">Role</th><th class="px-6 py-4 font-medium text-muted-foreground">Joined At</th><th class="px-6 py-4 font-medium text-muted-foreground">Action</th></tr></thead><tbody class="divide-y divide-border">${allUsers.map((user) => renderTemplate`<tr class="hover:bg-muted/20 transition-colors"><td class="px-6 py-4 font-mono text-xs text-muted-foreground">${user.id.substring(0, 8)}...</td><td class="px-6 py-4 text-foreground font-medium">${user.email}</td><td class="px-6 py-4"><span${addAttribute(`inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${user.role === "ADMIN" ? "bg-destructive/10 text-destructive" : user.role === "EMPLOYER" ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"}`, "class")}>${user.role}</span></td><td class="px-6 py-4 text-muted-foreground">${new Date(user.createdAt).toLocaleDateString()}</td><td class="px-6 py-4">${renderComponent($$result, "AdminUserActions", AdminUserActions, {
		"client:load": true,
		"user": {
			id: user.id,
			email: user.email,
			role: user.role
		},
		"client:component-hydration": "load",
		"client:component-path": "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/components/admin/AdminUserActions.tsx",
		"client:component-export": "AdminUserActions"
	})}</td></tr>`)}</tbody></table></div>`}</div></div>` })}`;
}, "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/users.astro", void 0);
var $$file = "C:/Users/abdur/OneDrive/Desktop/Abdurrahman/Abdurrahman_Developer/Techily_Fly/Techily_Fly_International/WebAndApp/Web/src/pages/admin/users.astro";
var $$url = "/admin/users";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/users@_@astro
var page = () => users_exports;
//#endregion
export { page };
