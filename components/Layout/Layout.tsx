'use client'
import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { useLayout } from '@hooks'
import styles from './Layout.module.scss'
import { Container } from '../Container'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Notification } from '../Notification'

type LayoutProps = PropsWithChildren

export const Layout = ({ children }: LayoutProps) => {
  const { showInstructions, setShowInstructions } = useLayout()

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
      <Header
        instructionsActive={showInstructions}
        onToggleInstructions={() =>
          setShowInstructions((prevValue) => !prevValue)
        }
      />
      <main className={styles.main}>
        <Container gap>
          <Notification
            content={
              "This website makes use of *local storage* to save your quest progress.\n\nLocal storage is specific to your current device. So tracking your progress should be done on the same device throughout your journey in Elden Ring.\n\nNot seeing progress you've made previously? That progress was likely saved on another device!\n\n**WARNING** Clearing your site data will delete all of your progress!"
            }
            isShown={showInstructions}
            onClose={() => setShowInstructions(false)}
            title="Instructions"
          />
          {children}
        </Container>
      </main>
      <Footer />
    </>
  )
}
