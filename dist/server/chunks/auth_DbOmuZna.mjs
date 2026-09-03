globalThis.process ??= {};
globalThis.process.env ??= {};
import { Et as encodeBase32LowerCaseNoPadding } from "./sequence_Cy34-R2h.mjs";
import { c as users, d as eq, m as lte, s as sessions, t as getDb } from "./db_BmW1G98j.mjs";
//#region node_modules/lucia/dist/date.js
var TimeSpan = class TimeSpan {
	constructor(value, unit) {
		this.value = value;
		this.unit = unit;
	}
	value;
	unit;
	milliseconds() {
		if (this.unit === "ms") return this.value;
		if (this.unit === "s") return this.value * 1e3;
		if (this.unit === "m") return this.value * 1e3 * 60;
		if (this.unit === "h") return this.value * 1e3 * 60 * 60;
		if (this.unit === "d") return this.value * 1e3 * 60 * 60 * 24;
		return this.value * 1e3 * 60 * 60 * 24 * 7;
	}
	seconds() {
		return this.milliseconds() / 1e3;
	}
	transform(x) {
		return new TimeSpan(Math.round(this.milliseconds() * x), "ms");
	}
};
function isWithinExpirationDate(date) {
	return Date.now() < date.getTime();
}
function createDate(timeSpan) {
	return new Date(Date.now() + timeSpan.milliseconds());
}
//#endregion
//#region node_modules/lucia/dist/cookie.js
function serializeCookie(name, value, attributes) {
	const keyValueEntries = [];
	keyValueEntries.push([encodeURIComponent(name), encodeURIComponent(value)]);
	if (attributes?.domain !== void 0) keyValueEntries.push(["Domain", attributes.domain]);
	if (attributes?.expires !== void 0) keyValueEntries.push(["Expires", attributes.expires.toUTCString()]);
	if (attributes?.httpOnly) keyValueEntries.push(["HttpOnly"]);
	if (attributes?.maxAge !== void 0) keyValueEntries.push(["Max-Age", attributes.maxAge.toString()]);
	if (attributes?.path !== void 0) keyValueEntries.push(["Path", attributes.path]);
	if (attributes?.sameSite === "lax") keyValueEntries.push(["SameSite", "Lax"]);
	if (attributes?.sameSite === "none") keyValueEntries.push(["SameSite", "None"]);
	if (attributes?.sameSite === "strict") keyValueEntries.push(["SameSite", "Strict"]);
	if (attributes?.secure) keyValueEntries.push(["Secure"]);
	return keyValueEntries.map((pair) => pair.join("=")).join("; ");
}
function parseCookies(header) {
	const cookies = /* @__PURE__ */ new Map();
	const items = header.split("; ");
	for (const item of items) {
		const pair = item.split("=");
		const rawKey = pair[0];
		const rawValue = pair[1] ?? "";
		if (!rawKey) continue;
		cookies.set(decodeURIComponent(rawKey), decodeURIComponent(rawValue));
	}
	return cookies;
}
var CookieController = class {
	constructor(cookieName, baseCookieAttributes, cookieOptions) {
		this.cookieName = cookieName;
		this.cookieExpiresIn = cookieOptions?.expiresIn ?? null;
		this.baseCookieAttributes = baseCookieAttributes;
	}
	cookieName;
	cookieExpiresIn;
	baseCookieAttributes;
	createCookie(value) {
		return new Cookie(this.cookieName, value, {
			...this.baseCookieAttributes,
			maxAge: this.cookieExpiresIn?.seconds()
		});
	}
	createBlankCookie() {
		return new Cookie(this.cookieName, "", {
			...this.baseCookieAttributes,
			maxAge: 0
		});
	}
	parse(header) {
		return parseCookies(header).get(this.cookieName) ?? null;
	}
};
var Cookie = class {
	constructor(name, value, attributes) {
		this.name = name;
		this.value = value;
		this.attributes = attributes;
	}
	name;
	value;
	attributes;
	serialize() {
		return serializeCookie(this.name, this.value, this.attributes);
	}
};
//#endregion
//#region node_modules/@oslojs/binary/dist/uint.js
var BigEndian = class {
	uint8(data, offset) {
		if (data.byteLength < offset + 1) throw new TypeError("Insufficient bytes");
		return data[offset];
	}
	uint16(data, offset) {
		if (data.byteLength < offset + 2) throw new TypeError("Insufficient bytes");
		return data[offset] << 8 | data[offset + 1];
	}
	uint32(data, offset) {
		if (data.byteLength < offset + 4) throw new TypeError("Insufficient bytes");
		let result = 0;
		for (let i = 0; i < 4; i++) result |= data[offset + i] << 24 - i * 8;
		return result;
	}
	uint64(data, offset) {
		if (data.byteLength < offset + 8) throw new TypeError("Insufficient bytes");
		let result = 0n;
		for (let i = 0; i < 8; i++) result |= BigInt(data[offset + i]) << BigInt(56 - i * 8);
		return result;
	}
	putUint8(target, value, offset) {
		if (target.length < offset + 1) throw new TypeError("Not enough space");
		if (value < 0 || value > 255) throw new TypeError("Invalid uint8 value");
		target[offset] = value;
	}
	putUint16(target, value, offset) {
		if (target.length < offset + 2) throw new TypeError("Not enough space");
		if (value < 0 || value > 65535) throw new TypeError("Invalid uint16 value");
		target[offset] = value >> 8;
		target[offset + 1] = value & 255;
	}
	putUint32(target, value, offset) {
		if (target.length < offset + 4) throw new TypeError("Not enough space");
		if (value < 0 || value > 4294967295) throw new TypeError("Invalid uint32 value");
		for (let i = 0; i < 4; i++) target[offset + i] = value >> (3 - i) * 8 & 255;
	}
	putUint64(target, value, offset) {
		if (target.length < offset + 8) throw new TypeError("Not enough space");
		if (value < 0 || value > 18446744073709551615n) throw new TypeError("Invalid uint64 value");
		for (let i = 0; i < 8; i++) target[offset + i] = Number(value >> BigInt((7 - i) * 8) & 255n);
	}
};
var LittleEndian = class {
	uint8(data, offset) {
		if (data.byteLength < offset + 1) throw new TypeError("Insufficient bytes");
		return data[offset];
	}
	uint16(data, offset) {
		if (data.byteLength < offset + 2) throw new TypeError("Insufficient bytes");
		return data[offset] | data[offset + 1] << 8;
	}
	uint32(data, offset) {
		if (data.byteLength < offset + 4) throw new TypeError("Insufficient bytes");
		let result = 0;
		for (let i = 0; i < 4; i++) result |= data[offset + i] << i * 8;
		return result;
	}
	uint64(data, offset) {
		if (data.byteLength < offset + 8) throw new TypeError("Insufficient bytes");
		let result = 0n;
		for (let i = 0; i < 8; i++) result |= BigInt(data[offset + i]) << BigInt(i * 8);
		return result;
	}
	putUint8(target, value, offset) {
		if (target.length < 1 + offset) throw new TypeError("Insufficient space");
		if (value < 0 || value > 255) throw new TypeError("Invalid uint8 value");
		target[offset] = value;
	}
	putUint16(target, value, offset) {
		if (target.length < 2 + offset) throw new TypeError("Insufficient space");
		if (value < 0 || value > 65535) throw new TypeError("Invalid uint16 value");
		target[offset + 1] = value >> 8;
		target[offset] = value & 255;
	}
	putUint32(target, value, offset) {
		if (target.length < 4 + offset) throw new TypeError("Insufficient space");
		if (value < 0 || value > 4294967295) throw new TypeError("Invalid uint32 value");
		for (let i = 0; i < 4; i++) target[offset + i] = value >> i * 8 & 255;
	}
	putUint64(target, value, offset) {
		if (target.length < 8 + offset) throw new TypeError("Insufficient space");
		if (value < 0 || value > 18446744073709551615n) throw new TypeError("Invalid uint64 value");
		for (let i = 0; i < 8; i++) target[offset + i] = Number(value >> BigInt(i * 8) & 255n);
	}
};
new BigEndian();
new LittleEndian();
//#endregion
//#region node_modules/lucia/dist/crypto.js
function generateIdFromEntropySize(size) {
	const buffer = crypto.getRandomValues(new Uint8Array(size));
	return encodeBase32LowerCaseNoPadding(buffer);
}
//#endregion
//#region node_modules/lucia/dist/core.js
var Lucia = class {
	adapter;
	sessionExpiresIn;
	sessionCookieController;
	getSessionAttributes;
	getUserAttributes;
	sessionCookieName;
	constructor(adapter, options) {
		this.adapter = adapter;
		this.getUserAttributes = (databaseUserAttributes) => {
			if (options && options.getUserAttributes) return options.getUserAttributes(databaseUserAttributes);
			return {};
		};
		this.getSessionAttributes = (databaseSessionAttributes) => {
			if (options && options.getSessionAttributes) return options.getSessionAttributes(databaseSessionAttributes);
			return {};
		};
		this.sessionExpiresIn = options?.sessionExpiresIn ?? new TimeSpan(30, "d");
		this.sessionCookieName = options?.sessionCookie?.name ?? "auth_session";
		let sessionCookieExpiresIn = this.sessionExpiresIn;
		if (options?.sessionCookie?.expires === false) sessionCookieExpiresIn = new TimeSpan(400, "d");
		const baseSessionCookieAttributes = {
			httpOnly: true,
			secure: true,
			sameSite: "lax",
			path: "/",
			...options?.sessionCookie?.attributes
		};
		this.sessionCookieController = new CookieController(this.sessionCookieName, baseSessionCookieAttributes, { expiresIn: sessionCookieExpiresIn });
	}
	async getUserSessions(userId) {
		const databaseSessions = await this.adapter.getUserSessions(userId);
		const sessions = [];
		for (const databaseSession of databaseSessions) {
			if (!isWithinExpirationDate(databaseSession.expiresAt)) continue;
			sessions.push({
				id: databaseSession.id,
				expiresAt: databaseSession.expiresAt,
				userId: databaseSession.userId,
				fresh: false,
				...this.getSessionAttributes(databaseSession.attributes)
			});
		}
		return sessions;
	}
	async validateSession(sessionId) {
		const [databaseSession, databaseUser] = await this.adapter.getSessionAndUser(sessionId);
		if (!databaseSession) return {
			session: null,
			user: null
		};
		if (!databaseUser) {
			await this.adapter.deleteSession(databaseSession.id);
			return {
				session: null,
				user: null
			};
		}
		if (!isWithinExpirationDate(databaseSession.expiresAt)) {
			await this.adapter.deleteSession(databaseSession.id);
			return {
				session: null,
				user: null
			};
		}
		const activePeriodExpirationDate = /* @__PURE__ */ new Date(databaseSession.expiresAt.getTime() - this.sessionExpiresIn.milliseconds() / 2);
		const session = {
			...this.getSessionAttributes(databaseSession.attributes),
			id: databaseSession.id,
			userId: databaseSession.userId,
			fresh: false,
			expiresAt: databaseSession.expiresAt
		};
		if (!isWithinExpirationDate(activePeriodExpirationDate)) {
			session.fresh = true;
			session.expiresAt = createDate(this.sessionExpiresIn);
			await this.adapter.updateSessionExpiration(databaseSession.id, session.expiresAt);
		}
		return {
			user: {
				...this.getUserAttributes(databaseUser.attributes),
				id: databaseUser.id
			},
			session
		};
	}
	async createSession(userId, attributes, options) {
		const sessionId = options?.sessionId ?? generateIdFromEntropySize(25);
		const sessionExpiresAt = createDate(this.sessionExpiresIn);
		await this.adapter.setSession({
			id: sessionId,
			userId,
			expiresAt: sessionExpiresAt,
			attributes
		});
		return {
			id: sessionId,
			userId,
			fresh: true,
			expiresAt: sessionExpiresAt,
			...this.getSessionAttributes(attributes)
		};
	}
	async invalidateSession(sessionId) {
		await this.adapter.deleteSession(sessionId);
	}
	async invalidateUserSessions(userId) {
		await this.adapter.deleteUserSessions(userId);
	}
	async deleteExpiredSessions() {
		await this.adapter.deleteExpiredSessions();
	}
	readSessionCookie(cookieHeader) {
		return this.sessionCookieController.parse(cookieHeader);
	}
	readBearerToken(authorizationHeader) {
		const [authScheme, token] = authorizationHeader.split(" ");
		if (authScheme !== "Bearer") return null;
		return token ?? null;
	}
	createSessionCookie(sessionId) {
		return this.sessionCookieController.createCookie(sessionId);
	}
	createBlankSessionCookie() {
		return this.sessionCookieController.createBlankCookie();
	}
};
//#endregion
//#region node_modules/@lucia-auth/adapter-drizzle/dist/drivers/sqlite.js
var DrizzleSQLiteAdapter = class {
	db;
	sessionTable;
	userTable;
	constructor(db, sessionTable, userTable) {
		this.db = db;
		this.sessionTable = sessionTable;
		this.userTable = userTable;
	}
	async deleteSession(sessionId) {
		await this.db.delete(this.sessionTable).where(eq(this.sessionTable.id, sessionId));
	}
	async deleteUserSessions(userId) {
		await this.db.delete(this.sessionTable).where(eq(this.sessionTable.userId, userId));
	}
	async getSessionAndUser(sessionId) {
		const [databaseSession, databaseUser] = await Promise.all([this.getSession(sessionId), this.getUserFromSessionId(sessionId)]);
		return [databaseSession, databaseUser];
	}
	async getSession(sessionId) {
		const result = await this.db.select().from(this.sessionTable).where(eq(this.sessionTable.id, sessionId));
		if (result.length !== 1) return null;
		return transformIntoDatabaseSession(result[0]);
	}
	async getUserFromSessionId(sessionId) {
		const { _, $inferInsert, $inferSelect, getSQL, shouldOmitSQLParens, ...userColumns } = this.userTable;
		const result = await this.db.select(userColumns).from(this.sessionTable).innerJoin(this.userTable, eq(this.sessionTable.userId, this.userTable.id)).where(eq(this.sessionTable.id, sessionId));
		if (result.length !== 1) return null;
		return transformIntoDatabaseUser(result[0]);
	}
	async getUserSessions(userId) {
		return (await this.db.select().from(this.sessionTable).where(eq(this.sessionTable.userId, userId)).all()).map((val) => {
			return transformIntoDatabaseSession(val);
		});
	}
	async setSession(session) {
		await this.db.insert(this.sessionTable).values({
			id: session.id,
			userId: session.userId,
			expiresAt: Math.floor(session.expiresAt.getTime() / 1e3),
			...session.attributes
		}).run();
	}
	async updateSessionExpiration(sessionId, expiresAt) {
		await this.db.update(this.sessionTable).set({ expiresAt: Math.floor(expiresAt.getTime() / 1e3) }).where(eq(this.sessionTable.id, sessionId)).run();
	}
	async deleteExpiredSessions() {
		await this.db.delete(this.sessionTable).where(lte(this.sessionTable.expiresAt, Math.floor(Date.now() / 1e3)));
	}
};
function transformIntoDatabaseSession(raw) {
	const { id, userId, expiresAt: expiresAtUnix, ...attributes } = raw;
	return {
		userId,
		id,
		expiresAt: /* @__PURE__ */ new Date(expiresAtUnix * 1e3),
		attributes
	};
}
function transformIntoDatabaseUser(raw) {
	const { id, ...attributes } = raw;
	return {
		id,
		attributes
	};
}
//#endregion
//#region src/lib/auth.ts
function getAuth(env) {
	return new Lucia(new DrizzleSQLiteAdapter(getDb(env), sessions, users), {
		sessionCookie: {
			expires: false,
			attributes: { secure: true }
		},
		getUserAttributes: (attributes) => {
			return {
				email: attributes.email,
				role: attributes.role
			};
		}
	});
}
//#endregion
export { getAuth as t };
