import React from 'react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ArticleLayout } from '@/components/ArticleLayout'
import designSystem from './caliza.png'

export const article = {
  author: 'Jacobo Ganon',
  date: '2023-08',
  title: 'Caliza Gym Full Stack Web Development',
  description:
    'Caliza is a multi-tenant SaaS platform for gym and fitness center management. What started as custom software for a single gymnastics and bouldering gym in Mexico has grown into a franchise-ready system that handles class scheduling, memberships, employee payroll, financial analytics, and QR-based attendance across multiple gym locations.',
}

export async function generateMetadata() {
  const t = await getTranslations('article_caliza')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function Page() {
  const t = await getTranslations('article_caliza')
  const b = (chunks: React.ReactNode) => <strong>{chunks}</strong>

  return (
    <ArticleLayout
      article={{
        ...article,
        slug: 'Caliza',
        title: t('title'),
        description: t('description'),
      }}
    >
      <p>{t('intro')}</p>

      <Image src={designSystem} alt="" />

      <h2>{t('multiTenantTitle')}</h2>
      <p>{t('multiTenantBody')}</p>

      <h2>{t('franchiseTitle')}</h2>
      <p>{t('franchiseBody')}</p>

      <h2>{t('featuresTitle')}</h2>
      <ul>
        <li>{t('feature_0')}</li>
        <li>{t('feature_1')}</li>
        <li>{t('feature_2')}</li>
        <li>{t('feature_3')}</li>
        <li>{t('feature_4')}</li>
        <li>{t('feature_5')}</li>
        <li>{t('feature_6')}</li>
        <li>{t('feature_7')}</li>
        <li>{t('feature_8')}</li>
      </ul>

      <h2>{t('techTitle')}</h2>
      <ul>
        <li>{t.rich('tech_0', { b })}</li>
        <li>{t.rich('tech_1', { b })}</li>
        <li>{t.rich('tech_2', { b })}</li>
        <li>{t.rich('tech_3', { b })}</li>
        <li>{t.rich('tech_4', { b })}</li>
        <li>{t.rich('tech_5', { b })}</li>
        <li>{t.rich('tech_6', { b })}</li>
        <li>{t.rich('tech_7', { b })}</li>
        <li>{t.rich('tech_8', { b })}</li>
        <li>{t.rich('tech_9', { b })}</li>
        <li>{t.rich('tech_10', { b })}</li>
      </ul>

      <h2>{t('demoTitle')}</h2>
      <p>
        {t.rich('demoBody', {
          a: (chunks) => (
            <a href="https://calizagym.com">{chunks}</a>
          ),
        })}
      </p>
    </ArticleLayout>
  )
}
