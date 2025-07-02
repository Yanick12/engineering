import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/router"

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

    const res = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password
    })

    if (res.ok) {
      router.push("/admin")
    } else {
      setError("Email ou mot de passe incorrect")
    }
  }

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 400 }}>
        <h1 className="title is-4 has-text-centered has-text-primary">Connexion Admin</h1>
        {error && <p className="notification is-danger is-light">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" name="email" type="email" onChange={handleChange} required />
            </div>
          </div>
          <div className="field">
            <label className="label">Mot de passe</label>
            <div className="control">
              <input className="input" name="password" type="password" onChange={handleChange} required />
            </div>
          </div>
          <button className="button is-primary is-fullwidth mt-4">Connexion</button>
        </form>
      </div>
    </div>
  )
}
