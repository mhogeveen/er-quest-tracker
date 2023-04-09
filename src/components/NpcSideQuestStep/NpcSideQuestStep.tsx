import { Step } from '@src/types'
import styles from './NpcSideQuestStep.module.scss'
import ReactMarkdown from 'react-markdown'
import { Checkbox } from '../Checkbox'
import { Accordion } from '../Accordion'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { ReactEventHandler, useState } from 'react'

type NpcSideQuestStepProps = {
  data: Step
  isOpenByDefault?: boolean
}

export const NpcSideQuestStep = ({
  data,
  isOpenByDefault = false,
}: NpcSideQuestStepProps) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault)

  const handleToggle: ReactEventHandler<HTMLDetailsElement> = (e) => {
    e.stopPropagation()
    const target = e.target as HTMLDetailsElement
    setIsOpen(target.open)
  }

  return (
    <Accordion
      isOpen={isOpen}
      handleToggle={handleToggle}
      classes={{
        summary: styles.summary,
      }}
      summary={
        <NpcSideQuestStepSummary
          description={data.description}
          optional={data.optional}
        />
      }
      content={<NpcSideQuestStepContent note={data.note} zone={data.zone} />}
    />
  )
}

type NpcSideQuestStepSummaryProps = {
  description: string
  optional: boolean
}

const NpcSideQuestStepSummary = ({
  description,
  optional,
}: NpcSideQuestStepSummaryProps) => {
  return (
    <>
      <div className={styles.checkbox}>
        <Checkbox />
      </div>
      <ReactMarkdown linkTarget="_blank" className={styles.title}>
        {description}
      </ReactMarkdown>
      {optional ? <span className={styles.optional}>(optional)</span> : null}
      <i className={styles.chevron}>
        {true ? (
          <ChevronUpIcon width={20} height={20} />
        ) : (
          <ChevronDownIcon width={20} height={20} />
        )}
      </i>
    </>
  )
}

type NpcSideQuestStepContentProps = {
  note?: string
  zone: string
}

const NpcSideQuestStepContent = ({
  note,
  zone,
}: NpcSideQuestStepContentProps) => {
  return (
    <>
      {!!note ? (
        <ReactMarkdown linkTarget="_blank">{`Note: ${note}`}</ReactMarkdown>
      ) : null}
      <p>Zone: {zone}</p>
    </>
  )
}
