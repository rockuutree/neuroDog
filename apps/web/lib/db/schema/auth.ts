import {
  datetime,
  mysqlTable,
  primaryKey,
  varchar,
} from "drizzle-orm/mysql-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const usersTable = mysqlTable("user", {
  id: varchar("id", { length: 255 }).primaryKey(),
  email: varchar("email", { length: 255 }).unique(),
  name: varchar("name", { length: 255 }),
});

export const sessionsTable = mysqlTable("session", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => usersTable.id),
  expiresAt: datetime("expires_at").notNull(),
});

export const oauthAccountsTable = mysqlTable(
  "oauth_account",
  {
    providerId: varchar("provider_id", { length: 255 }).notNull(),
    providerUserId: varchar("provider_user_id", { length: 255 }).notNull(),
    userId: varchar("user_id", { length: 255 })
      .notNull()
      .references(() => usersTable.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.providerId, table.providerUserId] }),
  })
);
// schemas

const selectUserSchema = createSelectSchema(usersTable);

export type SelectUser = z.infer<typeof selectUserSchema>;
