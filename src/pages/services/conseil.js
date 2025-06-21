import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

import Footer from '../../components/Footer'

export default function Conseil() {
  return (
    <>
      <Head>
        <title>Conseil & Études - Solutum Engineering</title>
      </Head>

      <Navbar/>

      <section className="section has-background-white py-6">
        <div className="container">
          <h1 className="title is-3 has-text-primary mb-4">Conseil & études techniques</h1>
          <p className="subtitle is-5 mb-5">
            Nous vous accompagnons dans vos choix stratégiques avec des études fiables, adaptées et orientées résultats.
          </p>

          <div className="columns is-vcentered is-variable is-6">
            <div className="column is-half">
              <p className="content is-medium">
                Notre pôle ingénierie réalise des études techniques de faisabilité, audits industriels et diagnostics pour
                vos projets complexes. Objectif : performance et rentabilité.
              </p>
              <ul className="content">
                <li>✔ Études de faisabilité & dimensionnement</li>
                <li>✔ Audit de performance</li>
                <li>✔ Conseil en transformation industrielle</li>
                <li>✔ Rédaction de cahiers des charges techniques</li>
              </ul>
              <Link href="/contact" className="button is-primary is-medium mt-4">
                Discuter avec un consultant
              </Link>
            </div>

            <div className="column is-half">
              <figure className="image is-4by3">
                <img src="/images/etude_realisation/image5.jpg" alt="Conseil technique" style={{ borderRadius: '8px' }} />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
