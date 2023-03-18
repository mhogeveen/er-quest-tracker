import { Npc } from '@src/types'
import {
  IconChevronDown,
  IconChevronUp,
  IconExternalLink,
} from '@tabler/icons-react'
import { ReactEventHandler, useState } from 'react'
import styles from './NpcSideQuest.module.scss'
import { Checkbox } from '../Checkbox'

type NpcSideQuestProps = {
  data: Npc
  isOpen?: boolean
}

export const NpcSideQuest = ({ data, isOpen = true }: NpcSideQuestProps) => {
  const [open, setOpen] = useState(isOpen)

  const handleToggle: ReactEventHandler<HTMLDetailsElement> = (e) => {
    const target = e.target as HTMLDetailsElement
    setOpen(target.open)
  }

  return (
    <details open={open} onToggle={handleToggle} className={styles.details}>
      <summary className={styles.summary}>
        <div className={styles.checkbox}>
          <Checkbox />
        </div>
        <h2 className={styles.title}>{data.name}</h2>
        <a href={data.link} target="_blank" className={styles.link}>
          <IconExternalLink size={20} />
        </a>
        <p className={styles.description}>{data.description}</p>
        <i className={styles.chevron}>
          {open ? (
            <IconChevronUp size={20} />
          ) : (
            <IconChevronDown size={20} />
          )}
        </i>
      </summary>
      <div className={styles.content}></div>
    </details>
  )
}
