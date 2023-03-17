export type Npc = {
  id: string
  name: string
  description: string
  image?: {
    src?: string
    alt?: string
  }
  steps: Step[]
}

export type Step = {
  id: string
  optional: boolean
  description: string
  zone: Zone
}

export enum Zone {
  LIMGRAVE = 'Limgrave',
  LIURNIA = 'Liurnia of the Lakes',
  CAELID = 'Caelid',
  ALTUS = 'Altus Plateau',
  MOUNT_GELMIR = 'Mount Gelmir',
  MOUNTAINTOP = 'Mountaintop of the Giants',
  HALIGTREE = "Miquella's Haligtree",
  FARUM_AZULA = 'Crumbling Farum Azula',
  WEEPING_PENINSULA = 'Weeping Peninsula',
  STORMHILL = 'Stormhill',
  STORMVEIL = 'Stormveil Castle',
  RAYA_LUCARIA = 'Academy of Raya Lucaria',
  AINSEL_RIVER = 'Ainsel River',
  SIOFRA_RIVER = 'Siofra River',
  NOKRON = 'Nokron, Eternal City',
  SIOFRA_AQUADUCT = 'Siofra Aquaduct',
  DEEPROOT_DEPTHS = 'Deeproot Depths',
  CAPITAL_OUTSKIRTS = 'Captial Outskirts',
  LAKE_OF_ROT = 'Lake of Rot',
  DRAGONBARROW = 'Dragonbarrow',
  LEYNDELL = 'Leyndell, Royal Capital',
  LEYNDELL_ASHEN = 'Leyndell, Ashen Capital',
  FORBIDDEN_LANDS = 'Forbidden Lands',
  CONSECRATED_SNOWFIELDS = 'Consecrated Snowfields',
  MOHGWYN_PALACE = 'Moghwyn Palace',
}
