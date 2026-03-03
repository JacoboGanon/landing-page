'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

import { setLocale } from '@/lib/locale-action'

export function LanguageSwitcher() {
  const locale = useLocale()
  const t = useTranslations('locale')
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleLocaleChange = (newLocale: string) => {
    startTransition(async () => {
      await setLocale(newLocale)
      router.refresh()
    })
  }

  return (
    <div
      aria-label={t('switch')}
      className="flex items-center rounded-full bg-white/90 px-1 py-1 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
    >
      <button
        type="button"
        onClick={() => handleLocaleChange('en')}
        disabled={isPending}
        aria-pressed={locale === 'en'}
        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-all duration-150 ${
          locale === 'en'
            ? 'bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400'
            : 'text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300'
        }`}
      >
        EN
      </button>
      <span className="px-0.5 text-zinc-200 dark:text-zinc-700" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => handleLocaleChange('es')}
        disabled={isPending}
        aria-pressed={locale === 'es'}
        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-all duration-150 ${
          locale === 'es'
            ? 'bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400'
            : 'text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300'
        }`}
      >
        ES
      </button>
    </div>
  )
}
