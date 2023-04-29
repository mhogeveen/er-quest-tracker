import { NpcSideQuest } from '@src/components'
import npcs from '@src/data'
import { Npc } from '@src/types'
import { GetStaticProps } from 'next'

type PageProps = {
  npcsData: Npc[]
}

export default function Home({ npcsData }: PageProps) {
  return (
    <>
      <h3 style={{ marginBlock: '16px', color: 'red' }}>
        This site is still under construction. The existing NPCs will remain
        available and with time the others will become available as well.
        <br />
        <br />
        Thank you for your patience!
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
