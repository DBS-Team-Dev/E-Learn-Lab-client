import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { UserDTO, authUtils } from './features/auth/lib';

const protectedRoutes = ['/home', '/profile', '/courses', '/lectures', '/users'];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const cookie = (await cookies()).get('user')?.value;
  const user: UserDTO | null = cookie ? authUtils.safeParseAuthCookie(cookie) : null;

  if (isProtectedRoute && !user?.id) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (path === '/home' && user?.id && user.role === 'Admin') {
    return NextResponse.redirect(new URL('/users', request.nextUrl));
  }

  if (path === '/users' && user?.id && user.role === 'Student') {
    return NextResponse.redirect(new URL('/home', request.nextUrl));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
