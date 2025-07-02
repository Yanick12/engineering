import Head from 'next/head'
import Footer from '../components/Footer'
import { useState } from 'react'
import Navbar from '../components/Navbar'
export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // envoyer les données vers un backend Node.js ou un service (formspree, nodemailer, etc.)
    setSubmitted(true)
  }
  return (
    <>
      <Head>
        <title>Contact - Solutum Engineering</title>
      </Head>
      <Navbar/>
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
                <p><strong>Téléphone :</strong> +237 620 793 700</p>
                <p><strong>Téléphone :</strong> +237 699599682</p>
                <p><strong>Email :</strong>bitjokalaurent@gmail.com</p>
                <h2 className="title is-5 mt-5">Localisation</h2>
                
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.635709587643!2d9.738237274052809!3d4.094331946617687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610e0bcd0fe00f%3A0x27cddf4fc426fff6!2sEcole%20Publique%20de%20bonamoussadi%2C%20Douala!5e0!3m2!1sfr!2scm!4v1751450805890!5m2!1sfr!2scm"
  width="100%"
  height="450"
  style={{ border: 0, borderRadius: '8px' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
