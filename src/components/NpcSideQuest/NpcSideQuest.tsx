import { Npc } from '@src/types'
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
} from '@radix-ui/react-icons'
import { ReactEventHandler, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './NpcSideQuest.module.scss'
import { Checkbox } from '../Checkbox'
import { NpcSideQuestStep } from '../NpcSideQuestStep'

type NpcSideQuestProps = {
  data: Npc
  isOpen?: boolean
}

export const NpcSideQuest = ({ data, isOpen = false }: NpcSideQuestProps) => {
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
          <ExternalLinkIcon width={20} height={20} />
        </a>
        <p className={styles.description}>
          <ReactMarkdown linkTarget="_blank">
            {data.description}
          </ReactMarkdown>
        </p>
        <i className={styles.chevron}>
          {open ? (
            <ChevronUpIcon width={20} height={20} />
          ) : (
            <ChevronDownIcon width={20} height={20} />
          )}
        </i>
      </summary>
      <div className={styles.content}>
        {!!data.failureConditions?.length ? (
          <>
            <h3>Failure conditions</h3>
            <ul className={styles.list}>
              {data.failureConditions.map((condition, index) => (
                <li key={index}>
                  <ReactMarkdown linkTarget="_blank">
                    {condition}
                  </ReactMarkdown>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {!!data.rewards?.length ? (
          <>
            <h3>Rewards</h3>
            <ul className={styles.list}>
              {data.rewards.map((reward) => (
                <li key={reward.id}>
                  {`x${reward.amount} - `}
                  <a
                    href={reward.link}
                    target="_blank"
                  >{`${reward.name}`}</a>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {!!data.steps.length ? (
          <>
            <h3>Steps</h3>
            <div>
              {data.steps.map((step) => (
                <NpcSideQuestStep
                  key={step.id}
                  data={step}
                  isOpen={true}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </details>
  )
}
