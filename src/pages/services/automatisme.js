import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Automatisme() {
  return (
    <>
      <Head>
        <title>Supervision & Automatisation - Solutum Engineering</title>
      </Head>
      <Navbar/>

      <section className="section has-background-white py-6">
        <div className="container">
          <h1 className="title is-3 has-text-link mb-4">Supervision & automatisation</h1>
          <p className="subtitle is-5 mb-5">
            Optimisez le pilotage de vos installations industrielles grâce à nos solutions d’automatisation sur mesure.
          </p>

          <div className="columns is-vcentered is-variable is-6">
            <div className="column is-half">
              <p className="content is-medium">
                Nous développons des systèmes de supervision adaptés à vos équipements et processus : SCADA, interfaces HMI,
                automates programmables (API), et communication industrielle.
              </p>
              <ul className="content">
                <li>✔ Conception de systèmes SCADA</li>
                <li>✔ Programmation d’automates (Siemens, Schneider...)</li>
                <li>✔ Interfaces homme-machine ergonomiques</li>
                <li>✔ Maintenance et optimisation</li>
              </ul>
              <Link href="/contact" className="button is-primary is-medium mt-4">
                Parler à un expert automatisme
              </Link>
            </div>

            <div className="column is-half">
              <figure className="image is-4by3" style={{ position: 'relative' }}>
                <Image
                  src="/images/instrument_reaseaux_industriels/image13.jpg"
                  alt="Supervision et automatisation"
                  fill
                  style={{ borderRadius: '8px', objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </figure>
            </div>
          </div>

          {/* Nouvelle section intégrée */}
          <section className="section mt-6 py-5 px-4 box has-background-light custom-shadow fade-in">
            <h2 className="title is-4 has-text-primary mb-4 has-text-centered">
              Mise en œuvre et ingénierie des automatismes et installations électriques
            </h2>

            <div className="columns is-multiline">
              <div className="column is-half">
                <h3 className="title is-5 has-text-link mb-3">Automatismes et installations</h3>
                <ul className="content has-text-dark">
                  <li>• Mise en œuvre des automates (API, APIdS et PAC) des grandes marques de l’industrie (Siemens, Schneider, ABB, HoneyWell, Allen Bradley, …)</li>
                  <li>• Régulation industrielle : par régulateurs (TOR, MLI, PID) et centrale d’acquisition</li>
                  <li>• Réalisation des armoires (TGBT/MCC) et coffrets</li>
                  <li>• Installation de parafoudre et des batteries de condensateurs (correction du cosinus phi)</li>
                  <li>• Installation/remplacement des transformateurs industriels et cellules de protection</li>
                  <li>• Installation, contrôle-commande des moteurs/machines électriques</li>
                  <li>• Installation des générateurs électriques et groupes électrogènes</li>
                  <li>• Applications de contrôle commande avancée : Pompes, ventilateurs, compresseurs, convoyeurs, transporteurs, broyeurs, presses à injection, machines de conditionnement, etc.</li>
                </ul>
              </div>

              <div className="column is-half">
                <h3 className="title is-5 has-text-link mb-3">Études</h3>
                <ul className="content has-text-dark">
                  <li>• Ingénierie pour les automatismes</li>
                  <li>• Réalisation des schémas électriques (Autocad, Shemaplic, SeeElectrical, ...)</li>
                  <li>• Étude et dimensionnement des transformateurs, moteurs électriques et des protections</li>
                  <li>• Synchronisation avec optimisation énergétique des générateurs avec le réseau principal</li>
                  <li>• Mise en place de réseau d’éclairage public</li>
                  <li>• Étude et réalisation des postes d’installations électriques HTA/HTB, HTA/BT</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .custom-shadow {
          box-shadow: 0 8px 20px rgba(99, 99, 99, 0.1);
          border-radius: 12px;
          transition: box-shadow 0.3s ease;
        }
        .custom-shadow:hover {
          box-shadow: 0 12px 30px rgba(99, 99, 99, 0.18);
        }
        .fade-in {
          animation: fadeInAnimation 1s ease forwards;
          opacity: 0;
        }
        @keyframes fadeInAnimation {
          to {
            opacity: 1;
          }
        }
        ul.content li {
          margin-bottom: 0.75rem;
          line-height: 1.5;
          font-weight: 500;
          position: relative;
          padding-left: 1.2em;
        }
        ul.content li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #3273dc; /* couleur bleue Bulma */
          font-weight: bold;
        }
      `}</style>
    </>
  )
}
