import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { UserDTO } from './features/users/auth/lib';

const protectedRoutes = ['/home', '/profile', '/courses'];
const publicRoutes = ['/'];

function safeJsonParse(json: string): UserDTO | null {
  try {
    return JSON.parse(json) as UserDTO;
  } catch (e) {
    console.error('Failed to parse JSON:', e);
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = (await cookies()).get('user')?.value;
  const user: UserDTO | null = cookie ? safeJsonParse(cookie) : null;

  if (isProtectedRoute && !user?.id) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (isPublicRoute && user?.id) {
    return NextResponse.redirect(new URL('/home', request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
