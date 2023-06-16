import { Content, Header } from '@src/components/NpcSideQuest/subcomponents'
import npcs from '@src/data'
import { useNpcLocalStorage } from '@src/hooks'
import { Npc } from '@src/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

type PageProps = {
  npcData: Npc
}

export default function Page({ npcData }: PageProps) {
  const { localStorageValue, setLocalStorageTotal } = useNpcLocalStorage(
    npcData.id
  )

  const { description, id, image, link, name, rewards, steps } = npcData

  return (
    <>
      <Head>
        <title>{`${name} / Elden Ring Quest Tracker`}</title>
      </Head>
      <Header
        description={description}
        isNpcComplete={!!localStorageValue?.total}
        link={link}
        name={name}
        toggleNpcComplete={(state) => setLocalStorageTotal(state)}
        image={image}
      />
      <Content id={id} rewards={rewards} steps={steps} />
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
    props: { npcData },
  }
}
