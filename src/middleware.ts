import { NextResponse } from "next/server";

// Add your custom authentication logic here
export function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  // Example: Protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    // Add your auth check logic here
    // For now, we'll just allow access
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*'
  ]
};
