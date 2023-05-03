import { Npc, NpcId, Zone } from '@src/types'
import { v4 as uuid } from 'uuid'

export const blaidd: Npc = {
  id: NpcId.BLAIDD,
  name: 'Blaidd the Half-Wolf',
  description:
    "Blaidd's purpose as a shadow is to help Ranni. You will aid him in whatever needs to be done.",
  link: 'https://eldenring.wiki.fextralife.com/Blaidd',
  image: {
    src: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/blaidd-wolfman-location2-npc-elden-ring-wiki-300px-min.jpeg',
    alt: 'Blaidd the Half-Wolf',
  },
  rewards: [
    {
      id: uuid(),
      name: 'Gesture: Finger Snap',
      link: 'https://eldenring.wiki.fextralife.com/Gestures',
    },
    {
      id: uuid(),
      name: '(Option to buy the) Carian Filigreed Crest',
      link: 'https://eldenring.wiki.fextralife.com/Carian+Filigreed+Crest',
    },
    {
      id: uuid(),
      name: "Blaidd's Armor",
      link: "https://eldenring.wiki.fextralife.com/Blaidd's+Armor",
    },
    {
      id: uuid(),
      name: "Blaidd's Gauntlets",
      link: "https://eldenring.wiki.fextralife.com/Blaidd's+Gauntlets",
    },
    {
      id: uuid(),
      name: "Blaidd's Greaves",
      link: "https://eldenring.wiki.fextralife.com/Blaidd's+Greaves",
    },
    {
      id: uuid(),
      name: 'Royal Greatsword',
      link: 'https://eldenring.wiki.fextralife.com/Royal+Greatsword',
    },
    {
      id: uuid(),
      name: 'Somber Smithing Stone [2]',
      link: 'https://eldenring.wiki.fextralife.com/Somber+Smithing+Stone+(2)',
    },
    {
      id: uuid(),
      name: "Bloodhound's Fang",
      link: "https://eldenring.wiki.fextralife.com/Bloodhound's+Fang",
    },
  ],
  steps: [
    {
      id: 1,
      optional: false,
      description:
        'When wandering near the [Mistwood Ruins](https://eldenring.wiki.fextralife.com/Mistwood+Ruins) you will hear a wolf howling.',
      zone: Zone.LIMGRAVE,
    },
    {
      id: 2,
      optional: false,
      description:
        'Return to [Kalé](https://eldenring.wiki.fextralife.com/Merchant+Kal%C3%A9) at the Curch of Elleh and ask him about the howling.',
      zone: Zone.LIMGRAVE,
      note: 'This is where you will learn the Finger Snap Gesture.',
    },
    {
      id: 3,
      optional: false,
      description:
        'Return to the Mistwood Ruins and use the Finger Snap Gesture near the high tower to summon Blaidd.',
      zone: Zone.LIMGRAVE,
    },
    {
      id: 4,
      optional: false,
      description:
        'Talk to Blaidd at the Mistwood Ruins to learn that he is looking for a man named Darriwil.',
      zone: Zone.LIMGRAVE,
    },
    {
      id: 5,
      optional: true,
      description:
        'Either summon Blaidd for the fight against [Darriwil](https://eldenring.wiki.fextralife.com/Bloodhound+Knight+Darriwil) at the [Forlorn Hound Evergoal](https://eldenring.wiki.fextralife.com/Forlorn+Hound+Evergaol) or talk to him after defeating Darriwil.',
      zone: Zone.LIMGRAVE,
    },
    {
      id: 6,
      optional: false,
      description:
        "Exhaust Blaidd's dialogue outside the Forlorn Hound Evergoal.",
      zone: Zone.LIMGRAVE,
      note: "Whether Darriwil was defeated with or without Blaidd's help, Blaidd will reward you with the Somber Smithing Stone [2]. This will also unlock the Carian Filigreed Crest for purchase in [Iji](https://eldenring.wiki.fextralife.com/War+Counselor+Iji)'s shop.",
    },
    {
      id: 7,
      optional: true,
      description: 'Meet Iji and let him know Blaidd sent you.',
      zone: Zone.LIURNIA,
      note: 'You will now be able to buy the Carian Filigreed Crest from Iji.',
    },
    {
      id: 8,
      optional: false,
      description:
        "Take on [Ranni the Witch](https://eldenring.wiki.fextralife.com/Ranni+the+Witch)'s quest and agree to meet Blaidd in [Siofra River](https://eldenring.wiki.fextralife.com/Siofra+River).",
      zone: Zone.LIURNIA,
    },
    {
      id: 9,
      optional: false,
      description: 'Meet Blaidd in Siofra River and exhaust his dialog.',
      zone: Zone.SIOFRA_RIVER,
    },
    {
      id: 10,
      optional: false,
      description:
        "Go to [Preceptor Seluvis](https://eldenring.wiki.fextralife.com/Preceptor+Seluvis) and receive [Seluvis's Introduction](https://eldenring.wiki.fextralife.com/Seluvis's+Introduction).",
      zone: Zone.LIURNIA,
    },
    {
      id: 11,
      optional: false,
      description:
        "Go to [Sorceress Sellen](https://eldenring.wiki.fextralife.com/Sorceress+Sellen) and present Seluvis's Introductions to her.",
      zone: Zone.LIMGRAVE,
    },
    {
      id: 12,
      optional: false,
      description:
        'Report your findings back to Blaidd in Siofra River after which he will request you participate in a festival at [Redmane Castle](https://eldenring.wiki.fextralife.com/Redmane+Castle).',
      zone: Zone.SIOFRA_RIVER,
    },
    {
      id: 13,
      optional: false,
      description:
        'After defeating Radahn speak with Blaidd near the Wailing Dunes site of grace.',
      zone: Zone.CAELID,
    },
    {
      id: 14,
      optional: true,
      description:
        "Speak to Iji about Blaidd's imprisonment in the Forlorn Hound Evergoal.",
      zone: Zone.LIURNIA,
    },
    {
      id: 15,
      optional: false,
      description: "Defeat Blaidd at the entrance of Ranni's Rise.",
      zone: Zone.LIURNIA,
      note: "This will mark the end of the quest and reward Blaidd's armor and sword.",
    },
  ],
}
