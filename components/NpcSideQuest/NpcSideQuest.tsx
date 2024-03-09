'use client'

import { Npc } from '@types'
import { useNpcLocalStorage } from '@hooks/useLocalStorage'
import { ReactEventHandler, useState } from 'react'
import styles from './NpcSideQuest.module.scss'
import { Summary } from './subcomponents/Summary/Summary'
import { Content } from './subcomponents/Content/Content'
import { Accordion } from '@components/Accordion'

type NpcSideQuestProps = {
  data: Npc
  isOpenByDefault?: boolean
}

export const NpcSideQuest = ({
  data,
  isOpenByDefault = false,
}: NpcSideQuestProps) => {
  const { id, failureConditions, rewards, steps, description, link, name } =
    data
  const { localStorageValue, setLocalStorageTotal } = useNpcLocalStorage(id)
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
      content={
        <Content
          failureConditions={failureConditions}
          id={id}
          rewards={rewards}
          steps={steps}
        />
      }
      summary={
        <Summary
          description={description}
          isNpcComplete={!!localStorageValue?.total}
          isOpen={isOpen}
          link={link}
          name={name}
          toggleNpcComplete={setLocalStorageTotal}
        />
      }
      handleToggle={handleToggle}
      isComplete={!!localStorageValue?.total}
      isOpen={isOpen}
    />
  )
}
