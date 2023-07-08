'use client'
import { Npc } from '@types'
import { useNpcLocalStorage } from '@hooks'
import { ReactEventHandler, useState } from 'react'
import styles from './NpcSideQuest.module.scss'
import { Summary, Content } from './subcomponents'
import { Accordion } from '../Accordion'

type NpcSideQuestProps = {
  data: Npc
  isOpenByDefault?: boolean
}

export const NpcSideQuest = ({
  data,
  isOpenByDefault = false,
}: NpcSideQuestProps) => {
  const { localStorageValue, setLocalStorageTotal } = useNpcLocalStorage(
    data.id
  )
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
          failureConditions={data.failureConditions}
          id={data.id}
          rewards={data.rewards}
          steps={data.steps}
        />
      }
      summary={
        <Summary
          description={data.description}
          isNpcComplete={!!localStorageValue?.total}
          isOpen={isOpen}
          link={data.link}
          name={data.name}
          toggleNpcComplete={(state) => setLocalStorageTotal(state)}
        />
      }
      handleToggle={handleToggle}
      isComplete={!!localStorageValue?.total}
      isOpen={isOpen}
    />
  )
}
