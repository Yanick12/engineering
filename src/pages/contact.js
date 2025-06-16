import Head from 'next/head'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici tu peux envoyer les données vers un backend Node.js ou un service (formspree, nodemailer, etc.)
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>Contact - Solutum Engineering</title>
      </Head>

      <section className="section has-background-white py-6">
        <div className="container">
          <h1 className="title is-3 has-text-primary has-text-centered mb-5">Nous contacter</h1>

          <div className="columns is-variable is-8">
            {/* Formulaire */}
            <div className="column is-6">
              {submitted ? (
                <div className="notification is-success">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label className="label">Nom</label>
                    <div className="control">
                      <input className="input" type="text" name="name" value={form.name} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input className="input" type="email" name="email" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea className="textarea" name="message" value={form.message} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="control">
                    <button className="button is-primary" type="submit">Envoyer</button>
                  </div>
                </form>
              )}
            </div>
            

            {/* Infos de contact */}
            <div className="column is-6">
              <div className="content">
                <h2 className="title is-5">Coordonnées</h2>
                <p><strong>Adresse :</strong> Ngaoundéré, Cameroun</p>
                <p><strong>Téléphone :</strong> +237 698 08 21 30</p>
                <p><strong>Email :</strong> contact@solutum-engineering.com</p>

                <h2 className="title is-5 mt-5">Localisation</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!..." // remplace avec l’URL correcte si connue
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
