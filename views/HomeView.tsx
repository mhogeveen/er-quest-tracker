import { NpcSideQuest } from '@components/NpcSideQuest/NpcSideQuest'
import npcs from '@data'

export const HomeView = () => {
  return npcs.map((npc) => (
    <NpcSideQuest key={npc.id} data={npc} isOpenByDefault={false} />
  ))
}
