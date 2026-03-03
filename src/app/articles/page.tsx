import { type Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({
  article,
  cta,
}: {
  article: ArticleWithSlug
  cta: string
}) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>{cta}</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  const t = await getTranslations('articles')
  let articles = await getAllArticles()

  const localizedArticles = await Promise.all(
    articles.map(async (article) => {
      try {
        const namespace = `article_${article.slug.toLowerCase()}` as Parameters<typeof getTranslations>[0]
        const at = await getTranslations(namespace)
        return { ...article, title: at('title'), description: at('description') }
      } catch {
        return article
      }
    })
  )

  return (
    <SimpleLayout title={t('pageTitle')} intro={t('intro')}>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {localizedArticles.map((article) => (
            <Article key={article.slug} article={article} cta={t('projectInfo')} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
