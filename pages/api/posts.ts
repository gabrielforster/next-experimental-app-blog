//make a api route to create a post
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const {title, slug, body, author } = req.body

    const result = await prisma.post.create({
      data: {
        title,
        slug,
        body,
        author,
      }
    })

    res.status(202).json(result)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}
