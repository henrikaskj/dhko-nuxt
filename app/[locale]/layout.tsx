import { locales, messages, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import { NavBar } from '@/components/NavBar'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'

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

  return (
    <div className="min-h-screen flex flex-col" key={locale}>
      <header className="p-10 bg-gradient-to-tr bg-slate-700 shadow-md flex flex-col justify-center items-center">
        <nav className="absolute top-0 right-2 p-4 flex gap-4">
          <LocaleSwitcher currentLocale={locale as Locale} />
        </nav>
        <h1 className="font-bold text-3xl lg:text-4xl text-slate-50 mb-2">DHKO</h1>
        <h2 className="text-xl lg:text-2xl text-slate-50 text-center">
          {messages[locale as Locale].description}
        </h2>
        <div className="mt-5 min-h-[2rem]">
          <NavBar locale={locale as Locale} />
        </div>
      </header>
      <main className="container mx-auto p-10">{children}</main>
      <footer className="p-5 bg-slate-200 text-center">
        <p className="text-slate-900">&copy; {new Date().getFullYear()} DHKO</p>
      </footer>
    </div>
  )
}
