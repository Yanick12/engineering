import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function AdminTemoignages() {
  const [temoignages, setTemoignages] = useState([
    {
      id: 1,
      nom: 'Jean Dupont',
      fonction: 'CEO de TechCorp',
      message: 'Solutum Engineering a transformé notre infrastructure IT, avec une efficacité remarquable.'
    }
  ])

  const [newTemoin, setNewTemoin] = useState({ nom: '', fonction: '', message: '' })

  const handleChange = (e) => {
    setNewTemoin({ ...newTemoin, [e.target.name]: e.target.value })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if (newTemoin.nom && newTemoin.message) {
      setTemoignages([
        ...temoignages,
        { id: Date.now(), ...newTemoin }
      ])
      setNewTemoin({ nom: '', fonction: '', message: '' })
    }
  }

  const handleDelete = (id) => {
    const updated = temoignages.filter(t => t.id !== id)
    setTemoignages(updated)
  }

  return (
    <>
      <Head>
        <title>Admin - Témoignages</title>
      </Head>

      <section className="section has-background-white py-6">
        <div className="container">
          <h1 className="title is-3 has-text-primary">Gestion des témoignages</h1>

          {/* Formulaire d’ajout */}
          <div className="box">
            <h2 className="title is-5">Ajouter un témoignage</h2>
            <form onSubmit={handleAdd}>
              <div className="field">
                <label className="label">Nom</label>
                <div className="control">
                  <input className="input" type="text" name="nom" value={newTemoin.nom} onChange={handleChange} required />
                </div>
              </div>

              <div className="field">
                <label className="label">Fonction / Entreprise</label>
                <div className="control">
                  <input className="input" type="text" name="fonction" value={newTemoin.fonction} onChange={handleChange} />
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea className="textarea" name="message" value={newTemoin.message} onChange={handleChange} required />
                </div>
              </div>

              <div className="control mt-3">
                <button className="button is-primary" type="submit">Ajouter</button>
              </div>
            </form>
          </div>

          {/* Liste des témoignages */}
          <div className="columns is-multiline">
            {temoignages.map((t) => (
              <div key={t.id} className="column is-4">
                <div className="box">
                  <h3 className="title is-6">{t.nom}</h3>
                  <p className="is-italic has-text-grey mb-2">{t.fonction}</p>
                  <p>{t.message}</p>
                  <button className="button is-danger is-small mt-3" onClick={() => handleDelete(t.id)}>Supprimer</button>
                </div>
              </div>
            ))}
          </div>

          <Link href="/admin" className="button is-light mt-5">← Retour au tableau de bord</Link>
        </div>
      </section>
    </>
  )
}
