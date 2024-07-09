import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export default NextAuth(authConfig).auth;
export function middleware(request: NextRequest) {
  // 認証チェックを行わず、すべてのリクエストを通過させます
  return NextResponse.next();
}

// オプション：ミドルウェアを特定のパスにのみ適用する場合
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
