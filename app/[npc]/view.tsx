'use client'

import { Content } from '@components/NpcSideQuest/subcomponents/Content/Content'
import { Header } from '@components/NpcSideQuest/subcomponents/Header/Header'
import { useNpcLocalStorage } from '@hooks/useLocalStorage'
import { Npc } from '@types/index'

type ViewProps = {
  npcData: Npc
}

export const View = ({ npcData }: ViewProps) => {
  const { localStorageValue, setLocalStorageTotal } = useNpcLocalStorage(
    npcData.id
  )

  const {
    description,
    failureConditions,
    id,
    image,
    link,
    name,
    rewards,
    steps,
  } = npcData

  return (
    <>
      <Header
        description={description}
        isNpcComplete={!!localStorageValue?.total}
        link={link}
        name={name}
        toggleNpcComplete={(state) => setLocalStorageTotal(state)}
        image={image}
      />
      <Content
        failureConditions={failureConditions}
        id={id}
        rewards={rewards}
        steps={steps}
      />
    </>
  )
}
