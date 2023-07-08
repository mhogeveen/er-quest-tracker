import { Npc, NpcId, Zone } from '@types'
import { v4 as uuid } from 'uuid'

export const alexander: Npc = {
  id: NpcId.ALEXANDER,
  name: 'Iron Fist Alexander',
  description:
    'Alexander has set out to become a mighty warrior.. he might need some help getting there.',
  link: 'https://eldenring.wiki.fextralife.com/Iron+Fist+Alexander',
  image: {
    src: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/alexander_npc_elden_ring_wiki_guide_300px.jpg',
    alt: 'Alexander stuck in a hole',
  },
  rewards: [
    {
      id: uuid(),
      name: 'Gesture [Triumphant Delight]',
      link: 'https://eldenring.wiki.fextralife.com/Gestures',
    },
    {
      id: uuid(),
      name: 'Jar [Helmet]',
      link: 'https://eldenring.wiki.fextralife.com/Jar',
    },
    {
      id: uuid(),
      name: 'Warrior Jar Shard',
      link: 'https://eldenring.wiki.fextralife.com/Warrior+Jar+Shard',
    },
    {
      id: uuid(),
      name: 'Shard of Alexander',
      link: 'https://eldenring.wiki.fextralife.com/Shard+of+Alexander',
    },
    {
      id: uuid(),
      name: "Alexander's Innards",
      link: "https://eldenring.wiki.fextralife.com/Alexander's+Innards",
    },
  ],
  steps: [
    {
      id: 1,
      optional: false,
      description:
        'Find Alexander in [Northern Stormhill](https://eldenring.wiki.fextralife.com/Stormhill) and help him out.',
      zone: Zone.LIMGRAVE,
      note: 'You will have to hit him from the back in order to free him from his predicament.',
    },
    {
      id: 2,
      optional: false,
      description:
        'Find Alexander in [Gael Tunnel](https://eldenring.wiki.fextralife.com/Gael+Tunnel).',
      zone: Zone.CAELID,
    },
    {
      id: 3,
      optional: false,
      description:
        'Talk to Alexander at [Redmane Castle](https://eldenring.wiki.fextralife.com/Redmane+Castle).',
      zone: Zone.CAELID,
    },
    {
      id: 4,
      optional: false,
      description:
        "Talk to Alexander at Radahn's grace after defeating Radahn and exhaust all of his dialog.",
      zone: Zone.CAELID,
    },
    {
      id: 5,
      optional: true,
      description:
        'Find Alexander south of the [Carian Study Hall](https://eldenring.wiki.fextralife.com/Carian+Study+Hall) and help him out.',
      zone: Zone.LIURNIA,
      note: 'Throw an [Oil Pot](https://eldenring.wiki.fextralife.com/Oil+Pot) or [Roped Oil Pot](https://eldenring.wiki.fextralife.com/Roped+Oil+Pot) at him to make him "slippery".',
    },
    {
      id: 6,
      optional: false,
      description:
        'Find Alexander bathing in the lava at [Seethewater Terminus](https://eldenring.wiki.fextralife.com/Site+of+Grace) under the lavafall.',
      zone: Zone.MOUNT_GELMIR,
    },
    {
      id: 7,
      optional: true,
      description:
        'Summon Alexander to help you kill the Fire Giant at [Mountaintop of the Giants](https://eldenring.wiki.fextralife.com/Mountaintops+of+the+Giants).',
      zone: Zone.MOUNTAINTOP,
    },
    {
      id: 8,
      optional: false,
      description:
        'Fight and defeat Alexander at his request in [Crumbling Farum Azula](https://eldenring.wiki.fextralife.com/Crumbling+Farum+Azula).',
      zone: Zone.FARUM_AZULA,
    },
  ],
  failureConditions: [
    "Failing to do the first step of Alexander's quest will lock you of of completing the questline. Alexander will be locked to Radahn's arena.",
  ],
}
