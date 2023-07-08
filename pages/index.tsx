import { NpcSideQuest } from '@components'
import npcs from '@data'
import { Npc } from '@types'
import { GetStaticProps } from 'next'

type PageProps = {
  npcsData: Npc[]
}

export default function Home({ npcsData }: PageProps) {
  return (
    <>
      <h3 style={{ color: 'red' }}>
        This site is still under construction!
        <br />
        <br />
        It is possible progess made will be reset if you make use of the website
        before full release.
        <br />
        <br />
        Sorry for the inconvenience and thank you for your patience!
      </h3>
      {npcsData.map((npc) => (
        <NpcSideQuest key={npc.id} data={npc} isOpenByDefault={false} />
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { npcsData: npcs },
  }
}
