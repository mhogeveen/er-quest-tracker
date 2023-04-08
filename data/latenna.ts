import { Npc } from '../types'
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
      link: 'https://eldenring.wiki.fextralife.com/Latenna+the+Albinauric',
    },
    {
      id: uuid(),
      name: 'Somber Ancient Dragon Smithing Stone',
      amount: 1,
      link: 'https://eldenring.wiki.fextralife.com/Somber+Ancient+Dragon+Smithing+Stone',
    },
  ],
  steps: [],
  failureCondition: [
    'Obtaining both pieces of the Haligtree Secret Medallion ([Left](https://eldenring.wiki.fextralife.com/Haligtree+Secret+Medallion+(Left)) & [Right](https://eldenring.wiki.fextralife.com/Haligtree+Secret+Medallion+(Right))) before meeting her.',
  ],
}
