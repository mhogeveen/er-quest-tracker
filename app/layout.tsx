import { Layout } from '@components'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import 'normalize.css'
import '@styles/globals.scss'

const font = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-family',
})

export const metadata = {
  title: 'Elden Ring Quest Tracker',
  description: 'A tracker for your Elden Ring NPC quest progress',
  viewport: 'width=device-width, initial-scale=1',
  icons: '/favicon.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <Layout>
          {children}
          <Analytics />
        </Layout>
      </body>
    </html>
  )
}
