import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const sessionId = request.cookies.get("auth_session")?.value ?? null;
  
  if (!sessionId) {
    if (pathname.startsWith('/admin') || pathname.startsWith('/employer') || pathname.startsWith('/candidate')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
