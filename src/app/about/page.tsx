import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { getTranslations } from 'next-intl/server'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Jacobo Ganon, a software engineer and data scientist based in Arizona, building scalable web applications and ML systems.",
}

export default async function About() {
  const t = await getTranslations('about')

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/images/portrait.jpg"
              alt=""
              width={3831}
              height={5746}
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover object-top dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {t('heading')}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              {t('paragraph1Before')}{' '}
              <Link
                href="/"
                className="text-blue-500 underline hover:text-blue-600"
              >
                {t('paragraph1Link')}
              </Link>
              {t('paragraph1After')}
            </p>
            <p>{t('paragraph2')}</p>
            <p>{t('paragraph3')}</p>
            <p>{t('paragraph4')}</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.instagram.com/jacobgano2003?igsh=ZjRyeDBlaXo2M2Z2&utm_source=qr"
              icon={InstagramIcon}
              className="mt-4"
            >
              {t('instagram')}
            </SocialLink>
            <SocialLink
              href="https://github.com/JacoboGanon"
              icon={GitHubIcon}
              className="mt-4"
            >
              {t('github')}
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/jacobo-ganon"
              icon={LinkedInIcon}
              className="mt-4"
            >
              {t('linkedin')}
            </SocialLink>
            <SocialLink
              href="mailto:22jacganon@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              22jacganon@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
