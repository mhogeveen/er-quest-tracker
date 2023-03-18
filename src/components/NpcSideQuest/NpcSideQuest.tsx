import { Npc } from '@src/types'
import Image from 'next/image'
import {
  IconChevronDown,
  IconChevronUp,
  IconExternalLink,
} from '@tabler/icons-react'
import { ReactEventHandler, useState } from 'react'
import styles from './NpcSideQuest.module.scss'

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
        <h2 className={styles.title}>{data.name}</h2>
        <a href={data.link} target="_blank" className={styles.link}>
          <IconExternalLink />
        </a>
        <p className={styles.description}>{data.description}</p>
        <i className={styles.chevron}>
          {open ? <IconChevronUp /> : <IconChevronDown />}
        </i>
      </summary>
      {data.image && (
        <div
          style={{
            position: 'relative',
            width: '300px',
            aspectRatio: '16 / 9',
          }}
        >
          <Image src={data.image.src} alt={data.image.alt} fill />
        </div>
      )}
    </details>
  )
}
