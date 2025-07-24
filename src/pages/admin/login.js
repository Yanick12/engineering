'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password_hash }),
      })

      const data = await res.json()
      if (!res.ok) return setError(data.message)

      localStorage.setItem('token', data.token)
      router.push('/admin/dashboard')
    } catch (err) {
      setError('Oups! Erreur lors de la connexion')
    }
  }

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 400 }}>
        <h1 className="title has-text-centered">Connexion Admin</h1>
        <form onSubmit={handleLogin}>
          <div className="field">
            <label className="label">Email</label>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="field">
            <label className="label">Mot de passe</label>
            <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p className="has-text-danger">{error}</p>}
          <button className="button is-primary is-fullwidth mt-4">Se connecter</button>
        </form>
      </div>
    </div>
  )
}
