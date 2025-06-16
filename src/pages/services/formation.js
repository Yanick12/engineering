import Head from 'next/head'
import Link from 'next/link'
import Footer from '../../components/Footer'

export default function FormationTechnique() {
  return (
    <>
      <Head>
        <title>Formation Technique - Solutum Engineering</title>
      </Head>

      <section className="section has-background-white py-6">
        <div className="container">
          <h1 className="title is-3 has-text-primary mb-4">Formation technique</h1>
          <p className="subtitle is-5 mb-5">
            Nous formons les ingénieurs, techniciens et opérateurs aux technologies industrielles de demain.
          </p>

          <div className="columns is-vcentered is-variable is-6">
            <div className="column is-half">
              <p className="content is-medium">
                Solutum Engineering propose des formations pratiques dans plusieurs domaines de l&#39;ingénierie :
                électricité industrielle, automatisme, instrumentation, supervision, sécurité des systèmes.
              </p>
              <ul className="content">
                <li>✔ Formations inter-entreprises et sur site</li>
                <li>✔ Supports pédagogiques fournis</li>
                <li>✔ Sessions orientées pratique et cas réels</li>
                <li>✔ Évaluation & attestation de participation</li>
              </ul>
              <Link href="/contact" className="button is-primary is-medium mt-4">
                Contacter notre service formation
              </Link>
            </div>

            <div className="column is-half">
              <figure className="image is-4by3">
                <img src="/images/services/formation.jpg" alt="Formation technique Solutum" style={{ borderRadius: '8px' }} />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
