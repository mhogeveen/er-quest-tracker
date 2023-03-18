import { IconMenu } from '@tabler/icons-react'
import styles from './Header.module.scss'
import { Container } from '../Container'

type HeaderProps = {}

export const Header = ({ }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <h1>Elden Ring Quest Tracker</h1>
          <button>
            <IconMenu size={20} />
          </button>
        </div>
      </Container>
    </header>
  )
}
