"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessions = exports.users = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.uuid)('id').primaryKey(),
    name: (0, pg_core_1.text)('name').notNull(),
    email: (0, pg_core_1.text)('email').notNull(),
    password: (0, pg_core_1.text)('password'),
    githubUserName: (0, pg_core_1.text)('github_username').unique(),
    githubId: (0, pg_core_1.numeric)('github_id').unique()
});
exports.sessions = (0, pg_core_1.pgTable)("session", {
    id: (0, pg_core_1.uuid)("id").primaryKey(),
    userId: (0, pg_core_1.uuid)("user_id").notNull().references(function () { return exports.users.id; }),
    expiresAt: (0, pg_core_1.timestamp)("expires_at", { withTimezone: true, mode: "date" }).notNull()
});
