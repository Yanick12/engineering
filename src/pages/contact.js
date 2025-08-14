//import { supabase } from '../lib/supabaseClient'  // adapte le chemin si besoin
import Head from 'next/head';
//import Link from 'next/link';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { supabase } from '../../lib/supabaseClient'
export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    
    // Insert les données dans Supabase
    const { error } = await supabase
      .from('messages')
      .insert([{ name: form.name, email: form.email, message: form.message }])

    if (error) {
      console.error('Erreur lors de l\'envoi :', error)
      setErrorMsg('Une erreur est survenue lors de l\'envoi, veuillez réessayer.')
    } else {
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <>
      <Head>
        <title>Contact - Solutum Engineering</title>
      </Head>
      <Navbar/>
      <section className="section has-background-white py-6">
        <div className="container">
          <h1 className="title is-3 has-text-link has-text-centered mb-5">Nous contacter</h1>

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

                  {errorMsg && <p className="has-text-danger">{errorMsg}</p>}

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
                {/* Infos supplémentaires */}
      <div style={{ flex: '1 1 200px', minWidth: 180 }}>
        <h3 className="subtitle is-6 has-text-weight-semibold">Adresses spécifiques :</h3>
        <ul>
          <li>📍 Douala Bonamoussadi (face école publique)</li>
          <li>📍 Ngaoundéré (à côté de l&#39;école La Grâce)</li>
        </ul>
      </div>
                
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1035.3510056609143!2d9.740730043598896!3d4.0940198293128285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1751541137338!5m2!1sfr!2scm"
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
