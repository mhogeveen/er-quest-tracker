'use client'
import { Content, Header } from '@components/NpcSideQuest/subcomponents'
import npcs from '@data'
import { useNpcLocalStorage } from '@hooks'
import { Npc, NpcId } from '@types'
import Head from 'next/head'
import { notFound } from 'next/navigation'

type PageProps = {
  params: {
    npc: NpcId
  }
}

type BaseNpcPageProps = {
  npcData: Npc
}

export const generateStaticParams = async () =>
  npcs.map((npc) => ({ npc: npc.id }))

const getData = (npcId: NpcId) => npcs.find((npc) => npc.id === npcId)

export default function NpcPage({ params }: PageProps) {
  const npcData = getData(params.npc)

  if (!npcData) {
    return notFound()
  }

  return <BaseNpcPage npcData={npcData} />
}

const BaseNpcPage = ({ npcData }: BaseNpcPageProps) => {
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
      <Content
        failureConditions={failureConditions}
        id={id}
        rewards={rewards}
        steps={steps}
      />
    </>
  )
}
