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
          <h1 className="title is-3 has-text-primary mb-4">Supervision & automatisation</h1>
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
        </div>
      </section>

      <Footer />
    </>
  )
}
