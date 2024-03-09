import { Content } from '@components/NpcSideQuest/subcomponents/Content/Content'
import { Header } from '@components/NpcSideQuest/subcomponents/Header/Header'
import { Npc } from '@types'

type ViewProps = {
  npcData: Npc
}

export const NpcView = ({ npcData }: ViewProps) => {
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
        id={id}
        image={image}
        link={link}
        name={name}
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
