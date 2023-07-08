import { NextResponse } from 'next/server'
import npcs from '@data'

export const GET = async () => NextResponse.json(npcs)
