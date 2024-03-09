import { Layout } from '@components/Layout'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { Metadata } from 'next'

const font = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Elden Ring Quest Tracker',
  description: 'A tracker for your Elden Ring NPC quest progress',
  viewport: 'width=device-width, initial-scale=1',
  icons: '/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.variable}>
      <body className="flex min-h-screen flex-col">
        <Layout>
          {children}
          <Analytics />
        </Layout>
      </body>
    </html>
  )
}
