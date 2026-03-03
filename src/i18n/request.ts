import { getRequestConfig } from 'next-intl/server'
import { cookies, headers } from 'next/headers'

const SUPPORTED_LOCALES = ['en', 'es']
const DEFAULT_LOCALE = 'en'

function detectFromAcceptLanguage(acceptLanguage: string): string {
  const languages = acceptLanguage
    .split(',')
    .map((part) => part.trim().split(';')[0].split('-')[0].toLowerCase())
  return languages.find((lang) => SUPPORTED_LOCALES.includes(lang)) ?? DEFAULT_LOCALE
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value

  let locale: string

  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) {
    locale = cookieLocale
  } else {
    const headersList = await headers()
    const acceptLanguage = headersList.get('accept-language') ?? ''
    locale = detectFromAcceptLanguage(acceptLanguage)
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
