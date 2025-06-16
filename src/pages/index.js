import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

// === Composant pour le texte animé "Moving ..."
const RotatingText = () => {
  const phrases = [
    "Un interlocuteur permettant une maitrise globale des prestation.",
    "Un partenaire indique pour une maitrise globale du projet.",
    "Votre metier est de produire, le notre est de vous y assister.",
    
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(timer);
  }, );

  return (
    <section
      className="flx flx-hero-hp"
      style={{ backgroundImage: 'url("/images/logos.png")' }}
    >
      <h1>
        <span>Solutum,</span>
        <span style={{ overflow: 'hidden', height: '3.6rem', position: 'relative' }}>
          <span
            style={{
              display: 'block',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateY(-${index * 3.6}rem)`,
              lineHeight: '3.6rem',
            }}
          >
            {phrases.map((phrase, i) => (
              <span key={i} style={{ display: 'block', height: '3.6rem' }}>
                {phrase}
              </span>
            ))}
          </span>
        </span>
      </h1>
    </section>
  );
};




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

  // Scroll navbar effet
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  const services = [
    { title: "Montage industriel", image: "/images/montage_transfert_industriel/image3.jpg", link: "/services/montage" },
    { title: "Gestion de projet", image: "/images/gestion_de_projet/nosMission1.jpg", link: "/services/projet" },
    { title: "Supervision & contrôle", image: "/images/montage_transfert_industriel/image4.jpg", link: "/services/supervision" },
    { title: "Formation", image: "/images/formation/image26.jpg", link: "/services/formation" }
  ];

  return (
    <>
      <Head>
        <title>Accueil - Solutum Engineering</title>
        <meta name="description" content="Solutum Engineering : ingénierie, automatisme, formation et solutions industrielles innovantes." />
      </Head>

      {/* === Navbar === */}
      <nav id="navbar" className="navbar is-light is-fixed-top">
        <div className="navbar-brand">
          <Link href="/" className="navbar-item">
            <img src="/images/logos.png" alt="Solutum Logo" width="140" height="22" />
          </Link>
        </div>

       

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Rechercher..." />
                <span className="icon is-left">
                  <i className="fas fa-search"></i>
                </span>
                
              </p>
            </div>
          </div>
        </div>
         <div className="navbar-menu is-active navbar-center">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Services</a>
            <div className="navbar-dropdown">
              <Link href="/services/montage" className="navbar-item">Montage industriel</Link>
              <Link href="/services/projet" className="navbar-item">Gestion de projet</Link>
              <Link href="/services/formation" className="navbar-item">Formations</Link>
            </div>
          </div>

          <Link href="/a-propos" className="navbar-item">À propos</Link>
          
          <Link href="/contact" className="navbar-item">Contact</Link>
        </div>
      </nav>

      {/* === Section Hero === */}
      <RotatingText />

      {/* === Bloc texte + vidéo === */}
      {/*}<div className="video-message-wrapper">
        <div className="video-message-text">
          <div className="text-container">
            <p>
              Chez Solutum Engineering, nous vous accompagnons dans la transformation digitale et le développement de solutions industrielles innovantes et durables.
            </p>
          </div>
        </div>
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline src="/videos/vid.mp4" className="hero-video" />
        </div>
      </div>*/}


      {/* === Introduction simple === */}
<section className="section has-background-white py-6">
  <div className="container has-text-centered">
    <h2 className="title is-4 has-text-grey-dark" style={{ maxWidth: "700px", margin: "0 auto" }}>
      Solutum Engineering vous accompagne dans la transformation industrielle avec des solutions techniques novatrices, flexibles et durables.
    </h2>
  </div>
</section>


      {/* === Services en grille === */}
      {/*<section className="section pt-0 pb-6">
        <div className="container">
          <h2 className="section-title">Nos domaines d&#39;intervention</h2>
          <div className="columns is-multiline">
            {services.map((service, index) => (
              <div key={index} className="column is-3">
                <Link href={service.link}>
                  <div className="card is-clickable">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={service.image} alt={service.title} />
                      </figure>
                    </div>
                    <div className="card-content has-text-centered">
                      <p className="title is-6">{service.title}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* === Services en Grille Modernisés === */}
      {/*
<section className="section has-background-light pt-6 pb-6">
  <div className="container">
    <h2 className="title is-3 has-text-centered mb-6">Nos domaines d’expertise</h2>

    <div className="columns is-multiline is-variable is-6">
      {services.map((service, index) => (
        <div key={index} className="column is-6-tablet is-3-desktop">
          <div className="card service-card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={service.image} alt={service.title} />
              </figure>
            </div>
            <div className="card-content has-text-centered">
              <p className="title is-5 mb-2">{service.title}</p>
              <Link href={service.link} className="button is-small is-primary is-rounded">
                Découvrir
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
*/
}

{/*<section className="section has-background-light pt-6 pb-6">
  <div className="container">
    <h2 className="title is-3 has-text-centered mb-4">Notre expertise technique</h2>
    <p className="has-text-centered mb-6" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
      Solutum Engineering accompagne les industries dans l’étude, la mise en œuvre et la maintenance de systèmes techniques automatisés, performants et adaptés à leurs besoins.
    </p>

    <div className="columns is-multiline is-variable is-6">
      {services.map((service, index) => (
        <div key={index} className="column is-6-tablet is-3-desktop">
          <div className="card service-card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={service.image} alt={service.title} />
              </figure>
            </div>
            <div className="card-content has-text-centered">
              <p className="title is-5 mb-2">{service.title}</p>
              <Link href={service.link} className="button is-small is-primary is-rounded">
                Découvrir
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
*/}

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
                <img src={service.image} alt={service.title} />
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


{/*<section className="section has-background-white py-6">
  <div className="container">
    <h2 className="title is-3 has-text-centered mb-5">Pourquoi choisir Solutum Engineering ?</h2>

    <p className="has-text-centered mb-6" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
      Issue d’une forte expérience dans le lien entreprise-université, Solutum Engineering combine 
      expertise technique, rigueur scientifique et accompagnement personnalisé pour fournir des solutions 
      industrielles sur mesure, fiables et évolutives.
    </p>

    <div className="columns is-variable is-6 is-multiline">
      <div className="column is-3 has-text-centered">
        <span className="icon is-large has-text-primary mb-3">
          <i className="fas fa-cogs fa-3x"></i>
        </span>
        <h3 className="title is-5">Expertise Technique</h3>
        <p>Des ingénieurs qualifiés avec une solide maîtrise des technologies industrielles modernes.</p>
      </div>
      <div className="column is-3 has-text-centered">
        <span className="icon is-large has-text-primary mb-3">
          <i className="fas fa-university fa-3x"></i>
        </span>
        <h3 className="title is-5">Partenariat Universitaire</h3>
        <p>Un pont actif entre théorie et pratique pour intégrer les jeunes talents dans l’industrie.</p>
      </div>
      <div className="column is-3 has-text-centered">
        <span className="icon is-large has-text-primary mb-3">
          <i className="fas fa-users fa-3x"></i>
        </span>
        <h3 className="title is-5">Approche Collaborative</h3>
        <p>Chaque projet est mené en co-construction avec le client pour répondre aux exigences réelles.</p>
      </div>
      <div className="column is-3 has-text-centered">
        <span className="icon is-large has-text-primary mb-3">
          <i className="fas fa-check-circle fa-3x"></i>
        </span>
        <h3 className="title is-5">Fiabilité</h3>
        <p>Un engagement constant à livrer des résultats solides, sécurisés et durables.</p>
      </div>
    </div>
  </div>
</section>*/}

<section className="section has-background-light py-6">
  <div className="container">
    <h2 className="section-title mb-4">Pourquoi choisir Solutum Engineering ?</h2>

    <p className="has-text-centered mb-6" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
      Issue d’une forte expérience du lien entreprise-université, Solutum Engineering offre un accompagnement complet 
      avec des solutions innovantes, fiables et adaptées aux réalités industrielles actuelles.
    </p>

    <div className="columns is-variable is-6 is-multiline">
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


{/*<section className="section has-background-light py-6">
  <div className="container">
    <h2 className="title is-3 has-text-centered mb-5">Notre vision</h2>

    <div className="columns is-vcentered">
      <div className="column is-6">
        <figure className="image is-4by3">
          <img src="/images/vision-industrie.jpg" alt="Vision industrielle" />
        </figure>
      </div>
      <div className="column is-6">
        <p className="content is-medium">
          Chez <strong>Solutum Engineering</strong>, nous avons pour ambition de transformer les environnements industriels 
          en leur apportant des solutions techniques innovantes, durables et applicables. Notre approche repose sur une 
          démarche collaborative centrée sur la résolution de problèmes complexes, avec une attention particulière portée 
          sur l’optimisation des performances, la fiabilité des systèmes et l'intégration harmonieuse des nouvelles technologies.
        </p>
        <p className="content is-medium mt-4">
          Notre objectif est clair : <strong>accompagner durablement nos clients dans la réalisation concrète et performante de leurs projets industriels</strong>.
        </p>
      </div>
    </div>
  </div>
</section>*/}

<section className="section has-background-white py-6">
  <div className="container">
    <h2 className="section-title mb-5">Notre vision</h2>

    <div className="columns is-vcentered fade-in">
      {/* Illustration ou photo technique */}
      <div className="column is-6">
        <figure className="image is-4by3 vision-img-wrapper">
          <img src="/images/gestion_de_projet/nosMission1.jpg" alt="Vision industrielle" />
        </figure>
      </div>

      {/* Texte vision */}
      <div className="column is-6">
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
{/*
<section className="section has-background-light py-6">
  <div className="container">
    <h2 className="title is-3 has-text-centered mb-6">Nos chiffres clés</h2>

    <div className="columns is-variable is-8 has-text-centered">
      <div className="column">
        <p className="title is-1 has-text-primary">15+</p>
        <p className="heading">Années d’expérience</p>
      </div>
      <div className="column">
        <p className="title is-1 has-text-primary">120+</p>
        <p className="heading">Projets réalisés</p>
      </div>
      <div className="column">
        <p className="title is-1 has-text-primary">7</p>
        <p className="heading">Implantations régionales</p>
      </div>
      <div className="column">
        <p className="title is-1 has-text-primary">100+</p>
        <p className="heading">Partenaires formés</p>
      </div>
    </div>
  </div>
</section>
*/}

<section className="section has-background-white py-6">
  <div className="container">
    <h2 className="section-title mb-5">Nos chiffres clés</h2>

    <div className="columns is-variable is-8 has-text-centered fade-in">
      <div className="column">
        <Counter end={15} duration={1500} />
        <p className="heading">Années d’expérience</p>
      </div>

      <div className="column">
        <Counter end={120} duration={1500} />
        <p className="heading">Projets réalisés</p>
      </div>

      <div className="column">
        <Counter end={50} duration={1500} />
        <p className="heading">Clients satisfaits</p>
      </div>

      <div className="column">
        <Counter end={24} duration={1500} />
        <p className="heading">Support disponible</p>
      </div>
    </div>
  </div>
</section>


{/*<section className="section has-background-white py-6">
  <div className="container">
    <h2 className="title is-3 has-text-centered mb-5">Nos sites & implantations</h2>
    <p className="has-text-centered mb-6" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
      Grâce à ses implantations stratégiques au Cameroun et à ses partenariats internationaux, Solutum Engineering est toujours au plus proche de vos projets techniques.
    </p>*/}

    {/*<div className="columns is-vcentered">*/}
      {/* Carte ou image à gauche */}
      {/*<div className="column is-half">
        <figure className="image is-4by3">
          <img src="/images/carte-sites.jpg" alt="Carte des implantations Solutum" />
        </figure>
      </div>*/}

      {/* Liste des villes à droite */}
      {/*<div className="column is-half">
        <ul className="content is-medium">
          <li><strong>📍 Ngaoundéré</strong> – Siège et centre de formation</li>
          <li><strong>📍 Garoua</strong> – Bureau technique</li>
          <li><strong>📍 Yaoundé</strong> – Support client et ingénierie</li>
          <li><strong>📍 Douala</strong> – Coordination industrielle</li>
          <li><strong>🌍 Partenaires à l’international</strong> – Projets collaboratifs techniques</li>
        </ul>
      </div>
    </div>
  </div>
</section>*/}



<section className="section has-background-light py-6">
  <div className="container">
    <h2 className="section-title mb-5">Nos sites & implantations</h2>

    <div className="columns is-vcentered fade-in">
      {/* Carte ou illustration */}
      <div className="column is-6">
        <figure className="image is-4by3 location-img-wrapper">
          <img src="/images/carte-sites.jpg" alt="Carte des implantations de Solutum" />
        </figure>
      </div>

      {/* Liste des sites */}
      <div className="column is-6">
        <ul className="content is-medium">
          <li><strong>📍 Ngaoundéré</strong> – Siège administratif et centre de formation</li>
          <li><strong>📍 Garoua</strong> – Bureau technique nord</li>
          <li><strong>📍 Yaoundé</strong> – Centre de supervision et support client</li>
          <li><strong>📍 Douala</strong> – Coordination industrielle et logistique</li>
          <li><strong>🌍 Partenariats</strong> – Ouverture à l&#39;international pour les projets complexes</li>
        </ul>
      </div>
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

      {/* === Aide flottante === */}
      <div className="contact-help">
        <button className="help-button" onClick={() => setShowPopup(!showPopup)}>?</button>
        {showPopup && (
          <div className="help-popup box">
            <strong>Contact & Localisation</strong>
            <p>
              📍 Ngaoundéré, Cameroun<br />
              📞 +237 698 08 21 30<br />
              ✉️ contact@solutum-engineering.com
            </p>
            <button className="button is-small is-light mt-2" onClick={() => setShowPopup(false)}>Fermer</button>
          </div>
        )}
      </div>

      {/* === Footer === */}
      <Footer />
    </>
  );
}
