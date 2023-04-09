import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://github.com/mhogeveen/er-sidequest-tracker"
        target="_blank"
      >
        <GitHubLogoIcon width={30} height={30} className={styles.icon} />
      </Link>
    </footer>
  )
}
