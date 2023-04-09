# Elden Ring Sidequest Tracker

## Getting Started

First, install dependencies:

```bash
pnpm i
```

Second, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Data structures

```tsx
export type Npc = {
  id: string
  name: string
  description: string
  link: string
  image?: {
    src: string
    alt: string
  }
  rewards: Reward[]
  steps: Step[]
  failureConditions?: string[]
}

export type Reward = {
  id: string
  name: string
  amount: number
  link: string
}

export type Step = {
  id: number
  optional: boolean
  description: string
  note?: string
  zone: Zone
}

export enum Zone {
  AINSEL_RIVER = 'Ainsel River',
  ALTUS = 'Altus Plateau',
  CAELID = 'Caelid',
  CAPITAL_OUTSKIRTS = 'Captial Outskirts',
  CONSECRATED_SNOWFIELDS = 'Consecrated Snowfields',
  DEEPROOT_DEPTHS = 'Deeproot Depths',
  DRAGONBARROW = 'Dragonbarrow',
  FARUM_AZULA = 'Crumbling Farum Azula',
  FORBIDDEN_LANDS = 'Forbidden Lands',
  HALIGTREE = "Miquella's Haligtree",
  LAKE_OF_ROT = 'Lake of Rot',
  LEYNDELL = 'Leyndell, Royal Capital',
  LEYNDELL_ASHEN = 'Leyndell, Ashen Capital',
  LIMGRAVE = 'Limgrave',
  LIURNIA = 'Liurnia of the Lakes',
  MOHGWYN_PALACE = 'Moghwyn Palace',
  MOUNT_GELMIR = 'Mount Gelmir',
  MOUNTAINTOP = 'Mountaintop of the Giants',
  NOKRON = 'Nokron, Eternal City',
  RAYA_LUCARIA = 'Academy of Raya Lucaria',
  SIOFRA_AQUADUCT = 'Siofra Aquaduct',
  SIOFRA_RIVER = 'Siofra River',
  STORMHILL = 'Stormhill',
  STORMVEIL = 'Stormveil Castle',
  WEEPING_PENINSULA = 'Weeping Peninsula',
}
```
