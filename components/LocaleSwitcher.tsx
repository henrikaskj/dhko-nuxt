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
    <span className="flex items-center gap-2">
      {currentLocale !== 'en' && (
        <Link
          href={enPath}
          lang="en"
          className="text-white/90 hover:text-white no-underline flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-white/15 transition-colors duration-150"
        >
          <LocaleIcon /> English
        </Link>
      )}
      {currentLocale !== 'no' && (
        <Link
          href={noPath}
          lang="no"
          className="text-white/90 hover:text-white no-underline flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-white/15 transition-colors duration-150"
        >
          <LocaleIcon /> Norsk
        </Link>
      )}
    </span>
  )
}
