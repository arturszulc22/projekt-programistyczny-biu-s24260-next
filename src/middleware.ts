import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const user = request.cookies.get("user")?.value;

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home",
    "/event/:path*",
    "/events",
    "/following",
    "/group/:path*",
    "/groups",
    "/messages",
    "/profile/:path*",
  ],
};
