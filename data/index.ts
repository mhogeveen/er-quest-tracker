import { Npc } from '../types'
import { gideon } from './gideon'
import { latenna } from './latenna'

const npcs: Map<string, Npc> = new Map([
  [gideon.id, gideon],
  [latenna.id, latenna],
])

export default npcs
