import { Npc, NpcId, Zone } from '@src/types'
import { v4 as uuid } from 'uuid'

export const boggart: Npc = {
  id: NpcId.BOGGART,
  name: 'Blackguard Big Boggart',
  description: 'Boggart sells the best boiled prawn in the Lands Between!',
  link: 'https://eldenring.wiki.fextralife.com/Blackguard+Big+Boggart',
  image: {
    src: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/blackguard-npc-elden-ring-wiki-guide.jpg',
    alt: 'Boggart boiling prawns',
  },
  rewards: [
    {
      id: uuid(),
      name: 'Boiled Prawn',
      link: 'https://eldenring.wiki.fextralife.com/Boiled+Prawn',
    },
    {
      id: uuid(),
      name: 'Boiled Crabs',
      link: 'https://eldenring.wiki.fextralife.com/Boiled+Crab',
    },
    {
      id: uuid(),
      name: "Blackguard's Iron Mask",
      link: "https://eldenring.wiki.fextralife.com/Blackguard's+Iron+Mask",
    },
    {
      id: uuid(),
      name: 'Iron Ball',
      link: 'https://eldenring.wiki.fextralife.com/Iron+Ball',
    },
  ],
  steps: [
    {
      id: 1,
      optional: false,
      description:
        'Talk to Rya in a pavilion north of the [Laskyar Ruins](https://eldenring.wiki.fextralife.com/Laskyar+Ruins), exhaust her dialog and promise to retrieve her necklace from the thief.',
      zone: Zone.LIURNIA,
    },
    {
      id: 2,
      optional: false,
      description:
        "Buy Rya's necklace from Boggart at the [Boilprawn Shack](https://eldenring.wiki.fextralife.com/Boilprawn+Shack).",
      zone: Zone.LIURNIA,
    },
    {
      id: 3,
      optional: false,
      description: 'Buy Boiled Prawns from Boggart to befriend him.',
      zone: Zone.LIURNIA,
    },
    {
      id: 4,
      optional: false,
      description:
        'Find Boggart in the Leyndell moat and exhaust his dialog until he mentions that the [Dung Eater](https://eldenring.wiki.fextralife.com/Dung+Eater) is lurking nearby.',
      zone: Zone.LEYNDELL,
      note: "This step is only possible if the Dung Eater's questline is at the point where he will be 'waiting in the the outer moat'.",
    },
    {
      id: 5,
      optional: false,
      description: 'Reload the area and interact with the now wounded Boggart.',
      zone: Zone.LEYNDELL,
      note: 'This interaction will trigger an invasion by the Dung Eater.',
    },
    {
      id: 6,
      optional: false,
      description:
        "Find a [Seedbed Curse](https://eldenring.wiki.fextralife.com/Seedbed+Curse) on Boggart's body together with his belongings.",
      zone: Zone.LEYNDELL,
    },
  ],
  failureConditions: [
    "Reaching [Volcano Manor](https://eldenring.wiki.fextralife.com/Volcano+Manor) before initiating [Rya](https://eldenring.wiki.fextralife.com/Rya)'s quest",
  ],
}
