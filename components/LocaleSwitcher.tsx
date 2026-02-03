'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LocaleIcon } from './LocaleIcon'
import type { Locale } from '@/lib/i18n'

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname()
  const pathWithoutLocale = pathname.replace(/^\/(no|en)/, '') || ''
  const enPath = !pathWithoutLocale ? '/en' : `/en${pathWithoutLocale}`
  const noPath = !pathWithoutLocale ? '/no' : `/no${pathWithoutLocale}`

  return (
    <>
      {currentLocale !== 'en' && (
        <Link
          href={enPath}
          lang="en"
          className="text-slate-50 no-underline flex items-center gap-1"
        >
          <LocaleIcon /> English
        </Link>
      )}
      {currentLocale !== 'no' && (
        <Link
          href={noPath}
          lang="no"
          className="text-slate-50 no-underline flex items-center gap-1"
        >
          <LocaleIcon /> Norsk
        </Link>
      )}
    </>
  )
}
