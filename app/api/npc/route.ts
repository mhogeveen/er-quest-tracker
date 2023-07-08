import { NextResponse, NextRequest } from 'next/server'
import npcs from '@data'

export const GET = async (request: NextRequest) => {
  const id = request.nextUrl.searchParams.get('id')
  const npc = npcs.find((npc) => npc.id === id)

  if (!id || !npc) {
    const allNpcIds = npcs.map((npc) => npc.id)
    return NextResponse.json(
      {
        error: 'Invalid id provided',
        message: `Npc id '${id}' is not valid. Please request a valid npc id: ${allNpcIds.join(
          ', '
        )}`,
      },
      { status: 401 }
    )
  }

  return NextResponse.json(npc)
}
