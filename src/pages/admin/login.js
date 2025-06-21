import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AdminLogin() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()
  setError('')

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials:'include',
      body: JSON.stringify({ email: form.email, password: form.password })
    })

    console.log('Status:', res.status)
    if (res.ok) {
      console.log('Connexion réussie')
      router.push('/admin')
    } else {
      const data = await res.json()
      setError(data.message || `Erreur ${res.status}`)
    }
  } catch (err) {
    setError('Erreur réseau ou serveur')
  }
}


  return (
    <>
      <Head>
        <title>Connexion Admin - Solutum Engineering</title>
      </Head>

      <Navbar/>

      <section className="section has-background-light" style={{ minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: '400px', marginTop: '5rem' }}>
          <div className="box">
            <h1 className="title is-4 has-text-centered has-text-primary">Espace administrateur</h1>

            {error && <p className="notification is-danger is-light">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="field">
                <label className="label">Mot de passe</label>
                <div className="control">
                  <input className="input" type="password" name="password" value={form.password} onChange={handleChange} required />
                </div>
              </div>

              <div className="control mt-4">
                <button className="button is-primary is-fullwidth" type="submit">Connexion</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
