import { Layout } from '@src/components'
import type { AppProps } from 'next/app'
import 'normalize.css'
import '@src/styles/globals.scss'
import { Poppins } from 'next/font/google'

const font = Poppins({
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
    </Layout>
  )
}
