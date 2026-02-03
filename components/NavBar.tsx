import Link from 'next/link'
import { getContentNavigation } from '@/lib/content'
import type { Locale } from '@/lib/i18n'

export function NavBar({ locale }: { locale: Locale }) {
  const navigation = getContentNavigation(locale)
  return (
    <nav>
      <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 text-center lg:text-xl">
        {navigation.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className="text-slate-50 hover:text-slate-300 whitespace-nowrap"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
