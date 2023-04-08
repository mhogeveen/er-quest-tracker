import { NextResponse } from 'next/server'
import npcs from '../../../data'
import { Npc } from '../../../types'

export async function GET() {
  const npcsArray: Npc[] = []
  npcs.forEach((value) => npcsArray.push(value))

  return NextResponse.json(npcsArray)
}
