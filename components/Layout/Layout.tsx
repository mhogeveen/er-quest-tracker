'use client'
import { PropsWithChildren } from 'react'
import { useLayout } from '@hooks'
import styles from './Layout.module.scss'
import { Container } from '../Container/Container'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Notification } from '../Notification/Notification'

type LayoutProps = PropsWithChildren

export const Layout = ({ children }: LayoutProps) => {
  const { showInstructions, setShowInstructions } = useLayout()

  return (
    <>
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
