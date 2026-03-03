import React from 'react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ArticleLayout } from '@/components/ArticleLayout'
import evotionHero from './evotion-hero.png'
import evotionModels from './evotion-models.png'
import evotionChat from './evotion-chat.png'

export const article = {
  author: 'Jacobo Ganon',
  date: '2025-01',
  title: 'Evotion: AI Platform Full Stack Development',
  description:
    'Evotion is an AI chat platform that brings together 30+ of the best language models in one place. Built with a pay-per-use and subscription model, it lets users access ChatGPT, Claude, Gemini, Grok, and many more through a single unified interface with an innovative fusion mode that automatically selects and combines models for optimal results.',
}

export async function generateMetadata() {
  const t = await getTranslations('article_evotion')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function Page() {
  const t = await getTranslations('article_evotion')
  const b = (chunks: React.ReactNode) => <strong>{chunks}</strong>

  return (
    <ArticleLayout
      article={{
        ...article,
        slug: 'Evotion',
        title: t('title'),
        description: t('description'),
      }}
    >
      <p>{t('intro')}</p>

      <Image src={evotionHero} alt={t('image1Alt')} />

      <h2>{t('fusionTitle')}</h2>
      <p>{t('fusionBody')}</p>

      <Image src={evotionModels} alt={t('image2Alt')} />

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
      </ul>

      <Image src={evotionChat} alt={t('image3Alt')} />

      <h2>{t('techTitle')}</h2>
      <ul>
        <li>{t.rich('tech_0', { b })}</li>
        <li>{t.rich('tech_1', { b })}</li>
        <li>{t.rich('tech_2', { b })}</li>
        <li>{t.rich('tech_3', { b })}</li>
        <li>{t.rich('tech_4', { b })}</li>
        <li>{t.rich('tech_5', { b })}</li>
        <li>{t.rich('tech_6', { b })}</li>
      </ul>

      <h2>{t('conclusionTitle')}</h2>
      <p>
        {t.rich('conclusionBody', {
          a: (chunks) => (
            <a href="https://evotion.ai">{chunks}</a>
          ),
        })}
      </p>
    </ArticleLayout>
  )
}
