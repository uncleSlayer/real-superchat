import { pgTable, uuid, text, timestamp, numeric } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
    id: uuid('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    password: text('password'),

    githubUserName: text('github_username').unique(),
    githubId: numeric('github_id').unique()
})

export const sessions = pgTable("session", {
    id: uuid("id").primaryKey(),
    userId: uuid("user_id").notNull().references(() => users.id),
    expiresAt: timestamp("expires_at", { withTimezone: true, mode: "date" }).notNull()
});
