import { NpcSideQuest } from '@src/components'
import { npcs } from '@src/data'
import { Npc } from '@src/types'
import { GetStaticProps } from 'next'

type PageProps = {
  npcsData: Npc[]
}

export default function Home({ npcsData }: PageProps) {
  return (
    <>
      {npcsData.map((npc) => (
        <NpcSideQuest key={npc.id} data={npc} />
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { npcsData: npcs },
  }
}
