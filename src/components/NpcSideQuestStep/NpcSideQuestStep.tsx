import { Step } from '@src/types'
import styles from './NpcSideQuestStep.module.scss'
import ReactMarkdown from 'react-markdown'
import { ReactEventHandler, useState } from 'react'
import { Checkbox } from '../Checkbox'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'

type NpcSideQuestStepProps = {
  data: Step
  isOpen?: boolean
}

export const NpcSideQuestStep = ({ data, isOpen }: NpcSideQuestStepProps) => {
  const [open, setOpen] = useState(isOpen)

  const handleToggle: ReactEventHandler<HTMLDetailsElement> = (e) => {
    e.stopPropagation()
    const target = e.target as HTMLDetailsElement
    setOpen(target.open)
  }

  return (
    <details open={open} onToggle={handleToggle} className={styles.details}>
      <summary className={styles.summary}>
        <div className={styles.checkbox}>
          <Checkbox onClick={() => setOpen(false)} />
        </div>
        <ReactMarkdown linkTarget="_blank" className={styles.title}>
          {data.description}
        </ReactMarkdown>
        {data.optional ? (
          <span className={styles.optional}>(optional)</span>
        ) : null}
        <i className={styles.chevron}>
          {open ? (
            <ChevronUpIcon width={20} height={20} />
          ) : (
            <ChevronDownIcon width={20} height={20} />
          )}
        </i>
      </summary>
      <div className={styles.content}>
        {!!data.note ? (
          <ReactMarkdown linkTarget="_blank">
            {`Note: ${data.note}`}
          </ReactMarkdown>
        ) : null}
        <p>Zone: {data.zone}</p>
      </div>
    </details>
  )
}
