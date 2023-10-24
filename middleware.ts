import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/signin") && request.headers.get("user-agent")?.startsWith("Mozilla")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    if (request.nextUrl.pathname.startsWith("/signup") && request.headers.get("user-agent")?.startsWith("Mozilla")) {
        return NextResponse.redirect(new URL("/register", request.url));
    }
}

export { default } from "next-auth/middleware";
export const config = { matcher: ["/profile/:path*", "/upload", "/signin", "/signup"] };
