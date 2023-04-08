import 'normalize.css'
import '../styles/globals.scss'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

const font = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Elden Ring Quest Tracker',
  description: 'A tracker for your Elden Ring NPC quest progress',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
