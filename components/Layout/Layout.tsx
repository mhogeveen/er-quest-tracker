import { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import { Container } from '@components/Container/Container'
import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'
import { Notification } from '@components/Notification/Notification'
import { LayoutProvider } from '@context/LayoutContext'

type LayoutProps = PropsWithChildren

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <LayoutProvider>
        <Header />
        <main className={styles.main}>
          <Container gap>
            <Notification
              content={
                "This website makes use of *local storage* to save your quest progress.\n\nLocal storage is specific to your current device. So tracking your progress should be done on the same device throughout your journey in Elden Ring.\n\nNot seeing progress you've made previously? That progress was likely saved on another device!\n\n**WARNING** Clearing your site data will delete all of your progress!"
              }
              title="Instructions"
            />
            {children}
          </Container>
        </main>
        <Footer />
      </LayoutProvider>
    </>
  )
}
