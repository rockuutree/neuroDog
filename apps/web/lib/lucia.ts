import { db } from "@/lib/db/index";
import { DrizzleMySQLAdapter } from "@lucia-auth/adapter-drizzle";
import { Lucia, Session, User } from "lucia";
import { SelectUser, sessionsTable, usersTable } from "./db/schema/auth";
import { cookies } from "next/headers";
import { cache } from "react";
import { GitHub } from "arctic";
import { env } from "./env";

const adapter = new DrizzleMySQLAdapter(db, sessionsTable, usersTable);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: { secure: process.env.NODE_ENV === "production" },
  },
  getUserAttributes: (attributes) => ({
    name: attributes.name,
    email: attributes.email,
  }),
});

export const github = (origin: string) =>
  new GitHub(env.GITHUB_CLIENT_ID, env.GITHUB_CLIENT_SECRET, {
    redirectURI: `${origin}/login/github/callback`,
  });

export const validateRequest = cache(
  async (): Promise<
    { user: User; session: Session } | { user: null; session: null }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) return { user: null, session: null };

    const result = await lucia.validateSession(sessionId);
    // next.js throws when you attempt to set cookie when rendering page
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
    } catch {}
    return result;
  }
);

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: SelectUser;
  }
}
