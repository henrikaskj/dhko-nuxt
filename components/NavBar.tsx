'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ContentItem } from '@/lib/content'

export function NavBar({ items }: { items: ContentItem[] }) {
  const pathname = usePathname()
  const baseClasses =
    'inline-block rounded-lg text-sm sm:text-base font-medium whitespace-nowrap no-underline transition-colors duration-150 px-3 py-1.5 sm:px-4 sm:py-2 hover:text-white'
  const inactiveClasses = 'text-white hover:bg-white/15'
  const activeClasses = 'bg-white/25 text-white'

  return (
    <nav>
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {items.map((link) => {
          const isRoot = link.slug === ''
          const isExactMatch = pathname === link.path
          const isSectionMatch =
            !isRoot && (pathname?.startsWith(`${link.path}/`) ?? false)
          const isActive = isExactMatch || isSectionMatch

          return (
            <li key={link.path}>
              <Link
                href={link.path}
                aria-current={isActive ? 'page' : undefined}
                className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                {link.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
