import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { Pool } from "pg";

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "superchat",
    database: "superchat"
});

export const db = drizzle(pool);

async function main() {
    console.log('Starting migration...');
    migrate(db, { migrationsFolder: "drizzle" })
    console.log('Migration successful...');
}

main()