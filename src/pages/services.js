// pages/services.js
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ServicesPage() {
  const services = [
    {
      title: 'Montage industriel',
      description: "Installation et mise en service d’équipements industriels adaptés à vos besoins.",
      image: '/images/montage/image4.jpg',
      link: '/services/montage'
    },
    {
      title: 'Supervision & automatisation',
      description: "Conception de systèmes automatisés, contrôle/commande et interfaces homme-machine.",
      image: '/images/etude_realisation/image6.jpg',
      link: '/services/automatisme'
    },
    {
      title: 'Gestion de projet',
      description: "Méthodologie de pilotage pour garantir le respect des délais, coûts et qualité.",
      image: '/images/gestion_de_projet/nosMission1.jpg',
      link: '/services/projets'
    },
    {
      title: 'Formation technique',
      description: "Formations sur mesure pour les ingénieurs, techniciens et opérateurs industriels.",
      image: '/images/formation/image26.jpg',
      link: '/services/formation'
    },
    {
      title: 'Infogérance & assistance',
      description: "Soutien technique et maintenance pour vos infrastructures et réseaux industriels.",
      image: '/images/aspect_pratique/etude2.jpg',
      link: '/services/infogerance'
    },
    {
      title: 'Conseil & études',
      description: "Études de faisabilité, audits techniques, diagnostics industriels.",
      image: '/images/etudes/image10.jpg',
      link: '/services/conseil'
    }
  ]

  return (
    <>
      <Head>
        <title>Nos Services - Solutum Engineering</title>
      </Head>

      <Navbar/>

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
                    

<figure className="image is-4by3" style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '75%' }}>
  <Image
    src={service.image}
    alt={service.title}
    fill
    style={{ objectFit: 'cover' }}
    sizes="(max-width: 768px) 100vw, 768px"
    priority={true} // optionnel, si tu veux charger l'image en priorité
  />
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
