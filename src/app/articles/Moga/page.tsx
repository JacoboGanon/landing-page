import React from 'react'
import { getTranslations } from 'next-intl/server'
import { ArticleLayout } from '@/components/ArticleLayout'

const article = {
  author: 'Jacobo Ganon',
  date: '2022-01',
  title: 'App Development for Moga',
  description:
    'Moga is a gymnastics gym where I first found the need for a gym management software in Mexico. However, the owners where only looking for a management software for classes and product inventory and this is the problem I solved with this application.',
}

export async function generateMetadata() {
  const t = await getTranslations('article_moga')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function Page() {
  const t = await getTranslations('article_moga')

  return (
    <ArticleLayout
      article={{
        ...article,
        slug: 'Moga',
        title: t('title'),
        description: t('description'),
      }}
    >
      <p>{t('intro')}</p>

      <h2>{t('classesTitle')}</h2>
      <p>{t('classesBody')}</p>

      <h2>{t('featuresTitle')}</h2>
      <ul>
        <li>{t('feature_0')}</li>
        <li>{t('feature_1')}</li>
        <li>{t('feature_2')}</li>
        <li>{t('feature_3')}</li>
        <li>{t('feature_4')}</li>
        <li>{t('feature_5')}</li>
      </ul>

      <h2>{t('techTitle')}</h2>
      <p>{t('techStack')}</p>

      <h2>{t('conclusionTitle')}</h2>
      <p>
        {t.rich('conclusionBody', {
          a: (chunks) => (
            <a href="/articles/Caliza">{chunks}</a>
          ),
        })}
      </p>
    </ArticleLayout>
  )
}
