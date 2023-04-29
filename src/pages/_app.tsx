import { Layout } from '@src/components'
import type { AppProps } from 'next/app'
import 'normalize.css'
import '@src/styles/globals.scss'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const font = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <style jsx global>{`
        :root {
          --font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}
