import { NpcId, Step } from '@src/types'
import styles from './NpcSideQuestStep.module.scss'
import ReactMarkdown from 'react-markdown'
import { Checkbox } from '../Checkbox'
import { Accordion } from '../Accordion'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { ReactEventHandler, useState } from 'react'
import { useNpcLocalStorage } from '@src/hooks'

type NpcSideQuestStepProps = {
  data: Step
  isOpenByDefault?: boolean
  npcId: NpcId
  stepNumber?: number
}

export const NpcSideQuestStep = ({
  data,
  isOpenByDefault = false,
  npcId,
  stepNumber,
}: NpcSideQuestStepProps) => {
  const { localStorageValue, setLocalStorageStep } = useNpcLocalStorage(npcId)
  const [isOpen, setIsOpen] = useState(isOpenByDefault)

  const handleToggle: ReactEventHandler<HTMLDetailsElement> = (e) => {
    e.stopPropagation()
    const target = e.target as HTMLDetailsElement
    setIsOpen(target.open)
  }

  return (
    <Accordion
      classes={{
        summary: styles.summary,
      }}
      content={<NpcSideQuestStepContent note={data.note} zone={data.zone} />}
      handleToggle={handleToggle}
      summary={
        <NpcSideQuestStepSummary
          description={data.description}
          isOpen={isOpen}
          isStepComplete={!!localStorageValue?.[data.id]}
          optional={data.optional}
          stepNumber={stepNumber}
          toggleStepComplete={(state) =>
            setLocalStorageStep(data.id.toString(), state)
          }
        />
      }
      isComplete={!!localStorageValue?.[data.id]}
      isOpen={isOpen}
    />
  )
}

type NpcSideQuestStepSummaryProps = Pick<Step, 'description' | 'optional'> & {
  isOpen: boolean
  isStepComplete: boolean
  toggleStepComplete: (state: boolean) => void
  stepNumber?: number
}

const NpcSideQuestStepSummary = ({
  description,
  isOpen,
  isStepComplete,
  optional,
  toggleStepComplete,
  stepNumber,
}: NpcSideQuestStepSummaryProps) => {
  return (
    <>
      <div className={styles.checkbox}>
        <Checkbox
          isChecked={isStepComplete}
          number={stepNumber}
          onClick={toggleStepComplete}
        />
      </div>
      <ReactMarkdown linkTarget="_blank" className={styles.title}>
        {description}
      </ReactMarkdown>
      {optional ? <span className={styles.optional}>(optional)</span> : null}
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

type NpcSideQuestStepContentProps = Pick<Step, 'note' | 'zone'>

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
