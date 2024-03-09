'use client'

import { NpcId, Step } from '@types'
import ReactMarkdown from 'react-markdown'
import { Checkbox } from '@components/Checkbox/Checkbox'
import { Accordion } from '@components/Accordion'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { ReactEventHandler, useState } from 'react'
import { useNpcLocalStorage } from '@hooks/useLocalStorage'
import { cx } from 'cva'

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
  const { note, zone, description, id, optional } = data
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
        summary: cx(
          'grid',
          "[grid-template-areas:'checkbox_title_optional_chevron''._description_description_description']",
          'grid-cols-[var(--icon-size)_1fr_max-content_var(--icon-size)]',
          'items-center'
        ),
      }}
      content={<NpcSideQuestStepContent note={note} zone={zone} />}
      handleToggle={handleToggle}
      summary={
        <NpcSideQuestStepSummary
          description={description}
          isOpen={isOpen}
          isStepComplete={!!localStorageValue?.[id]}
          optional={optional}
          stepNumber={stepNumber}
          toggleStepComplete={(state) =>
            setLocalStorageStep(id.toString(), state)
          }
        />
      }
      isComplete={!!localStorageValue?.[id]}
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
      <Checkbox
        className="[grid-area:checkbox]"
        isChecked={isStepComplete}
        number={stepNumber}
        onClick={toggleStepComplete}
      />
      <ReactMarkdown linkTarget="_blank" className="[grid-area:title]">
        {description}
      </ReactMarkdown>
      {optional ? (
        <span className="text-xs italic [grid-area:optional]">(optional)</span>
      ) : null}
      <i className="m-[4px] grid h-[calc(var(--icon-size)-var(--spacing))] w-[calc(var(--icon-size)-var(--spacing))] place-items-center [grid-area:chevron]">
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
