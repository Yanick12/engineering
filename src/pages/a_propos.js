import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function AproposPage() {
  return (
    <>
      <Head>
        <title>À propos - Solutum Engineering</title>
      </Head>

      <Navbar/>

      <section className="section has-background-white py-6">
        <div className="container">
          <h1 className="title is-3 has-text-primary mb-5">Qui sommes-nous ?</h1>

          <div className="columns is-variable is-6 is-vcentered">
            <div className="column is-6">
              <p className="content is-medium">
                <strong>Solutum Engineering</strong> est un bureau d&#39;étude et d&#39;ingénierie industrielle fondé sur un modèle
                collaboratif innovant. Fort d’une expérience dans l’automatisation, la gestion de projet et la supervision, nous mettons notre savoir-faire au service des entreprises industrielles du Cameroun et d&#39;ailleurs.
              </p>
              <p className="content">
                Notre structure est née d&#39;une forte interaction <strong>entre l’université et l’industrie</strong>, avec pour mission de faciliter le transfert de compétences, d&#39;assurer l’implémentation de solutions techniques fiables et de contribuer à la montée en compétences locale.
              </p>
            </div>

            <div className="column is-6">
             

<figure className="image is-4by3" style={{ position: 'relative' }}>
  <Image
    src="/images/team.jpg"
    alt="Équipe Solutum Engineering"
    fill
    style={{ borderRadius: '8px', objectFit: 'cover' }}
    sizes="(max-width: 768px) 100vw, 768px"
  />
</figure>

            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section has-background-light py-6">
        <div className="container">
          <h2 className="title is-4 has-text-centered mb-5">Nos valeurs fondamentales</h2>

          <div className="columns is-multiline is-variable is-6 has-text-centered">
            <div className="column is-4">
              <div className="box">
                <span className="icon is-large has-text-primary">
                  <i className="fas fa-lightbulb fa-2x"></i>
                </span>
                <h3 className="title is-5 mt-3">Innovation</h3>
                <p>Nous développons des solutions nouvelles adaptées aux réalités industrielles africaines.</p>
              </div>
            </div>
            <div className="column is-4">
              <div className="box">
                <span className="icon is-large has-text-primary">
                  <i className="fas fa-hands-helping fa-2x"></i>
                </span>
                <h3 className="title is-5 mt-3">Engagement</h3>
                <p>Nous nous engageons pleinement à chaque projet, avec rigueur et responsabilité.</p>
              </div>
            </div>
            <div className="column is-4">
              <div className="box">
                <span className="icon is-large has-text-primary">
                  <i className="fas fa-user-shield fa-2x"></i>
                </span>
                <h3 className="title is-5 mt-3">Intégrité</h3>
                <p>Nous agissons dans le respect des normes, de l’éthique et de la transparence professionnelle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historique ou chiffres (optionnel) */}
      <section className="section py-6">
        <div className="container has-text-centered">
          <h2 className="title is-4 mb-4">+15 ans d’expérience industrielle</h2>
          <p className="subtitle is-6">Solutum Engineering, un acteur de référence au service de l’innovation et de la performance industrielle au Cameroun.</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
