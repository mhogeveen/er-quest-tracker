// import { NpcSideQuest } from '../../components'
// import { npcs } from '../../data'
// import { Metadata } from 'next'
//
// type Params = {
//   id: string
//   name: string
// }
// type PageProps = {
//   params: Params
// }
//
// export async function generateStaticParams() {
//   return npcs.map((npc) => ({ id: npc.id, name: npc.name }))
// }
//
// async function getNpc(params: Params) {
//   return npcs.find((npc) => npc.id === params.id)
// }
//
// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   return {
//     title: `${params.name} / Elden Ring Quest Tracker`,
//   }
// }
//
// export default async function Page({ params }: PageProps) {
//   const npcData = await getNpc(params)
//
//   return npcData ? <NpcSideQuest data={npcData} isOpen={true} /> : null
// }

export default function Page() {
  return <p>heyo</p>
}
