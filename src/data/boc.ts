import { Npc, NpcId, Zone } from '@src/types'
import { v4 as uuid } from 'uuid'

export const boc: Npc = {
  id: NpcId.BOC,
  name: 'Boc the Seamster',
  description: 'Just a Demi-Human looking for some love..',
  link: 'https://eldenring.wiki.fextralife.com/Boc+the+Seamster',
  image: {
    src: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/boc_npcs_elden_ring_wiki_guide_300px.jpg',
    alt: 'Boc in Limgrave',
  },
  rewards: [
    {
      id: uuid(),
      name: 'Free alteraltion of garments',
    },
    {
      id: uuid(),
      name: 'Gesture [My Lord]',
      link: 'https://eldenring.wiki.fextralife.com/Gestures',
    },
    {
      id: uuid(),
      name: 'Mushroom',
      link: 'https://eldenring.wiki.fextralife.com/Mushroom',
      amount: 10,
    },
  ],
  steps: [
    {
      id: 1,
      optional: false,
      description: 'Free Boc from his tree form.',
      zone: Zone.LIMGRAVE,
      note: 'He can be found south of the [Agheel Lake North grace](https://eldenring.wiki.fextralife.com/Interactive+Map?id=10&code=mapA) and will yell out if you are close.',
    },
    {
      id: 2,
      optional: false,
      description:
        'Talk to Boc at the [Coastal Cave](https://eldenring.wiki.fextralife.com/Coastal+Cave).',
      zone: Zone.LIMGRAVE,
    },
    {
      id: 3,
      optional: false,
      description:
        'Defeat the boss of the Coastal Cave and return to Boc to give him his sewing tools.',
      zone: Zone.LIMGRAVE,
    },
    {
      id: 4,
      optional: false,
      description:
        'Collect the [Gold Sewing Needle](https://eldenring.wiki.fextralife.com/Gold+Sewing+Needle) from the [Church of Vows](https://eldenring.wiki.fextralife.com/Church+of+Vows).',
      zone: Zone.LIURNIA,
    },
    {
      id: 5,
      optional: false,
      description:
        'Purchase any of the alterable boss armors from [Enia](https://eldenring.wiki.fextralife.com/Enia).',
      zone: Zone.ROUNDTABLE_HOLD,
    },
    {
      id: 6,
      optional: false,
      description:
        'Visit Boc at any of the sites of grace mentioned in the notes of this step and give him the Gold Sewing Needle.',
      zone: Zone.MULTIPLE,
      note: 'Boc can be found at any of these sites of grace:\n- Lake Facing Cliffs\n- East Raya Lucaria Gate\n- Altus Highway Junction\n- East Capital Rampart\n\nYou have now unlocked the ability to alter legendary garments.',
    },
    {
      id: 7,
      optional: false,
      description: 'Talk to Boc and he will express his wish to be reborn.',
      zone: Zone.MULTIPLE,
    },
    {
      id: 8,
      optional: false,
      description:
        'Finish the quest by either giving him a [Larval Tear](https://eldenring.wiki.fextralife.com/Larval+Tear) or using the ["You\'re Beautiful" Prattling Pate](https://eldenring.wiki.fextralife.com/Prattling+Pate+You\'re+Beautiful) in front of him.',
      zone: Zone.MULTIPLE,
      note: "This is not an either or choice. Once one choice is picked you are locked out of the other. The Larval Tear option will result in Boc's death, so if you wish to use his services going forward that path is not recommended.",
    },
  ],
}
