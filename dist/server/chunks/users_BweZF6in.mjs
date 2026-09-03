globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll, r as __toESM } from "./rolldown-runtime_BDykq6kg.mjs";
import { C as createAstro, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_DEJhPYUR.mjs";
import { t as require_react } from "./react_DrT0j-Yv.mjs";
import { t as createComponent } from "./compiler_ppDonbjW.mjs";
import { o as users } from "./schema_BqQlk95h.mjs";
import { t as getDb } from "./db_1u8eNC5E.mjs";
import { t as $$AdminLayout } from "./AdminLayout_cKmvRKHp.mjs";
import { t as createLucideIcon } from "./createLucideIcon_ChIzLsjp.mjs";
import { t as Trash2 } from "./trash-2_CLqIj8by.mjs";
import { t as require_jsx_runtime } from "./jsx-runtime_kxRjB8xb.mjs";
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: handleDelete,
			disabled: loading,
			title: "Delete User",
			className: "p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors flex items-center gap-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
		})]
	});
}
//#endregion
//#region src/pages/admin/users.astro
var users_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Users,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Users = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Users;
	const env = Astro.locals.runtime.env;
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
