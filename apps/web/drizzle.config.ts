import type { Config } from "drizzle-kit";
import { env } from "./lib/env";

export default {
  schema: "./lib/db/schema",
  out: "./lib/db/migrations",
  driver: "mysql2",
  dbCredentials: { uri: env.DATABASE_URL },
} satisfies Config;
