import { NextResponse, NextRequest } from 'next/server'
import npcs from '../../../data'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const npcId = searchParams.get('id')
  const npcExists = npcs.get(npcId || '')

  if (!npcId || !npcExists) {
    const allNpcIds: string[] = []
    npcs.forEach((_, key) => allNpcIds.push(key))

    return new NextResponse(
      `npc id "${npcId}" is not valid. Please request a valid npc id: ${allNpcIds.join(
        ', '
      )}`,
      {
        status: 500,
        statusText: 'Internal Server Error',
      }
    )
  }

  const npc = npcs.get(npcId)
  return NextResponse.json(npc)
}
