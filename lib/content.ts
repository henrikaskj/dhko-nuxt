import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import type { Locale } from './i18n'

const contentDir = path.join(process.cwd(), 'content')

export interface ContentItem {
  slug: string
  title: string
  path: string
  order: number
}

export interface ContentDoc {
  title: string
  body: string
  slug: string
  path: string
}

const slugFromFilename = (filename: string): string => {
  const base = filename.replace(/^\d+\./, '').replace(/\.md$/, '')
  return base === 'index' ? '' : base
}

const pathFromSlug = (locale: Locale, slug: string): string => {
  const segment = slug ? `/${slug}` : ''
  return `/${locale}${segment}`
}

export function getContentNavigation(locale: Locale): ContentItem[] {
  const localeDir = path.join(contentDir, locale)
  if (!fs.existsSync(localeDir)) return []
  const files = fs.readdirSync(localeDir).filter((f) => f.endsWith('.md'))
  const items: ContentItem[] = []
  for (const file of files) {
    const fullPath = path.join(localeDir, file)
    const raw = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(raw)
    const slug = slugFromFilename(file)
    const order = parseInt(file, 10) || 0
    items.push({
      slug,
      title: (data.title as string) || slug || locale,
      path: pathFromSlug(locale, slug),
      order,
    })
  }
  items.sort((a, b) => a.order - b.order)
  return items
}

export function getContentByPath(locale: Locale, slugSegments: string[]): ContentDoc | null {
  const slug = slugSegments.join('/').replace(/\/$/, '') || 'index'
  const localeDir = path.join(contentDir, locale)
  if (!fs.existsSync(localeDir)) return null

  const files = fs.readdirSync(localeDir).filter((f) => f.endsWith('.md'))
  for (const file of files) {
    const fileSlug = slugFromFilename(file)
    const targetSlug = slug === '' ? 'index' : slug
    if (fileSlug === targetSlug || (targetSlug === 'index' && fileSlug === '')) {
      const fullPath = path.join(localeDir, file)
      const raw = fs.readFileSync(fullPath, 'utf-8')
      const { data, content } = matter(raw)
      const pathSeg = fileSlug ? `/${fileSlug}` : ''
      return {
        title: (data.title as string) || fileSlug || locale,
        body: content,
        slug: fileSlug,
        path: `/${locale}${pathSeg}`,
      }
    }
  }
  return null
}

export function getAllContentPaths(): { locale: Locale; slug: string[] }[] {
  const out: { locale: Locale; slug: string[] }[] = []
  for (const locale of ['no', 'en'] as Locale[]) {
    const localeDir = path.join(contentDir, locale)
    if (!fs.existsSync(localeDir)) continue
    const files = fs.readdirSync(localeDir).filter((f) => f.endsWith('.md'))
    for (const file of files) {
      const fileSlug = slugFromFilename(file)
      const slugSegments = fileSlug ? [fileSlug] : []
      out.push({ locale, slug: slugSegments })
    }
  }
  return out
}
