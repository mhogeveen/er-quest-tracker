'use client'
import { NpcSideQuest } from '@components/NpcSideQuest/NpcSideQuest'
import npcs from '@data'

const Home = () => (
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
    {npcs.map((npc) => (
      <NpcSideQuest key={npc.id} data={npc} isOpenByDefault={false} />
    ))}
  </>
)

export default Home
