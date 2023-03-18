import { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'

type LayoutProps = PropsWithChildren

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>Header</header>
      <main className={styles.main}>{children}</main>
      <footer>Footer</footer>
    </>
  )
}
