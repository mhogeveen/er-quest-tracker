import { Npc, NpcId, Zone } from '@types'
import { v4 as uuid } from 'uuid'

export const dHunter: Npc = {
  id: NpcId.D_HUNTER,
  name: 'D, Hunter of the Dead',
  description: 'A tale of two souls and ones penchant for Weeding Deathroot.',
  link: 'https://eldenring.wiki.fextralife.com/D,+Hunter+of+the+Dead',
  image: {
    src: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/d-hunter-of-the-dead-npc-elden-ring-wiki-guide.jpg',
    alt: 'D, Hunter of the Dead in Limgrave',
  },
  rewards: [
    {
      id: uuid(),
      name: 'Twinned Set',
      link: 'https://eldenring.wiki.fextralife.com/Twinned+Set',
    },
    {
      id: uuid(),
      name: "D's Bell Bearing",
      link: "https://eldenring.wiki.fextralife.com/D's+Bell+Bearing",
    },
  ],
  steps: [
    {
      id: 1,
      optional: true,
      description:
        'Find D to the west of [Summonwater Village](https://eldenring.wiki.fextralife.com/Summonwater+Village) to the side of the path.',
      zone: Zone.LIMGRAVE,
      note: 'If you defeat Godrick or the Red Wolf of Radagon before talking to D in Limgrave, he can be found at Roundtable Hold.',
    },
    {
      id: 2,
      optional: false,
      description:
        "Defeat the Tibia Mariner in Summonwater Village and exhaust D's dialogue at either the Roundtable Hold or the entrace to Summonwater Village.",
      zone: Zone.LIMGRAVE,
    },
    {
      id: 3,
      optional: false,
      description:
        'Visit [Gurranq](https://eldenring.wiki.fextralife.com/Gurranq+Beast+Clergyman) at the [Bestial Sanctum](https://eldenring.wiki.fextralife.com/Bestial+Sanctum) in Caelid.',
      zone: Zone.CAELID,
    },
    {
      id: 4,
      optional: true,
      description:
        'After speaking to Gurranq you will be able to buy incantations from D.',
      zone: Zone.ROUNDTABLE_HOLD,
    },
    {
      id: 5,
      optional: true,
      description:
        "Follow Rogier and Fia's quests or kill D at the first step to acquire his armor.",
      zone: Zone.LANDS_BETWEEN,
    },
    {
      id: 6,
      optional: true,
      description: "Find D's brother in Nokron and give him D's armor.",
      zone: Zone.NOKRON,
      note: "The outcome of this step depends on whether the armor was obtained by killing D or via Rogier and Fia's quests.",
    },
  ],
  failureConditions: ['D dies when you reach Farum Azula'],
}
