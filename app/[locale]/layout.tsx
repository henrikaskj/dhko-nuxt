import { NavBar } from '@/components/NavBar'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import { getContentNavigation } from '@/lib/content'
import { locales, messages, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) notFound()

  const navigation = getContentNavigation(locale as Locale)

  return (
    <div className="min-h-screen flex flex-col bg-dhko-surface" key={locale}>
      <header className="relative bg-dhko-primary shadow-header">
        <div className="absolute top-0 right-0 p-4 sm:p-6 flex gap-3">
          <LocaleSwitcher currentLocale={locale as Locale} />
        </div>
        <div className="px-6 pt-14 pb-8 sm:pt-16 sm:pb-10 max-w-4xl mx-auto text-center">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-2">
            DHKO
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto">
            {messages[locale as Locale].description}
          </p>
          <div className="mt-6 min-h-[2.5rem] flex justify-center">
            <NavBar items={navigation} />
          </div>
        </div>
      </header>
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 sm:px-8 py-10 sm:py-12">
        <div className="bg-dhko-surface-elevated rounded-xl shadow-card p-6 sm:p-8 md:p-10">
          {children}
        </div>
      </main>
      <footer className="py-6 px-4 bg-dhko-primary-dark text-center border-t border-white/10">
        <p className="text-white/90 text-sm">
          &copy; {new Date().getFullYear()} DHKO
        </p>
      </footer>
    </div>
  )
}
