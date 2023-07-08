import { Npc, NpcId, Zone } from '@types'
import { v4 as uuid } from 'uuid'

export const gideon: Npc = {
  id: NpcId.GIDEON,
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
      link: "https://eldenring.wiki.fextralife.com/Fevor's+Cookbook+(3)",
    },
    {
      id: uuid(),
      name: "Black Flame's Protection",
      link: "https://eldenring.wiki.fextralife.com/Black+Flame's+Protection",
    },
    {
      id: uuid(),
      name: 'Law of Causality',
      link: 'https://eldenring.wiki.fextralife.com/Law+of+Causality',
    },
    {
      id: uuid(),
      name: "Lord's Divine Fortification",
      link: "https://eldenring.wiki.fextralife.com/Lord's+Divine+Fortification",
    },
  ],
  steps: [
    {
      id: 1,
      optional: false,
      description: 'Visit Roundtable Hold.',
      zone: Zone.ROUNDTABLE_HOLD,
    },
    {
      id: 2,
      optional: false,
      description: 'Obtain a Great Rune.',
      zone: Zone.LANDS_BETWEEN,
    },
    {
      id: 3,
      optional: false,
      description:
        'Kill [Morgott the Omen King](https://eldenring.wiki.fextralife.com/Morgott+the+Omen+King).',
      zone: Zone.LEYNDELL,
    },
    {
      id: 4,
      optional: false,
      description: "Speak to Gideon about the 'unlocated demigods'.",
      zone: Zone.ROUNDTABLE_HOLD,
    },
    {
      id: 5,
      optional: true,
      description:
        'Discover [Mohgwyn Dynasty Mausoleum](https://eldenring.wiki.fextralife.com/Mohgwyn+Dynasty+Mausoleum) and speak with Gideon.',
      zone: Zone.MOHGWYN_PALACE,
      note: "This rewards the Fevor's Cookbook [3].",
    },
    {
      id: 6,
      optional: true,
      description:
        'Kill [Mogh, Lord of Blood](https://eldenring.wiki.fextralife.com/Mohg,+Lord+of+Blood) and speak with Gideon.',
      zone: Zone.MOHGWYN_PALACE,
      note: 'This rewards the Law of Causality incantation.',
    },
    {
      id: 7,
      optional: true,
      description:
        "Discover [Miquella's Haligtree](https://eldenring.wiki.fextralife.com/Miquella's+Haligtree) and speak with Gideon.",
      zone: Zone.HALIGTREE,
      note: "This rewards the Black Flame's Protection incantation.",
    },
    {
      id: 8,
      optional: true,
      description:
        'Kill [Malenia, Blade of Miquella](https://eldenring.wiki.fextralife.com/Malenia,+Blade+of+Miquella) and speak with Gideon.',
      zone: Zone.HALIGTREE,
      note: "This rewards the Lord's Divine Fortification incantation.",
    },
  ],
  failureConditions: [
    'Killing [Maliketh, The Black Blade](https://eldenring.wiki.fextralife.com/Maliketh,+The+Black+Blade) will trigger Gideon to leave the roundtable hold and become a boss.',
  ],
}
