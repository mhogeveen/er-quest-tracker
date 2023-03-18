import { NpcSideQuest } from '@src/components'
import { npcs } from '@src/data'
import { Npc } from '@src/types'
import { GetStaticPaths, GetStaticProps } from 'next'

type PageProps = {
  data: Npc
}

export default function Page({ data }: PageProps) {
  return <NpcSideQuest data={data} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = npcs.map((npc) => ({ params: { npc: npc.id } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = npcs.find((npc) => npc.id === context?.params?.npc)

  return {
    props: { data },
  }
}
