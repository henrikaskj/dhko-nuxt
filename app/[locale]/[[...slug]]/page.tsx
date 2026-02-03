import { notFound } from 'next/navigation'
import { getContentByPath, getContentNavigation } from '@/lib/content'
import { messages, type Locale } from '@/lib/i18n'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export async function generateStaticParams() {
  const { getAllContentPaths } = await import('@/lib/content')
  const paths = getAllContentPaths()
  return paths.map(({ locale, slug }) => ({
    locale,
    slug: slug.length > 0 ? slug : undefined,
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>
}) {
  const { locale, slug } = await params
  const slugSegments = slug ?? []
  const doc = getContentByPath(locale as Locale, slugSegments)
  if (!doc) notFound()

  return (
    <article>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{doc.body}</ReactMarkdown>
    </article>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>
}) {
  const { locale, slug } = await params
  const slugSegments = slug ?? []
  const doc = getContentByPath(locale as Locale, slugSegments)
  if (!doc) return { title: messages[locale as Locale]?.not_found ?? 'Not found' }
  return { title: doc.title }
}
