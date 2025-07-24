// pages/api/contact.js
import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nom, sujet, message } = req.body

    try {
      const contact = await prisma.contact.create({
        data: {
          nom,
          sujet,
          message,
          date_reception: new Date(),
          statut: 'non lu',
        },
      })
      res.status(200).json(contact)
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la soumission' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Méthode ${req.method} non autorisée`)
  }
}
