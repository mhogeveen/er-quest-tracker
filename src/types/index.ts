export type Npc = {
  id: NpcId
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

export enum NpcId {
  ALEXANDER = 'alexander',
  BERNAHL = 'bernahl',
  BLAIDD = 'blaidd',
  BOC = 'boc',
  BOGGART = 'boggart',
  CORHYN = 'corhyn',
  D_HUNTER = 'd-hunter',
  D_BEHOLDER = 'd-beholder',
  DIALLOS = 'diallos',
  DUNG_EATER = 'dung-eater',
  ENSHA = 'ensha',
  FIA = 'fia',
  GIDEON = 'gideon',
  GOSTOC = 'gostoc',
  GOWRY = 'gowry',
  GURRANQ = 'gurranq',
  HYETTA = 'hyetta',
  IRINA = ' irina',
  JAR_BAIRN = 'jar-bairn',
  KENNETH = 'kenneth',
  LATENNA = 'latenna',
  MILLICENT = 'millicent',
  NEPHELI = 'nepheli',
  PATCHES = 'patches',
  RANNI = 'ranni',
  RODERIKA = 'roderika',
  ROGIER = 'rogier',
  RYA = 'rya',
  SELLEN = 'sellen',
  SELUVIUS = 'seluvius',
  SHABRIRI = 'shabriri',
  TANITH = 'tanith',
  THOPS = 'thops',
  VARRE = 'varre',
  WANDERING_ARTISTS_SPIRIT = 'wandering-artists-spirit',
  YURA = 'yura',
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
  LANDS_BETWEEN = 'The Lands Between',
  LEYNDELL = 'Leyndell, Royal Capital',
  LEYNDELL_ASHEN = 'Leyndell, Ashen Capital',
  LIMGRAVE = 'Limgrave',
  LIURNIA = 'Liurnia of the Lakes',
  MOHGWYN_PALACE = 'Moghwyn Palace',
  MOUNT_GELMIR = 'Mount Gelmir',
  MOUNTAINTOP = 'Mountaintop of the Giants',
  NOKRON = 'Nokron, Eternal City',
  RAYA_LUCARIA = 'Academy of Raya Lucaria',
  ROUNDTABLE_HOLD = 'Roundtable Hold',
  SIOFRA_AQUADUCT = 'Siofra Aquaduct',
  SIOFRA_RIVER = 'Siofra River',
  STORMHILL = 'Stormhill',
  STORMVEIL = 'Stormveil Castle',
  WEEPING_PENINSULA = 'Weeping Peninsula',
}
