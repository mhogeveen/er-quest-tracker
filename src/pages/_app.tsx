import { Layout } from '@src/components'
import type { AppProps } from 'next/app'
import 'normalize.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
