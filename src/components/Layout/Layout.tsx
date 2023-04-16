import { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import { Header } from '../Header'
import { Footer } from '../Footer'
import Head from 'next/head'
import { Container } from '../Container'

type LayoutProps = PropsWithChildren

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Elden Ring Quest Tracker</title>
        <meta
          name="description"
          content="A tracker for your Elden Ring NPC quest progress"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}
