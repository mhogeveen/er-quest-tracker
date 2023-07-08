import { Npc, NpcId, Zone } from '@types'
import { v4 as uuid } from 'uuid'

export const bernahl: Npc = {
  id: NpcId.BERNAHL,
  name: 'Knight Bernahl',
  description: 'Proud knight become recusant..',
  link: 'https://eldenring.wiki.fextralife.com/Knight+Bernahl',
  image: {
    src: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/knight_bernahl_npcs_elden_ring_wiki_guide.jpg',
    alt: "Bernahl at the Warmaster's Shack",
  },
  rewards: [
    {
      id: uuid(),
      name: 'Beast Champion Set',
      link: 'https://eldenring.wiki.fextralife.com/Beast+Champion+Set',
    },
    {
      id: uuid(),
      name: "Devourer's Scepter",
      link: "https://eldenring.wiki.fextralife.com/Devourer's+Scepter",
    },
    {
      id: uuid(),
      name: 'Blasphemous Claw',
      link: 'https://eldenring.wiki.fextralife.com/Blasphemous+Claw',
    },
    {
      id: uuid(),
      name: 'Raging Wolf Set',
      link: 'https://eldenring.wiki.fextralife.com/Raging+Wolf+Set',
    },
    {
      id: uuid(),
      name: "Gelmir's Fury",
      link: "https://eldenring.wiki.fextralife.com/Gelmir's+Fury",
    },
  ],
  steps: [
    {
      id: 1,
      optional: false,
      description:
        'Join the [Volcano Manor](https://eldenring.wiki.fextralife.com/Volcano+Manor) family and complete two assassinations for them.',
      zone: Zone.MOUNT_GELMIR,
    },
    {
      id: 2,
      optional: false,
      description:
        'Speak to Bernahl to recieve the [Letter to Bernahl](https://eldenring.wiki.fextralife.com/Letter+to+Bernahl).',
      zone: Zone.MOUNT_GELMIR,
    },
    {
      id: 3,
      optional: false,
      description:
        'Fight Vagram the Raging Wolf together with Bernahl after which you will receive the Raging Wolf Set.',
      zone: Zone.LEYNDELL,
      note: 'Vagram the Raging Wolf can be found in Leyndell after interacting with a red invasion sign.',
    },
    {
      id: 4,
      optional: false,
      description:
        "Report back to Bernahl at Volcano Manor and receive the Gelmir's Fury sorcery.",
      zone: Zone.MOUNT_GELMIR,
    },
    {
      id: 5,
      optional: false,
      description:
        'Defeat Rykard, Lord of Blasphemy, return to Bernahl, and exhaust his dialog.',
      zone: Zone.MOUNT_GELMIR,
    },
    {
      id: 6,
      optional: true,
      description:
        'Summon Bernahl as a cooperator against the [Godskin Duo](https://eldenring.wiki.fextralife.com/Godskin+Duo).',
      zone: Zone.FARUM_AZULA,
    },
    {
      id: 7,
      optional: false,
      description:
        'Defeat Bernahl who invades you on your way to the boss arena in Farum Azula.',
      zone: Zone.FARUM_AZULA,
    },
  ],
  failureConditions: [
    "Defeating [Rykard, Lord of Blasphemy](https://eldenring.wiki.fextralife.com/Rykard,+Lord+of+Blasphemy) before completing step 4 of Bernahl's quest you will be locked out of the next steps.",
  ],
}
