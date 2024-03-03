import { Npc, NpcId, Zone } from '@types'
import { v4 as uuid } from 'uuid'

export const corhyn: Npc = {
  id: NpcId.CORHYN,
  name: 'Brother Corhyn',
  description: 'Help Brother Corhyn find his hero; the almighty Goldmask.',
  link: 'https://eldenring.wiki.fextralife.com/Brother+Corhyn',
  image: {
    src: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/brother_corhyn_npcs_elden_ring_wiki_guide.jpg',
    alt: 'Brother Corhyn in the Roundtable Hold',
  },
  rewards: [
    {
      id: uuid(),
      name: 'Mending Run of Perfect Order',
      link: 'https://eldenring.wiki.fextralife.com/Mending+Rune+of+Perfect+Order',
    },
    {
      id: uuid(),
      name: 'Flail',
      link: 'https://eldenring.wiki.fextralife.com/Flail',
    },
    {
      id: uuid(),
      name: "Corhyn's Robe",
      link: "https://eldenring.wiki.fextralife.com/Corhyn's+Robe",
    },
    {
      id: uuid(),
      name: "Goldmask's Rags",
      link: "https://eldenring.wiki.fextralife.com/Goldmask's+Rags",
    },
    {
      id: uuid(),
      name: 'Gold Bracelets',
      link: 'https://eldenring.wiki.fextralife.com/Gold+Bracelets',
    },
    {
      id: uuid(),
      name: 'Gold Waistwrap',
      link: 'https://eldenring.wiki.fextralife.com/Gold+Waistwrap',
    },
  ],
  steps: [
    {
      id: 1,
      optional: false,
      description:
        "Exhaust Corhyn's dialog in the [Roundtable Hold](https://eldenring.wiki.fextralife.com/Roundtable+Hold).",
      zone: Zone.ROUNDTABLE_HOLD,
    },
    {
      id: 2,
      optional: false,
      description:
        'Speak with Corhyn after reaching the [Altus Plateau](https://eldenring.wiki.fextralife.com/Altus+Plateau), he will tell you he is going on a journey to find the [Goldmask](https://eldenring.wiki.fextralife.com/Goldmask).',
      zone: Zone.ROUNDTABLE_HOLD,
    },
    {
      id: 3,
      optional: true,
      description:
        'After resting Corhyn will be standing on the road north of the Altus Highway Junction Site of Grace.',
      zone: Zone.ALTUS,
    },
    {
      id: 4,
      optional: false,
      description:
        'Interact with Goldmask. He will be standing on the broken bridge on the north side of Altus Plateau.',
      zone: Zone.ALTUS,
    },
    {
      id: 5,
      optional: false,
      description:
        'Return to Corhyn and exhaust his dialog and reload the area.',
      zone: Zone.ALTUS,
    },
    {
      id: 6,
      optional: false,
      description:
        'Go to Corhyn, who will be standing next to Goldmask, and exhaust his dialog.',
      zone: Zone.ALTUS,
    },
    {
      id: 7,
      optional: false,
      description:
        "After arriving in Leyndell, Corhyn and Goldmask will move location to the colosseum. Exhaust Corhyn's dialog once again.",
      zone: Zone.LEYNDELL,
    },
    {
      id: 8,
      optional: false,
      description:
        'Procure the incantation [Law of Regression](https://eldenring.wiki.fextralife.com/Law+of+Regression).',
      zone: Zone.LEYNDELL,
    },
    {
      id: 9,
      optional: false,
      description:
        'Head west from [Erdtree Sanctuary grace](https://eldenring.wiki.fextralife.com/Sites+of+Grace) until you see a white message saying "Regression". Cast Law of Regression while standing on the message and facing the statue. Read the new message that appreas.',
      zone: Zone.LEYNDELL,
    },
    {
      id: 10,
      optional: false,
      description:
        "Speak with Goldmask at the colosseum and tell him what you've learned.",
      zone: Zone.LEYNDELL,
    },
    {
      id: 11,
      optional: false,
      description:
        "Find Goldmask and Corhyn on the bridge south of [Stargazers Ruins](https://eldenring.wiki.fextralife.com/Stargazers'+Ruins). Exhaust Corhyn's dialogue.",
      zone: Zone.MOUNTAINTOP,
      note: "Do not give Corhyn the 'Tonic of Forgetfulness' if this appears as an option.",
    },
    {
      id: 12,
      optional: false,
      description: 'Kill Fire Giant on the Mountain of the Giants.',
      zone: Zone.MOUNTAINTOP,
    },
    {
      id: 13,
      optional: false,
      description: 'Kill Beast Clergyman in Crumbling Farum Azula.',
      zone: Zone.FARUM_AZULA,
    },
    {
      id: 14,
      optional: false,
      description:
        'After killing both Fire Giant and Beast Clergyman Corhyn can be found at Capital of Ash grace.',
      zone: Zone.LEYNDELL_ASHEN,
    },
    {
      id: 15,
      optional: false,
      description:
        'Find Goldmask at the bottom of the colosseum cliffs facing the west side of the Erdtree Sanctuary Site of Grace. He will give you the [Mending Rune of Perfect Order](https://eldenring.wiki.fextralife.com/Mending+Rune+of+Perfect+Order).',
      zone: Zone.LEYNDELL_ASHEN,
      note: 'Reload the area after receiving the Rune from Goldmask to be able to loot his set from his corpse.',
    },
    {
      id: 16,
      optional: false,
      description:
        'Find Corhyn near the base of the giant spiral spear. Exhaust his dialogue.',
      zone: Zone.LEYNDELL_ASHEN,
      note: 'Reloading the area after exhausting his dialogue to be able to loot his corpse.',
    },
  ],
  failureConditions: [
    'Progressing through Crumbling Farum Azula when Corhyn has not reached Stargazers Ruins yet will fail this quest.',
  ],
}
