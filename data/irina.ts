import { Npc, NpcId, Zone } from '@types'
import { v4 as uuid } from 'uuid'

export const irina: Npc = {
  id: NpcId.IRINA,
  name: 'Irina',
  description:
    'You will find the blind and bloodied Irina after she fled a rebellion at Castle Morne. Help her deliver a letter to her father.',
  link: 'https://eldenring.wiki.fextralife.com/Irina',
  image: {
    src: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/irina_npcs_elden_ring_wiki_guide.jpg',
    alt: 'Irina resting on a rock',
  },
  rewards: [
    {
      id: uuid(),
      name: 'Sacrifical Twig',
      link: 'https://eldenring.wiki.fextralife.com/Sacrificial+Twig',
    },
    {
      id: uuid(),
      name: 'Shabriri Grape',
      link: 'https://eldenring.wiki.fextralife.com/Shabriri+Grape',
    },
    {
      id: uuid(),
      name: "Banished Knight's Halberd [+8]",
      link: "https://eldenring.wiki.fextralife.com/Banished+Knight's+Halberd",
    },
  ],
  steps: [
    {
      id: 1,
      optional: false,
      description:
        'Talk to Irina at the [Weeping Peninsula](https://eldenring.wiki.fextralife.com/Weeping+Peninsula) end of the [Bridge of Sacrifice](https://eldenring.wiki.fextralife.com/Bridge+of+Sacrifice).',
      zone: Zone.WEEPING_PENINSULA,
      note: 'She will ask you to deliver a letter to her father in [Castle Morne](https://eldenring.wiki.fextralife.com/Castle+Morne) at the southern tip of the Weeping Peninsula.',
    },
    {
      id: 2,
      optional: false,
      description:
        "Deliver the letter to Irina's father, [Edgar](https://eldenring.wiki.fextralife.com/Edgar).",
      zone: Zone.WEEPING_PENINSULA,
      note: 'After delivering the letter Edgar can be killed. The questline will progress the same whether killed or not.',
    },
    {
      id: 3,
      optional: true,
      description:
        'Return to Irina to find an [Iron Cleaver](https://eldenring.wiki.fextralife.com/Iron+Cleaver) embedded in the ground next to her.',
      zone: Zone.WEEPING_PENINSULA,
    },
    {
      id: 4,
      optional: false,
      description:
        'Defeat the [Leonine Misbegotten](https://eldenring.wiki.fextralife.com/Leonine+Misbegotten) and retrieve the [Grafted Blade Greatsword](https://eldenring.wiki.fextralife.com/Grafted+Blade+Greatsword).',
      zone: Zone.WEEPING_PENINSULA,
      note: 'If Edgar is still alive, return to him for some dialog. After this he will return to Irina.',
    },
    {
      id: 5,
      optional: false,
      description:
        'Return to Irina to find Edgar there with her. Talk to Edgar to progress the quest.',
      zone: Zone.WEEPING_PENINSULA,
    },
    {
      id: 6,
      optional: false,
      description:
        'Defeat the [Edgar the Revenger](https://eldenring.wiki.fextralife.com/Edgar+the+Revenger) invader.',
      zone: Zone.LIURNIA,
      note: "He can be found at the [Revenger's Shack](https://eldenring.wiki.fextralife.com/Revenger's+Shack) in Western Liurnia.",
    },
  ],
}
