import type { Config } from "drizzle-kit";

export default {
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    driver: 'pg',
    dbCredentials: {
        host: 'localhost',
        port: 5432,
        database: 'superchat',
        user: 'postgres',
        password: 'superchat'
    }
} satisfies Config;
