// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const HOSTS = new Set([
  "greatbookierobbery.com",
  "www.greatbookierobbery.com",
  "greatbookierobbery.com.au",
  "www.greatbookierobbery.com.au",
  "greatbookierobbery.au",
  "www.greatbookierobbery.au",
]);

export function middleware(req: NextRequest) {
  const host = req.headers.get("host")?.toLowerCase() || "";
  if (HOSTS.has(host)) {
    const url = new URL(req.url);
    url.hostname = "gregorymcarroll.com";
    url.pathname = "/great-bookie-robbery"; // landing path
    url.search = ""; // strip query to avoid odd params
    return NextResponse.redirect(url, 301); // permanent
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // run on all routes
};
