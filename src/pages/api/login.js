import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

const adminEmail = 'admin@solutum.com'
// Hashed version of 'admin123'
const hashedPassword = '$2b$10$9F1TEI3KHkjHyat8biCE3eCDGaXW7Jr/8nGHRLPyUUNB5VcmFoTqi'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }

  const { email, password } = req.body

  if (email !== adminEmail) {
    return res.status(401).json({ message: 'Email incorrect' })
  }

  try {
    const isMatch = await bcrypt.compare(password, hashedPassword)
    if (!isMatch) {
      return res.status(401).json({ message: 'Mot de passe incorrect' })
    }

    const token = jwt.sign({ email }, 'solutumSecret', { expiresIn: '1h' })

    res.setHeader('Set-Cookie', serialize('auth', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      path: '/',
      maxAge: 3600
    }))

    return res.status(200).json({ message: 'Connexion réussie' })
  } catch (err) {
    console.error('Erreur serveur :', err)
    return res.status(500).json({ message: 'Erreur serveur interne' })
  }
}
