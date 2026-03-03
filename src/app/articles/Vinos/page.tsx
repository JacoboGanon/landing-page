import React from 'react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ArticleLayout } from '@/components/ArticleLayout'
import vinosDashboard from './vinos-dashboard.png'
import vinosOrders from './vinos-orders.png'
import vinosInventory from './vinos-inventory.png'

const article = {
  author: 'Jacobo Ganon',
  date: '2025-08',
  title: 'Vinos: Restaurant Wine Management Platform',
  description:
    'Vinos is a wine management platform for restaurants and wine providers. It tracks inventory at the individual bottle level, comes with a tablet point-of-sale app for floor staff, supports multiple restaurant locations with role-based access, and handles purchase orders, supplier management, and sales analytics.',
}

export async function generateMetadata() {
  const t = await getTranslations('article_vinos')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function Page() {
  const t = await getTranslations('article_vinos')
  const b = (chunks: React.ReactNode) => <strong>{chunks}</strong>

  return (
    <ArticleLayout
      article={{
        ...article,
        slug: 'Vinos',
        title: t('title'),
        description: t('description'),
      }}
    >
      <p>{t('intro')}</p>

      <Image src={vinosDashboard} alt={t('image1Alt')} />

      <h2>{t('architectureTitle')}</h2>
      <p>{t('architectureBody')}</p>

      <h2>{t('posTitle')}</h2>
      <p>{t('posBody')}</p>

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

      <Image src={vinosOrders} alt={t('image2Alt')} />

      <Image src={vinosInventory} alt={t('image3Alt')} />

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
      </ul>

      <h2>{t('demoTitle')}</h2>
      <p>{t('demoBody')}</p>
    </ArticleLayout>
  )
}
