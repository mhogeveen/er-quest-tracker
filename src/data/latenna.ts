import { Npc } from '@src/types'
import { v4 as uuid } from 'uuid'

export const latenna: Npc = {
  id: 'latenna',
  name: 'Latenna',
  description:
    "Latenna's quest will lead you to the Consecrated Snowfields in search of the Haligtree.",
  link: 'https://eldenring.wiki.fextralife.com/Latenna',
  image: {
    src: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/latenna-npc-elden-ring-wiki-guide.jpg',
    alt: 'Latenna and her wolf Lobo',
  },
  rewards: [
    {
      id: uuid(),
      name: 'Latenna the Albinauric',
      amount: 1,
      description:
        'Latenna the Albinauric is a ranged support unit that deals magic damage with a bow.',
      link: 'https://eldenring.wiki.fextralife.com/Latenna+the+Albinauric',
    },
    {
      id: uuid(),
      name: 'Somber Ancient Dragon Smithing Stone',
      amount: 1,
      description:
        'Somber Ancient Dragon Smithing Stone strengthens special armaments to +10.',
      link: 'https://eldenring.wiki.fextralife.com/Somber+Ancient+Dragon+Smithing+Stone',
    },
  ],
  steps: [],
  failureCondition: [],
}
