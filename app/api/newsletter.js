// pages/api/newsletter.js
import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body

    try {
      const exists = await prisma.newsletter.findUnique({ where: { email } })
      if (exists) {
        return res.status(400).json({ message: 'Email déjà abonné.' })
      }

      const newSubscriber = await prisma.newsletter.create({
        data: { email }
      })

      return res.status(200).json({ message: 'Merci pour votre abonnement !' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Erreur serveur' })
    }
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
