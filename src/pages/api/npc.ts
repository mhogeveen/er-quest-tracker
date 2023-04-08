import type { NextApiResponse, NextApiRequest } from 'next'
import npcs from '@src/data'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { id } = request.query
  const npcId = id?.toString() || ''
  const npc = npcs.find((npc) => npc.id === npcId)

  if (!npcId || !npc) {
    const allNpcIds = npcs.map((npc) => npc.id)

    return response
      .status(500)
      .send(
        `npc id "${npcId}" is not valid. Please request a valid npc id: ${allNpcIds.join(
          ', '
        )}`
      )
  }

  return response.status(200).json(npc)
}
