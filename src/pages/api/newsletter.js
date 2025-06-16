// src/pages/api/newsletter.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Adresse email invalide.' });
    }

    // Tu peux ajouter ici un enregistrement dans une base de données plus tard
    console.log(`Nouvelle inscription : ${email}`);

    return res.status(200).json({ message: 'Inscription réussie.' });
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).json({ message: `Méthode ${req.method} non autorisée.` });
}
