import { Npc, NpcId, Zone } from '@types'
import { v4 as uuid } from 'uuid'

export const dHunter: Npc = {
  id: NpcId.D_HUNTER,
  name: 'D, Hunter of the Dead',
  description: 'A tale of two souls and ones penchant for Weeding Deathroot.',
  link: 'https://eldenring.wiki.fextralife.com/D,+Hunter+of+the+Dead',
  image: {
    src: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/d-hunter-of-the-dead-npc-elden-ring-wiki-guide.jpg',
    alt: 'D, Hunter of the Dead in Limgrave',
  },
  rewards: [
    {
      id: uuid(),
      name: 'Twinned Set',
      link: 'https://eldenring.wiki.fextralife.com/Twinned+Set',
    },
    {
      id: uuid(),
      name: "D's Bell Bearing",
      link: "https://eldenring.wiki.fextralife.com/D's+Bell+Bearing",
    },
  ],
  steps: [
    {
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
  ],
  failureConditions: ['D dies when you reach Farum Azula'],
}
