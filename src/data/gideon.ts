import { Npc } from '@src/types'
import { v4 as uuid } from 'uuid'

export const gideon: Npc = {
  id: 'gideon',
  name: 'Gideon Ofnir',
  description:
    "Gideon Ofnir's quest will progress alongside your progression through the story.",
  link: 'https://eldenring.wiki.fextralife.com/Gideon+Ofnir',
  image: {
    src: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/gidron-ofnir-roundtable-hold-npc-elden-ring-wiki-300px2-min.jpeg',
    alt: 'Gideon in his office',
  },
  rewards: [
    {
      id: uuid(),
      name: "Fevor's Cookbook [3]",
      amount: 1,
      link: "https://eldenring.wiki.fextralife.com/Fevor's+Cookbook+(3)",
    },
    {
      id: uuid(),
      name: "Black Flame's Protection",
      amount: 1,
      link: "https://eldenring.wiki.fextralife.com/Black+Flame's+Protection",
    },
    {
      id: uuid(),
      name: 'Law of Causality',
      amount: 1,
      link: 'https://eldenring.wiki.fextralife.com/Law+of+Causality',
    },
    {
      id: uuid(),
      name: "Lord's Divine Fortification",
      amount: 1,
      link: "https://eldenring.wiki.fextralife.com/Lord's+Divine+Fortification",
    },
  ],
  steps: [],
  failureConditions: [
    'Killing [Maliketh, The Black Blade](https://eldenring.wiki.fextralife.com/Maliketh,+The+Black+Blade) will trigger Gideon to leave the roundtable hold and become a boss',
  ],
}
