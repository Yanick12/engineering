import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Nosimplantations from '../components/Nosimplantations';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AssistanceBot from '../components/AssistanceBot';

function Counter({ end, duration }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const totalFrames = duration / 16;
    const increment = end / totalFrames;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return (
    <p className="title is-1 has-text-primary" style={{ fontSize: '3rem' }}>
      {count}+
    </p>
  );
}
export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
 
  const services = [
    { title: "Montage industriel", image: "/images/montage/image3.jpg", link: "/services/montage" },
    { title: "Gestion de projet", image: "/images/gestion_de_projet/nosMission1.jpg", link: "/services/gestion_projet" },
    { title: "Supervision & contrôle", image: "/images/montage/image4.jpg", link: "/services/automatisme" },
    { title: "Formation", image: "/images/formation/image27.jpg", link: "/services/formation" }
  ];
  return (
    <>
      <Head>
        <title>Solutum Engineering</title>
        <meta name="description" content="Solutum Engineering : ingénierie, automatisme, formation et solutions industrielles innovantes." />
      </Head>
      <Navbar/>
      {/* Vidéo fixe en fond */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      {/* Contenu de la page */}
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered has-text-white">
            
           <h1
            className="title is-size-1-desktop is-size-3-tablet is-size-4-mobile flex-1/2"
            style={{ color: '#ffffff' }}
            >
            L&#39;ingénierie au service de vos projets
          </h1>

            <button className="button is-primary is-large is-medium mt-5">
              <Link href="/contact" className="button is-primary ">
                Demandez une consultation
              </Link>
            </button>
            
          </div>
        </div>
      </section>
      <style jsx>{`
        .hero-video-fixed {
          position: fixed;
          top: 50%;
          left: 50%;
          width: auto;
          height: 100vh;
          min-width: 100vw;
          min-height: 100vh;
          transform: translate(-50%, -50%);
          object-fit: cover;
          z-index: -1;
          filter: brightness(0.6);
        }
        section.hero {
          background: transparent;
          position: relative;
          z-index: 1;
        }
      `}</style>

<section className="section has-background-light pt-6 pb-6">
  <div className="container">
    <h2 className="section-title mb-4">Nos domaines d’expertise</h2>
    <p className="has-text-centered mb-6" style={{ maxWidth: '800px', margin: '0 auto' }}>
      Découvrez les compétences techniques de Solutum, déployées à travers l’automatisation, la supervision, le montage industriel et la formation continue.
    </p>
    <div className="columns is-multiline is-variable is-6">
      {services.map((service, index) => (
        <div key={index} className="column is-6-tablet is-3-desktop">
          <div className="card service-card fade-in">
            <div className="card-image image-hover">
              <figure className="image is-4by3">
                  <Image
                  src={service.image}
                  alt={service.title}
                  width={640} 
                  height={480} 
                  />
              </figure>
            </div>
            <div className="card-content has-text-centered">
              <p className="title is-6">{service.title}</p>
              <Link href={service.link} className="button is-primary is-small is-rounded mt-2">
                Découvrir
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="section has-background-light py-6">
  <div className="container" style={{textAlign: 'justify'}}>
    <h2 className="section-title mb-4">Pourquoi choisir Solutum Engineering ?</h2>
    <p className="has-text-centered mb-6" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
      Issue d’une forte expérience du lien entreprise-université, Solutum Engineering offre un accompagnement complet 
      avec des solutions innovantes, fiables et adaptées aux réalités industrielles actuelles.
    </p>
    <div className="columns is-variable is-6 is-multiline" style={{textAlign: 'justify'}}>
      <div className="column is-6-tablet is-3-desktop has-text-centered fade-in">
        <span className="icon is-large has-text-primary mb-3">
          <i className="fas fa-cogs fa-3x"></i>
        </span>
        <h3 className="title is-5">Expertise technique</h3>
        <p>Une équipe d’ingénieurs spécialisée dans l’automatisation, la supervision et les solutions industrielles complexes.</p>
      </div>
      <div className="column is-6-tablet is-3-desktop has-text-centered fade-in">
        <span className="icon is-large has-text-primary mb-3">
          <i className="fas fa-chalkboard-teacher fa-3x"></i>
        </span>
        <h3 className="title is-5">Transfert de compétences</h3>
        <p>Un fort lien avec les écoles d’ingénieurs et les jeunes talents, avec un rôle actif dans la formation.</p>
      </div>
      <div className="column is-6-tablet is-3-desktop has-text-centered fade-in">
        <span className="icon is-large has-text-primary mb-3">
          <i className="fas fa-project-diagram fa-3x"></i>
        </span>
        <h3 className="title is-5">Projets sur mesure</h3>
        <p>Chaque mission est adaptée à vos installations, contraintes techniques et ambitions stratégiques.</p>
      </div>
      <div className="column is-6-tablet is-3-desktop has-text-centered fade-in">
        <span className="icon is-large has-text-primary mb-3">
          <i className="fas fa-thumbs-up fa-3x"></i>
        </span>
        <h3 className="title is-5">Fiabilité reconnue</h3>
        <p>Des partenaires satisfaits, des solutions testées et un accompagnement professionnel constant.</p>
      </div>
    </div>
  </div>
</section>
<section className="section has-background-white py-6">
  <div className="container">
    <h2 className="section-title mb-5">Notre vision</h2>
    <div className="columns is-vcentered fade-in">
      {/* Illustration ou photo technique */}
      <div className="column is-6">
        <figure className="image is-4by3 vision-img-wrapper">
        <Image
          src="/images/gestion_de_projet/nosMission1.jpg"
          alt="Vision industrielle"
          width={800} 
          height={600}
          layout="responsive"
        />
        </figure>
      </div>
      {/* Texte vision */}
      <div className="column is-6" style={{textAlign: 'justify'}}>
        <div className="content is-medium">
          <p>
            Chez <strong>Solutum Engineering</strong>, nous avons pour ambition d’accompagner nos clients dans la transformation
            technologique et industrielle de leurs installations.
          </p>
          <p>
            En alliant expertise technique, rigueur scientifique et innovation, nous développons des
            solutions sur mesure répondant aux défis actuels : automatisation, optimisation des processus,
            performance durable.
          </p>
          <p>
            Notre objectif est de garantir la <strong>réussite, la fiabilité et la durabilité</strong> de vos projets,
            tout en favorisant le transfert de compétences et l&#39;intégration locale.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="section has-background-white py-6">
  <div className="fade-in">
    <h2 className="title is-3 has-text-centered mb-5">Nos valeurs</h2>
    <p className="has-text-centered mb-6" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
      L&#39;équipe de Solutum Engineering s’appuie sur des principes solides pour garantir la qualité, l’éthique et la performance dans tous ses projets industriels.
    </p>

    <div className="columns is-multiline is-variable is-6">
      <div className="column is-4">
        <div className="box has-text-centered">
          <span className="icon is-large has-text-primary">
            <i className="fas fa-handshake fa-2x"></i>
          </span>
          <h3 className="title is-5 mt-3">Engagement</h3>
          <p>Nous sommes pleinement investis dans la réussite de chaque projet et dans la satisfaction durable de nos clients.</p>
        </div>
      </div>

      <div className="column is-4">
        <div className="box has-text-centered">
          <span className="icon is-large has-text-primary">
            <i className="fas fa-balance-scale fa-2x"></i>
          </span>
          <h3 className="title is-5 mt-3">Intégrité</h3>
          <p>Nous agissons avec transparence, honnêteté et responsabilité à chaque étape de notre mission.</p>
        </div>
      </div>

      <div className="column is-4">
        <div className="box has-text-centered">
          <span className="icon is-large has-text-primary">
            <i className="fas fa-star fa-2x"></i>
          </span>
          <h3 className="title is-5 mt-3">Excellence</h3>
          <p>Nous visons l’excellence dans la conception, la réalisation et le suivi technique de nos solutions industrielles.</p>
        </div>
      </div>

      <div className="column is-4">
        <div className="box has-text-centered">
          <span className="icon is-large has-text-primary">
            <i className="fas fa-lightbulb fa-2x"></i>
          </span>
          <h3 className="title is-5 mt-3">Innovation</h3>
          <p>Nous favorisons l&#39;usage de technologies modernes et la recherche de solutions toujours plus efficaces.</p>
        </div>
      </div>

      <div className="column is-4">
        <div className="box has-text-centered">
          <span className="icon is-large has-text-primary">
            <i className="fas fa-sync-alt fa-2x"></i>
          </span>
          <h3 className="title is-5 mt-3">Amélioration continue</h3>
          <p>Chaque projet est l’occasion d’apprendre, d’évoluer et de nous adapter pour mieux servir nos partenaires.</p>
        </div>
      </div>

      <div className="column is-4">
        <div className="box has-text-centered">
          <span className="icon is-large has-text-primary">
            <i className="fas fa-chalkboard-teacher fa-2x"></i>
          </span>
          <h3 className="title is-5 mt-3">Transfert de compétences</h3>
          <p>Nous partageons notre savoir-faire avec les jeunes ingénieurs et les équipes locales pour bâtir l’avenir.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="section has-background-white py-6">
  <div className="container">
    <h2 className="section-title mb-5">Nos chiffres clés</h2>

    <div className="columns is-variable is-8 has-text-centered fade-in">
      <div className="column">
        <Counter end={15} duration={10000} />
        <p className="heading">Années d’expérience</p>
      </div>

      <div className="column">
        <Counter end={100} duration={35000} />
        <p className="heading">Projets réalisés</p>
      </div>

      <div className="column ">
        <Counter end={50} duration={40000} />
        <p className="heading">Clients satisfaits</p>
      </div>

      <div className="column">
        <Counter end={24} duration={45000} />
        <p className="heading">Support disponible</p>
      </div>
    </div>
  </div>
</section>
<Nosimplantations/>
{/*    SECTION DES TEMOIGNAGES    */}
<section className="section has-background-light py-25">
  <div className="container">
    <h2 className="section-title mb-5">Temoignages</h2>
    <div className="columns is-vcentered fade-in">
      <TestimonialCarousel/>

    </div>
  </div>
</section>
      {/* === CTA Contact === */}
      <section className="section py-6 has-text-centered">
        <div className="container">
          <h2 className="title is-3 mb-4">Prêt à transformer vos projets industriels ?</h2>
          <p className="mb-5">Contactez-nous pour une collaboration sur mesure.</p>
          <Link href="/contact" className="button is-primary is-large">
            Nous contacter
          </Link>
        </div>
      </section>
      
      <AssistanceBot/>
      {/* === Footer === */}
      <Footer />
    </>
  );
}