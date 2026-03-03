import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SUPPORTED_LOCALES = ['en', 'es']
const DEFAULT_LOCALE = 'en'

function detectLocale(acceptLanguage: string): string {
  const languages = acceptLanguage
    .split(',')
    .map((part) => part.trim().split(';')[0].split('-')[0].toLowerCase())
  return languages.find((lang) => SUPPORTED_LOCALES.includes(lang)) ?? DEFAULT_LOCALE
}

export function proxy(request: NextRequest) {
  if (request.cookies.get('NEXT_LOCALE')) {
    return NextResponse.next()
  }

  const acceptLanguage = request.headers.get('accept-language') ?? ''
  const locale = detectLocale(acceptLanguage)

  const response = NextResponse.next()
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    sameSite: 'lax',
  })

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|feed.xml|.*\\..*).*)',
  ],
}
