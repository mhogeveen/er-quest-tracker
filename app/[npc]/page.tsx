import npcs from '@data'
import { NpcId } from '@types'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { View } from './view'

type PageProps = {
  params: {
    npc: NpcId
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const npcData = npcs.find((npc) => npc.id === params.npc)

  return {
    title: npcData?.name
      ? `${npcData.name} / Elden Ring Quest Tracker`
      : 'Elden Ring Quest Tracker',
  }
}

export const generateStaticParams = async () =>
  npcs.map((npc) => ({ npc: npc.id }))

export default function NpcPage({ params }: PageProps) {
  const npcData = npcs.find((npc) => npc.id === params.npc)

  if (!npcData) {
    return notFound()
  }

  return <View npcData={npcData} />
}
