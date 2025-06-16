// pages/services.js
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function ServicesPage() {
  const services = [
    {
      title: 'Montage industriel',
      description: "Installation et mise en service d’équipements industriels adaptés à vos besoins.",
      image: '/images/services/montage.jpg',
      link: '/services/montage'
    },
    {
      title: 'Supervision & automatisation',
      description: "Conception de systèmes automatisés, contrôle/commande et interfaces homme-machine.",
      image: '/images/services/automatisme.jpg',
      link: '/services/automatisme'
    },
    {
      title: 'Gestion de projet',
      description: "Méthodologie de pilotage pour garantir le respect des délais, coûts et qualité.",
      image: '/images/services/gestion.jpg',
      link: '/services/projets'
    },
    {
      title: 'Formation technique',
      description: "Formations sur mesure pour les ingénieurs, techniciens et opérateurs industriels.",
      image: '/images/services/formation.jpg',
      link: '/services/formation'
    },
    {
      title: 'Infogérance & assistance',
      description: "Soutien technique et maintenance pour vos infrastructures et réseaux industriels.",
      image: '/images/services/infogerance.jpg',
      link: '/services/infogerance'
    },
    {
      title: 'Conseil & études',
      description: "Études de faisabilité, audits techniques, diagnostics industriels.",
      image: '/images/services/conseil.jpg',
      link: '/services/conseil'
    }
  ]

  return (
    <>
      <Head>
        <title>Nos Services - Solutum Engineering</title>
      </Head>

      <section className="section has-background-white">
        <div className="container">
          <h1 className="title is-3 has-text-centered mb-5">Nos domaines de compétences</h1>
          <p className="has-text-centered mb-6" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Solutum Engineering vous accompagne dans tous vos projets industriels, de l’étude à la réalisation, en passant par l’automatisation, la formation et la gestion globale.
          </p>

          <div className="columns is-multiline is-variable is-6">
            {services.map((service, index) => (
              <div key={index} className="column is-6-tablet is-4-desktop">
                <div className="card service-card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={service.image} alt={service.title} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <h3 className="title is-5">{service.title}</h3>
                    <p>{service.description}</p>
                    <Link href={service.link} className="button is-link is-small mt-3">En savoir plus</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
