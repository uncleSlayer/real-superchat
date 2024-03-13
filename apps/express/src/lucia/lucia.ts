import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from '../db/migration'
import { users, sessions } from '../db/schema'

const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users);