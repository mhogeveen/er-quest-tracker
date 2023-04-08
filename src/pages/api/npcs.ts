import type { NextApiRequest, NextApiResponse } from 'next'
import npcs from '@src/data'

export default function handler(_: NextApiRequest, response: NextApiResponse) {
  return response.status(200).json(npcs)
}
