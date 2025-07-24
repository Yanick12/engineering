import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/admin/login')
      
    }
  }, [])

  return (
    <div className="section">
      <h1 className="title">Panneau de controle</h1>
      <section className="section has-background-light min-vh-100">
        <div className="container">
          <div className="columns is-multiline is-variable is-5 mt-6">
             

          
          
            <div className="column is-4">
              <div className="box has-text-centered">
                <h2 className="title is-5 mb-2">services</h2>
                <p>ajouter ou modifier le contenu du blog</p>
                <Link href="/admin/messages" className="button is-link is-small mt-3">Accéder</Link>
              </div>
            </div>
            <div className="column is-4">
              <div className="box has-text-centered">
                <h2 className="title is-5 mb-2">temoignages</h2>
                <p>ajouter ou modifier le contenu du blog</p>
                <Link href="/admin/messages" className="button is-link is-small mt-3">Accéder</Link>
              </div>
            </div>

            <div className="column is-4">
              <div className="box has-text-centered">
                <h2 className="title is-5 mb-2">messages</h2>
                <p>ajouter ou modifier le contenu du blog</p>
                <Link href="/admin/messages" className="button is-link is-small mt-3">Accéder</Link>
              </div>
            </div>

            <div className="column is-4">
              <div className="box has-text-centered">
                <h2 className="title is-5 mb-2">Gestion du Blog</h2>
                <p>ajouter ou modifier le contenu du blog</p>
                <Link href="/admin/messages" className="button is-link is-small mt-3">Accéder</Link>
              </div>
            </div>
            <div className="column is-4">
              <div className="box has-text-centered">
                <h2 className="title is-5 mb-2">consulter la newletter</h2>
                <p>Consulter les messages du formulaire de contact</p>
                <Link href="/admin/messages" className="button is-link is-small mt-3">Accéder</Link>
              </div>
            </div>
          </div>
          

          <div className="has-text-centered mt-6">
            <button
              className="button is-danger is-light"
              onClick={async () => {
                await fetch('/api/auth/signout')
                window.location.href = '/admin/login'
              }}
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
