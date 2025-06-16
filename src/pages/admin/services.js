import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function AdminServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Montage industriel',
      description: 'Installation et mise en service d’équipements industriels.',
    },
    {
      id: 2,
      title: 'Formation technique',
      description: 'Formations pratiques pour techniciens et ingénieurs.',
    }
  ])

  const [newService, setNewService] = useState({ title: '', description: '' })

  const handleChange = (e) => {
    setNewService({ ...newService, [e.target.name]: e.target.value })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if (newService.title && newService.description) {
      setServices([
        ...services,
        { id: Date.now(), title: newService.title, description: newService.description }
      ])
      setNewService({ title: '', description: '' })
    }
  }

  const handleDelete = (id) => {
    const updated = services.filter(service => service.id !== id)
    setServices(updated)
  }

  return (
    <>
      <Head>
        <title>Admin - Gérer les services</title>
      </Head>

      <section className="section has-background-white py-6">
        <div className="container">
          <h1 className="title is-3 has-text-primary">Gestion des services</h1>

          {/* Formulaire d’ajout */}
          <div className="box">
            <h2 className="title is-5">Ajouter un service</h2>
            <form onSubmit={handleAdd}>
              <div className="field">
                <label className="label">Titre</label>
                <div className="control">
                  <input className="input" type="text" name="title" value={newService.title} onChange={handleChange} required />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea className="textarea" name="description" value={newService.description} onChange={handleChange} required />
                </div>
              </div>
              <div className="control mt-3">
                <button className="button is-primary" type="submit">Ajouter</button>
              </div>
            </form>
          </div>

          {/* Liste des services */}
          <div className="columns is-multiline">
            {services.map((service) => (
              <div key={service.id} className="column is-4">
                <div className="box">
                  <h3 className="title is-6">{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="button is-small is-danger mt-3" onClick={() => handleDelete(service.id)}>
                    Supprimer
                  </button>
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
