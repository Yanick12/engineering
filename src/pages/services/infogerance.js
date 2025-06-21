import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

import Footer from '../../components/Footer'

export default function Infogerance() {
  return (
    <>
      <Head>
        <title>Infogérance - Solutum Engineering</title>
      </Head>

      <Navbar/>

      <section className="section has-background-white py-6">
        <div className="container">
          <h1 className="title is-3 has-text-primary mb-4">Infogérance & assistance technique</h1>
          <p className="subtitle is-5 mb-5">
            Un support technique réactif, fiable et sur mesure pour garantir la continuité de vos opérations industrielles.
          </p>

          <div className="columns is-vcentered is-variable is-6">
            <div className="column is-half">
              <p className="content is-medium">
                Solutum assure la gestion, la surveillance et la maintenance de vos infrastructures techniques. Un accompagnement
                complet allant du diagnostic au dépannage sur site ou à distance.
              </p>
              <ul className="content">
                <li>✔ Support technique 24/7</li>
                <li>✔ Maintenance préventive et corrective</li>
                <li>✔ Assistance à distance ou sur site</li>
                <li>✔ Monitoring de systèmes critiques</li>
              </ul>
              <Link href="/contact" className="button is-primary is-medium mt-4">
                Demander une assistance
              </Link>
            </div>

            <div className="column is-half">
              <figure className="image is-4by3">
                <img src="/images/etudes/image11.jpg" alt="Infogérance" style={{ borderRadius: '8px' }} />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
