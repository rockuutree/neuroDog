import { github } from "@/lib/lucia";
import { generateState } from "arctic";
import { cookies } from "next/headers";

export async function GET(request: Request): Promise<Response> {
  const requestUrl = new URL(request.url);
  const state = generateState();
  const url = await github(requestUrl.origin).createAuthorizationURL(state);

  cookies().set("github_oauth_state", state, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  });

  return Response.redirect(url);
}
