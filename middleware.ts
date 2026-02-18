import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    !request.nextUrl.pathname.startsWith("/dashboard/login")
  ) {
    const authCookie = request.cookies.get("delegate_dashboard_auth");
    if (!authCookie) {
      return NextResponse.redirect(
        new URL(
          `/dashboard/login?from=${request.nextUrl.pathname}`,
          request.url
        )
      );
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
