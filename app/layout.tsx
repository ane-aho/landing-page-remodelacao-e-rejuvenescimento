import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display-serif',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dra. Roseli Perfoll | Remodelação & Rejuvenescimento',
  description:
    'Protocolos personalizados com terapia peptídica para reparo celular, equilíbrio hormonal, saúde sexual, metabolismo e longevidade. Reequilíbrio hormonal pós-menopausa com acompanhamento nutricional individualizado.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        type: 'image/png',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f1e6e8' },
    { media: '(prefers-color-scheme: dark)', color: '#15181d' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`light ${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
