import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../components/Navbar'

import Footer from '../../components/Footer'

export default function FormationTechnique() {
  return (
    <>
      <Head>
        <title>Formation Technique - Solutum Engineering</title>
      </Head>

      <Navbar/>

      <section className="section has-background-white py-6">
        <div className="container">
          <h1 className="title is-3 has-text-link mb-4">Formation technique</h1>
          <div className="content is-medium" style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            
            <ul>
             
            </ul>

          
          </div>

          <div className="columns is-vcentered is-variable is-6">
            <div className="column is-half">
              <p className="content is-medium">
                Solutum Engineering propose des formations pratiques dans plusieurs domaines en ingénierie :
                électricité industrielle, automatisme, instrumentation, supervision, sécurité des systèmes.
              </p>
              <h2 className="subtitle mt-5">Nos domaines de formation :</h2>
              <ul className="content">
              <li><strong>✔ La conception (CAO, DAO, MCN) :</strong> AutoCAD, Solidworks, Catia, etc.</li>
              <li><strong>✔ Analyse vibratoire</strong></li>
              <li><strong>✔ La maintenance industrielle</strong></li>
              <li><strong>✔ Les technologies avancées</strong></li>
              <li><strong>✔ Automation industrielle</strong></li>
              <li><strong>✔ La méthode de résolution de problèmes inventifs (TRIZ) et innovation</strong></li>
                <li>✔ Formations inter-entreprises et sur site</li>
                <li>✔ Supports pédagogiques fournis</li>
                <li>✔ Sessions orientées pratique et cas réels</li>
                <li>✔ Évaluation & attestation de participation</li>
              </ul>

              <p><strong>
              Développer les capacités du personnel (savoir, savoir-faire et savoir-être).</strong>
            </p>

              <Link href="#" className="button is-primary is-medium mt-4">
                Voir plus
              </Link>
            </div>

            <div className="column is-half">
              

<figure className="image is-4by3" style={{ position: 'relative' }}>
  <Image
    src="/images/formation/image26.jpg"
    alt="Formation technique Solutum"
    fill
    style={{ borderRadius: '8px', objectFit: 'cover' }}
    sizes="(max-width: 768px) 100vw, 768px"
  />
</figure>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
