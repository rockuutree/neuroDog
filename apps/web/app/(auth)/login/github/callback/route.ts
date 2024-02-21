import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";
import { generateId } from "lucia";
import { github, lucia } from "@/lib/lucia";
import { db } from "@/lib/db";
import { oauthAccountsTable, usersTable } from "@/lib/db/schema/auth";
import { eq } from "drizzle-orm";

interface GitHubUser {
  id: string;
  email: string | null;
  login: string;
  name: string;
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("github_oauth_state")?.value ?? null;
  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, { status: 400 });
  }

  try {
    const tokens = await github(url.origin).validateAuthorizationCode(code);
    const githubUserResponse = await fetch("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${tokens.accessToken}` },
    });
    const githubUser: GitHubUser = await githubUserResponse.json();

    const existingUser = (
      await db
        .select()
        .from(oauthAccountsTable)
        .where(eq(oauthAccountsTable.providerUserId, githubUser.id))
    ).at(0);

    if (existingUser) {
      const session = await lucia.createSession(existingUser.userId, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
      return new Response(null, {
        status: 302,
        headers: { Location: "/dashboard" },
      });
    }

    const userId = generateId(15);
    await db.transaction(async (tx) => {
      await tx.insert(usersTable).values({
        id: userId,
        email: githubUser.email,
        name: githubUser.name,
      });
      await tx.insert(oauthAccountsTable).values({
        userId,
        providerId: "github",
        providerUserId: githubUser.id,
      });
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return new Response(null, {
      status: 302,
      headers: { Location: "/dashboard" },
    });
  } catch (e) {
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      return new Response(null, { status: 400 });
    }
    return new Response(null, { status: 500 });
  }
}
