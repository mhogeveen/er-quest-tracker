import { Npc, Zone } from '@src/types'
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
  steps: [
    {
      id: 1,
      optional: true,
      description:
        "Find and talk to Latenna at the [Slumbering Wolf's Shack](https://eldenring.wiki.fextralife.com/Slumbering+Wolfs+Shack).",
      zone: Zone.LIURNIA,
    },
    {
      id: 2,
      optional: false,
      description:
        'Speak to [Albus](https://eldenring.wiki.fextralife.com/Albus) and aquire the [Haligtree Secret Medallion (Right)](https://eldenring.wiki.fextralife.com/Haligtree+Secret+Medallion+(Right)).',
      zone: Zone.LIURNIA,
    },
    {
      id: 3,
      optional: false,
      description: 'Return and speak to Latenna.',
      zone: Zone.LIURNIA,
    },
    {
      id: 4,
      optional: false,
      description: 'Promise to take Latenna to the Haligtree.',
      note: 'Latenna will join you and becoma a Spirit Ash summon, Latenna the Albinauric. She will also hint at the location of the [Haligtree Secret Medallion (Left)](https://eldenring.wiki.fextralife.com/Haligtree+Secret+Medallion+(Left)).',
      zone: Zone.LIURNIA,
    },
    {
      id: 5,
      optional: false,
      description:
        'Summon Latenna the Albinauric at the foot of the giant woman at the [Apostate Derelict](https://eldenring.wiki.fextralife.com/Apostate+Derelict) location.',
      note: 'After you receive the Somber Ancient Dragon Smithing Stone the quest is complete.',
      zone: Zone.CONSECRATED_SNOWFIELDS,
    },
  ],
  failureConditions: [
    'Obtaining both pieces of the Haligtree Secret Medallion ([Left](https://eldenring.wiki.fextralife.com/Haligtree+Secret+Medallion+(Left)) & [Right](https://eldenring.wiki.fextralife.com/Haligtree+Secret+Medallion+(Right))) before meeting her.',
  ],
}
