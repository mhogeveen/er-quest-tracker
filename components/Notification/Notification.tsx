'use client'
import { Cross1Icon } from '@radix-ui/react-icons'
import styles from './Notification.module.scss'
import ReactMarkdown from 'react-markdown'
import { useLayout } from '@context/LayoutContext'

type NotificationProps = {
  content: string
  title: string
}

export const Notification = ({ content, title }: NotificationProps) => {
  const { showInstructions, toggleInstructions } = useLayout()

  return showInstructions ? (
    <div className={styles.notification}>
      <h2 className={styles.title}>{title}</h2>
      <button className={styles.button} onClick={toggleInstructions}>
        <Cross1Icon width={20} height={20} />
      </button>
      <ReactMarkdown className={styles.content}>{content}</ReactMarkdown>
    </div>
  ) : null
}
