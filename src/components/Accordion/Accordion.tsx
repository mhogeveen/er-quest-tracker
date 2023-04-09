import { ReactNode, SyntheticEvent } from 'react'
import styles from './Accordion.module.scss'
import clsx from 'clsx'

type AccordionClasses = {
  details?: string
  summary?: string
  content?: string
}

type AccordionProps = {
  classes?: AccordionClasses
  content?: ReactNode
  handleToggle?: (e: SyntheticEvent<HTMLDetailsElement>) => void
  isOpen: boolean
  summary?: ReactNode
}

export const Accordion = ({
  classes,
  content,
  handleToggle,
  isOpen,
  summary,
}: AccordionProps) => {
  return (
    <details
      open={isOpen}
      onToggle={handleToggle}
      className={clsx(styles.details, classes?.details)}
    >
      <summary className={clsx(styles.summary, classes?.summary)}>
        {summary}
      </summary>
      <div className={clsx(styles.content, classes?.content)}>{content}</div>
    </details>
  )
}
