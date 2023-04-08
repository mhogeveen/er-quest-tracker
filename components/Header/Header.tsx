'use client'
import { IconHome, IconMenu } from '@tabler/icons-react'
import styles from './Header.module.scss'
import { Container } from '../Container'
import Link from 'next/link'
import clsx from 'clsx'
import { npcs } from '../../data'
import { useState, MouseEvent } from 'react'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => setIsNavOpen((prev) => !prev)

  const handleDropdownClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      toggleNav()
    }
  }

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>
              E<span>lden </span>R<span>ing</span> Quest Tracker
            </h1>
            <Link
              href="/"
              className={styles.button}
              onClick={() => setIsNavOpen(false)}
            >
              <IconHome size={20} />
            </Link>
            <button className={styles.button} onClick={toggleNav}>
              <IconMenu size={20} />
            </button>
          </div>
        </Container>

        <div
          className={clsx(
            styles.dropdown,
            isNavOpen && styles.visible
          )}
          onClick={handleDropdownClick}
        >
          <nav className={styles.nav}>
            <Container>
              <ul className={styles.list}>
                {npcs.map(({ id, name }) => (
                  <li key={id}>
                    <Link href={id} onClick={toggleNav}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </nav>
        </div>
      </header>
    </>
  )
}
export default Header
