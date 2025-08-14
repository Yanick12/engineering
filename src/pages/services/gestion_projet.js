// pages/services/gestion_projet.js

import Head from 'next/head'
import Realisationpopup from '../../components/Realisationpopup'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function GestionProjet() {
  return (
    <>
      <Head>
        <title>Gestion de projets - Solutum Engineering</title>
        <meta name="description" content="Découvrez nos solutions de gestion de projets industriels, de la planification à l'exécution." />
      </Head>

      <Navbar />

      <section className="hero is-medium has-background-light">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2 has-text-link">Gestion de projets</h1>
            <p className="subtitle is-5 mt-3">
              Une approche rigoureuse pour garantir le succès de vos projets industriels.
            </p>
          </div>
        </div>
      </section>

      <section className="section has-background-white">
        <div className="container">
          <div className="columns is-vcentered is-variable is-8">
            <div className="column is-6">
              <h2 className="title is-4 has-text-link">De l&#39;étude à la réalisation</h2>
              <p className="mb-4" style={{ textAlign: 'justify' }}>
                Notre approche de gestion de projets combine méthodologie, expertise technique et innovation. Chaque projet est piloté avec des outils modernes de planification, un suivi rigoureux des délais et des coûts, et une communication constante avec nos clients.
              </p>
              <ul>
                <li>✅ Étude de faisabilité technique et financière</li>
                <li>✅ Planification des étapes et ressources</li>
                <li>✅ Coordination des intervenants</li>
                <li>✅ Suivi qualité, sécurité et environnement</li>
                <li>✅ Livraison et accompagnement post-projet</li>
              </ul>
            </div>
            <Realisationpopup/>

            <div className="column is-6">
              <figure className="image is-4by3">
                <Image
                  src="/images/gestion_de_projet/nosMission1.jpg"
                  alt="Gestion de projet industriel"
                  width={800}
                  height={600}
                  style={{ borderRadius: '10px' }}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-light">
        <div className="container">
          <h2 className="title is-4 has-text-centered has-text-primary">Des outils modernes de gestion</h2>
          <p className="has-text-centered mb-6" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'justify' }}>
            Nous utilisons des plateformes numériques pour assurer un pilotage optimal : suivi en temps réel, gestion documentaire centralisée, indicateurs de performance visuels, et rapports automatisés.
          </p>

          <div className="columns is-variable is-6">
            <div className="column is-4 has-text-centered">
              <span className="icon is-large has-text-info">
                <i className="fas fa-project-diagram fa-3x"></i>
              </span>
              <h3 className="title is-5 mt-2">Planification</h3>
              <p>Échéanciers, diagrammes de Gantt, tâches par équipe.</p>
            </div>
            <div className="column is-4 has-text-centered">
              <span className="icon is-large has-text-success">
                <i className="fas fa-tasks fa-3x"></i>
              </span>
              <h3 className="title is-5 mt-2">Suivi</h3>
              <p>Indicateurs, gestion des imprévus, rapports automatisés.</p>
            </div>
            <div className="column is-4 has-text-centered">
              <span className="icon is-large has-text-warning">
                <i className="fas fa-users-cog fa-3x"></i>
              </span>
              <h3 className="title is-5 mt-2">Coordination</h3>
              <p>Communication fluide entre clients, ingénieurs et techniciens.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
