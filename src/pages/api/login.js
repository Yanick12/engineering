import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

const adminEmail = 'admin@solutum.com'
// Hash bcrypt du mot de passe "admin123"
const hashedPassword = '$2b$10$9F1TEI3KHkjHyat8biCE3eCDGaXW7Jr/8nGHRLPyUUNB5VcmFoTqi'

export default async function handler(req, res) {``
  if (req.method !== 'POST') return res.status(405).json({ message: 'Méthode non autorisée' })

  const { email, password } = req.body

  console.log('Email reçu:', email)
console.log('Mot de passe reçu:', password)


  // Vérification email
  if (email !== adminEmail) {
    return res.status(401).json({ message: 'Email incorrect' })
  }

  // Vérification mot de passe
  //const isMatch = await bcrypt.compare(password, hashedPassword)
  if (!isMatch) {
    return res.status(401).json({ message: 'Mot de passe incorrect' })
  }

  // Création du token JWT (expire en 1h)
  const token = jwt.sign({ email }, process.env.JWT_SECRET || 'solutumSecret', { expiresIn: '1h' })

  // Création cookie sécurisé
  res.setHeader('Set-Cookie', serialize('auth', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 3600
  }))

  return res.status(200).json({ message: 'Connexion réussie' })
}
