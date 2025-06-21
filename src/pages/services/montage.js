import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function MontageIndustriel() {
  return (
    <>
      <Head>
        <title>Montage Industriel - Solutum Engineering</title>
      </Head>
      <Navbar/>

      <section className="section has-background-white py-6">
        <div className="container">
          <h1 className="title is-3 has-text-primary mb-4">Montage Industriel</h1>
          <p className="subtitle is-5 mb-5">
            Nous assurons l’installation complète de vos équipements industriels avec rigueur, sécurité et expertise.
          </p>

          <div className="columns is-vcentered is-variable is-6">
            <div className="column is-half">
              <p className="content is-medium">
                Grâce à une équipe spécialisée et des outils adaptés, Solutum Engineering prend en charge le montage de
                structures mécaniques, électriques et automatisées pour les installations industrielles.
              </p>
              <ul className="content">
                <li>✔ Préparation et organisation de chantier</li>
                <li>✔ Assemblage et fixation d’équipements</li>
                <li>✔ Raccordements électriques et pneumatiques</li>
                <li>✔ Tests, mise en service, et suivi qualité</li>
              </ul>
              <Link href="/contact" className="button is-primary is-medium mt-4">
                Demander un devis
              </Link>
            </div>

            <div className="column is-half">
              <figure className="image is-4by3">
                <img src="/images/montage/image3.jpg" alt="Montage industriel Solutum" style={{ borderRadius: '8px' }} />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
