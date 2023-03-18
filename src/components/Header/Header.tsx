import { IconHome, IconMenu } from '@tabler/icons-react'
import styles from './Header.module.scss'
import { Container } from '../Container'
import Link from 'next/link'
import clsx from 'clsx'
import { npcs } from '@src/data'
import { useState } from 'react'

type HeaderProps = {}

export const Header = ({ }: HeaderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const npcsPaths = npcs.map((npc) => npc.id)

  const toggleNav = () => setIsNavOpen((prev) => !prev)

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>
              E<span>lden </span>R<span>ing</span> Quest Tracker
            </h1>
            <Link href="/" className={styles.button}>
              <IconHome size={20} />
            </Link>
            <button className={styles.button} onClick={toggleNav}>
              <IconMenu size={20} />
            </button>
          </div>
        </Container>

        <nav className={clsx(styles.nav, isNavOpen && styles.visible)}>
          <Container>
            <ul>
              {npcsPaths.map((npcPath, i) => (
                <li key={i}>
                  <Link href={npcPath} onClick={toggleNav}>
                    {npcPath}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      </header>
    </>
  )
}
