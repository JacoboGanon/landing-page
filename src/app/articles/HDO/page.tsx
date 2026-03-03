import React from 'react'
import { getTranslations } from 'next-intl/server'
import { ArticleLayout } from '@/components/ArticleLayout'

const article = {
  author: 'Jacobo Ganon',
  date: '2022-08',
  title: 'Hacienda Del Oro Software Engineer',
  description:
    'HDO (Hacienda del Oro) is a country club in Mexico that focuses on equitation. The owner has multiple companies and needed a way to facilitate the communication and manage HDO. I worked with the owner to help him solve the problems',
}

export async function generateMetadata() {
  const t = await getTranslations('article_hdo')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function Page() {
  const t = await getTranslations('article_hdo')
  const b = (chunks: React.ReactNode) => <strong>{chunks}</strong>

  return (
    <ArticleLayout
      article={{
        ...article,
        slug: 'HDO',
        title: t('title'),
        description: t('description'),
      }}
    >
      <p>{t('intro')}</p>

      <h2>{t('communicationTitle')}</h2>
      <p>{t('communicationBody')}</p>

      <h2>{t('featuresTitle')}</h2>
      <ul>
        <li>{t('feature_0')}</li>
        <li>{t('feature_1')}</li>
        <li>{t('feature_2')}</li>
        <li>{t('feature_3')}</li>
      </ul>

      <h2>{t('techTitle')}</h2>
      <ul>
        <li>{t.rich('tech_0', { b })}</li>
        <li>{t.rich('tech_1', { b })}</li>
        <li>{t.rich('tech_2', { b })}</li>
      </ul>

      <h2>{t('conclusionTitle')}</h2>
      <p>
        {t.rich('conclusionBody', {
          a: (chunks) => (
            <a href="/articles/Caliza">{chunks}</a>
          ),
        })}
      </p>

      <h2>{t('authTitle')}</h2>
      <p>{t('authBody')}</p>
    </ArticleLayout>
  )
}
