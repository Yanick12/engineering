// pages/admin/index.js
import Head from 'next/head'
import Link from 'next/link'
import { getSession } from 'next-auth/react'

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}

export default function AdminDashboard({ session }) {
  return (
    <>
      <Head>
        <title>Admin - Solutum Engineering</title>
      </Head>

      <section className="section has-background-light min-vh-100">
        <div className="container">
          <h1 className="title is-3 has-text-centered has-text-primary">
            Bienvenue, {session.user.email}
          </h1>

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
    </>
  )
}
