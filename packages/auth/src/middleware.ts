
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { logger } from './utils/logger';

/**
 * Auth middleware to protect routes and handle authentication
 * @param request Next.js request object
 */
export function middleware(request: NextRequest) {
  try {
    const authToken = request.cookies.get('auth-token');
    const requestPath = request.nextUrl.pathname;
    
    logger.info('Processing auth middleware', { path: requestPath });

    // Allow access to auth-related paths
    if (requestPath.startsWith('/auth')) {
      logger.debug('Allowing access to auth path', { path: requestPath });
      return NextResponse.next();
    }

    // Check authentication
    if (!authToken) {
      logger.warn('Unauthorized access attempt', { path: requestPath });
      const loginUrl = new URL('/auth/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    logger.debug('Auth token verified', { path: requestPath });
    return NextResponse.next();
  } catch (error) {
    logger.error('Middleware error:', { error: error.message });
    return NextResponse.redirect(new URL('/auth/error', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
