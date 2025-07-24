// pages/api/temoignages.js
import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const temoignage = await prisma.temoignage.findMany({
      orderBy: { datePsublication: 'desc' },
    })
    res.status(200).json(temoignage)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Méthode ${req.method} non autorisée`)
  }
}
