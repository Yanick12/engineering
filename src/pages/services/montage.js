import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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
              

<figure className="image is-4by3" style={{ position: 'relative' }}>
  <Image
    src="/images/montage/image3.jpg"
    alt="Montage industriel Solutum"
    fill
    style={{ borderRadius: '8px', objectFit: 'cover' }}
    sizes="(max-width: 768px) 100vw, 768px"
  />
</figure>

            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-light py-6">
  <div className="container">
    <h2 className="title is-4 has-text-primary mb-4">Notre Expertise en Montage & Transfert Industriel</h2>

    <div className="content mb-5">
      <p>
        <strong>Solutum Engineering</strong> assure le montage global de machines spéciales ou d’installations industrielles complètes.
        Nous réalisons également des transferts de machines, lignes de fabrication, usines ou ateliers complets.
      </p>
      <p>
        <em>Un interlocuteur unique pour une maîtrise globale des prestations.</em>
      </p>
    </div>

    <div className="columns is-variable is-6">
      <div className="column">
        <div className="box has-background-white">
          <h3 className="title is-5 has-text-link">Montage industriel</h3>
          <ul>
            <li>• Mécanique</li>
            <li>• Tuyauterie et chaudronnerie</li>
            <li>• Électricité industrielle et automatisme</li>
            <li>• Hydraulique et pneumatique</li>
          </ul>
        </div>
      </div>
      <div className="column">
        <div className="box has-background-white">
          <h3 className="title is-5 has-text-link">Transfert industriel</h3>
          <ul>
            <li>• Étude du transfert</li>
            <li>• Débranchement et modification des réseaux fluides</li>
            <li>• Démontage, manutention, emballage, stockage et transport</li>
            <li>• Remise en état éventuelle des équipements</li>
            <li>• Remontage et assistance au démarrage</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </>
  )
}
