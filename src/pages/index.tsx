import { NpcSideQuest } from '@src/components'
import { npcs } from '@src/data'
import { Npc } from '@src/types'
import { GetStaticProps } from 'next'

type PageProps = {
  data: Npc[]
}

export default function Home({ data }: PageProps) {
  return (
    <>
      {data.map((npc) => (
        <NpcSideQuest key={npc.id} data={npc} />
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { data: npcs },
  }
}
