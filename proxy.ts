import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['no', 'en']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const hasLocale = locales.some((loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`))
  if (!hasLocale && pathname !== '/') return NextResponse.next()
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/no', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon|api|files|image|.*\\.).*)'],
}
