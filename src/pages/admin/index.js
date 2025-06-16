// pages/admin/index.js
import Head from 'next/head'
import Link from 'next/link'

import { parse } from 'cookie'
import jwt from 'jsonwebtoken'

export async function getServerSideProps({ req }) {
  const cookies = parse(req.headers.cookie || '')
  const token = cookies.auth || null

  try {
    jwt.verify(token, process.env.JWT_SECRET || 'solutumSecret')
    return { props: {} }
  } catch {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false
      }
    }
  }
}


export default function AdminDashboard() {
  return (
    <>
      <Head>
        <title>Admin - Solutum Engineering</title>
      </Head>

      <section className="section has-background-light min-vh-100">
        <div className="container">
          <h1 className="title is-3 has-text-centered has-text-primary">Tableau de bord administrateur</h1>
          <div className="columns is-multiline is-variable is-5 mt-6">
            <div className="column is-4">
              <div className="box has-text-centered">
                <h2 className="title is-5 mb-2">Services</h2>
                <p>Gérer les services proposés par Solutum</p>
                <Link href="/admin/services" className="button is-link is-small mt-3">Accéder</Link>
              </div>
            </div>
            <div className="column is-4">
              <div className="box has-text-centered">
                <h2 className="title is-5 mb-2">Témoignages</h2>
                <p>Ajouter ou modifier les retours clients</p>
                <Link href="/admin/temoignages" className="button is-link is-small mt-3">Accéder</Link>
              </div>
            </div>
            <div className="column is-4">
              <div className="box has-text-centered">
                <h2 className="title is-5 mb-2">Messages</h2>
                <p>Consulter les messages du formulaire de contact</p>
                <Link href="/admin/messages" className="button is-link is-small mt-3">Accéder</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <button
  className="button is-danger is-light mt-5"
  onClick={async () => {
    await fetch('/api/logout')
    window.location.href = '/admin/login'
  }}
>
  Se déconnecter
</button>

    </>
  )
}
