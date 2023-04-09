import { NpcSideQuest } from '@src/components'
import npcs from '@src/data'
import { Npc } from '@src/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

type PageProps = {
  npcData: Npc
}

export default function Page({ npcData }: PageProps) {
  return (
    <>
      <Head>
        <title>{`${npcData.name} / Elden Ring Quest Tracker`}</title>
      </Head>
      <NpcSideQuest data={npcData} isOpenByDefault={true} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = npcs.map((npc) => ({ params: { npc: npc.id } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const npcData = npcs.find((npc) => npc.id === context?.params?.npc)

  return {
    props: { npcData, npcsData: npcs },
  }
}
