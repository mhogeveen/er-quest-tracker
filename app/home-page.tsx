import { NpcSideQuest } from '../components'
// import { useLocalStorage } from '../hooks/useLocalStorage'
import { Npc } from '../types'

type HomePageProps = {
  npcs: Npc[]
}

export default function HomePage({ npcs }: HomePageProps) {
  console.log(npcs)
  // useLocalStorage()

  return (
    <>
      {npcs.map((npc) => (
        <NpcSideQuest key={npc.id} data={npc} />
      ))}
    </>
  )
}
