import { NpcId, Step } from '@src/types'
import styles from './NpcSideQuestStep.module.scss'
import ReactMarkdown from 'react-markdown'
import { Checkbox } from '../Checkbox'
import { Accordion } from '../Accordion'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { ReactEventHandler, useState } from 'react'
import { useNpcLocalStorage } from '@src/hooks/useLocalStorage'

type NpcSideQuestStepProps = {
  data: Step
  isOpenByDefault?: boolean
  npcId: NpcId
}

export const NpcSideQuestStep = ({
  data,
  isOpenByDefault = false,
  npcId,
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
      isOpen={isOpen}
      handleToggle={handleToggle}
      classes={{
        summary: styles.summary,
      }}
      summary={
        <NpcSideQuestStepSummary
          description={data.description}
          isOpen={isOpen}
          isStepComplete={!!localStorageValue?.[data.id]}
          optional={data.optional}
          toggleStepComplete={(state) =>
            setLocalStorageStep(data.id.toString(), state)
          }
        />
      }
      content={<NpcSideQuestStepContent note={data.note} zone={data.zone} />}
    />
  )
}

type NpcSideQuestStepSummaryProps = Pick<Step, 'description' | 'optional'> & {
  isOpen: boolean
  isStepComplete: boolean
  toggleStepComplete: (state: boolean) => void
}

const NpcSideQuestStepSummary = ({
  description,
  isOpen,
  isStepComplete,
  optional,
  toggleStepComplete,
}: NpcSideQuestStepSummaryProps) => {
  return (
    <>
      <div className={styles.checkbox}>
        <Checkbox isChecked={isStepComplete} onClick={toggleStepComplete} />
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
