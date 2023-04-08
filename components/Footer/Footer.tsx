'use client'
import { IconBrandGithub } from '@tabler/icons-react'
import Link from 'next/link'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://github.com/mhogeveen/er-sidequest-tracker"
        target="_blank"
      >
        <IconBrandGithub size={30} className={styles.icon} />
      </Link>
    </footer>
  )
}
