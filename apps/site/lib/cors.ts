import { NextApiRequest, NextApiResponse } from 'next'

export function setupCors(req: NextApiRequest, res: NextApiResponse) {
  const origin = req.headers.origin

  if (
    typeof origin === 'string' &&
    (origin === 'tamagui.dev' ||
      origin.endsWith('.tamagui.dev') ||
      origin === 'stripe.com' ||
      origin.endsWith('.stripe.com') ||
      origin === 'localhost:1421')
  ) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Credentials', 'true')
  }
}
