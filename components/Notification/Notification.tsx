'use client'
import { Cross1Icon } from '@radix-ui/react-icons'
import styles from './Notification.module.scss'
import ReactMarkdown from 'react-markdown'

type NotificationProps = {
  content: string
  title: string
  isShown: boolean
  onClose: () => void
}

export const Notification = ({
  content,
  title,
  isShown,
  onClose,
}: NotificationProps) => {
  return isShown ? (
    <div className={styles.notification}>
      <h2 className={styles.title}>{title}</h2>
      <button className={styles.button} onClick={onClose}>
        <Cross1Icon width={20} height={20} />
      </button>
      <ReactMarkdown className={styles.content}>{content}</ReactMarkdown>
    </div>
  ) : null
}
