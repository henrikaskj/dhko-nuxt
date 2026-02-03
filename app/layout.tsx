import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { template: '%s - dhko.no', default: 'dhko.no' },
  description: 'Norwegian network for digital humanities and cultural organization',
  icons: [{ rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
