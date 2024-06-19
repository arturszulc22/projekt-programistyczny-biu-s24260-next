import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hashedUser = request.cookies.get("user")?.value;

  const isPublicPage =
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register");

  if (!hashedUser && isPublicPage) {
    return NextResponse.next();
  }

  if (!hashedUser && !isPublicPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (hashedUser && isPublicPage) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  let user;
  try {
    user = JSON.parse(hashedUser);
  } catch (error) {
    console.error("Failed to parse user cookie:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect non-admin users trying to access admin routes
  if (request.nextUrl.pathname.startsWith("/admin") && !user.settings?.isAdmin) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home",

    "/event/:path*",
    "/events",

    "/group/:path*",
    "/groups",

    "/messages",

    "/following",

    "/profile/:path*",

    "/admin/:path*",

    "/login",
    "/register",
  ],
};
