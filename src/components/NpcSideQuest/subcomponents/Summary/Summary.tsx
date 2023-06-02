import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLinkIcon,
} from '@radix-ui/react-icons'
import { Checkbox } from '@src/components'
import { Npc } from '@src/types'
import ReactMarkdown from 'react-markdown'
import styles from './Summary.module.scss'

type SummaryProps = Pick<Npc, 'description' | 'link' | 'name'> & {
  isNpcComplete: boolean
  isOpen: boolean
  toggleNpcComplete: (state: boolean) => void
}

export const Summary = ({
  description,
  isNpcComplete,
  isOpen,
  link,
  name,
  toggleNpcComplete,
}: SummaryProps) => {
  return (
    <>
      <div className={styles.checkbox}>
        <Checkbox isChecked={isNpcComplete} onClick={toggleNpcComplete} />
      </div>
      <h2 className={styles.title}>{name}</h2>
      <a href={link} target="_blank" className={styles.link}>
        <ExternalLinkIcon width={20} height={20} />
      </a>
      <div className={styles.description}>
        <ReactMarkdown linkTarget="_blank">{description}</ReactMarkdown>
      </div>
      <i className={styles.chevron}>
        {isOpen ? (
          <ChevronUpIcon width={20} height={20} />
        ) : (
          <ChevronDownIcon width={20} height={20} />
        )}
      </i>
    </>
  )
}
