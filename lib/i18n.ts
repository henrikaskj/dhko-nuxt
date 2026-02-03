export const locales = ['no', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'no'

export const messages: Record<Locale, { description: string; not_found: string }> = {
  no: {
    description: 'Norsk nettverk for digital humaniora og kulturorganisasjon',
    not_found: 'Dokument ikke funnet',
  },
  en: {
    description: 'Norwegian network for digital humanities and cultural organization',
    not_found: 'Document not found',
  },
}
