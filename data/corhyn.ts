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
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
    {
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
    {
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
    {
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
    {
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
    {
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
    {
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
    {
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
    {
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
    {
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
    {
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
    {
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
    {
      id: 1,
      optional: false,
      description: '',
      zone: Zone.LIMGRAVE,
      note: '',
    },
  ],
  failureConditions: [
    'Progressing through Crumbling Farum Azula when Corhyn has not reached Stargazers Ruins yet will fill this quest.',
  ],
}
