import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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
          <h1 className="title is-3 has-text-link mb-4">Conseil & études techniques</h1>
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
              <figure className="image is-4by3" style={{ position: 'relative' }}>
                <Image
                  src="/images/etude_realisation/image5.jpg"
                  alt="Conseil technique"
                  fill
                  style={{ borderRadius: '8px', objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </figure>
            </div>
          </div>

          {/* Nouvelle section ajoutée */}
          <div className="content mt-6">
            <p>
              À partir du cahier des charges, une équipe prend en charge l’ensemble : <strong>ETUDE - RÉALISATION - INSTALLATION SUR SITE</strong> dans les domaines de la mécanique, de la tuyauterie, de l’hydraulique, de l’électricité et des automatismes industriels.
            </p>
            <p>
              Le bureau d’études, équipé d’outils CAO/DAO, garantit une prestation de qualité en faisant preuve d’imagination, de rigueur et de professionnalisme.
            </p>
            <p>
              <strong>Un partenaire indiqué pour une maîtrise globale du projet</strong>
            </p>

            <div className="columns mt-4">
              <div className="column">
                <h2 className="title is-5 has-text-link">Études</h2>
                <ul>
                  <li>• Conception ou modification de machines spéciales ou équipements industriels,</li>
                  <li>• Développement de process en partenariat avec le client,</li>
                  <li>• Constitution de dossiers techniques,</li>
                  <li>• Mise à jour de plans et documentations techniques,</li>
                  <li>• Audit énergétique.</li>
                </ul>
              </div>

              <div className="column">
                <h2 className="title is-5 has-text-link">Réalisation</h2>
                <ul>
                  <li>• Fabrication d’ensembles mécaniques,</li>
                  <li>• Remise en état de machines ;</li>
                  <li>• Montage et essais de machines spéciales ;</li>
                  <li>• Régulation industrielle : TOR, MLI, PID et fuzzy ;</li>
                  <li>• Installation des machines tournantes (Pompes, Compresseurs, Turbines…) ;</li>
                  <li>• Installation de tout type de convoyeur et élévateur ;</li>
                  <li>• Alignement d’arbre.</li>
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
