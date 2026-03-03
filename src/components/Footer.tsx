import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import { ContainerInner, ContainerOuter } from '@/components/Container'

export const navigation = [
  { key: 'home' as const, href: '/' },
  { key: 'projects' as const, href: '/articles' },
  { key: 'about' as const, href: '/about' },
]

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export async function Footer() {
  const t = await getTranslations('nav')
  const tf = await getTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {navigation.map((item) => (
                  <NavLink key={item.href} href={item.href}>
                    {t(item.key)}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                {tf('copyright', { year })}
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
