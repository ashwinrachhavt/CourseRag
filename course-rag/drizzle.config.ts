import type { Config } from 'drizzle-kit'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

export default {
    driver: "mysql2",
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        // provide the connection string for your PlanetScale database
        uri: process.env.DATABASE_URL
      },
} satisfies Config