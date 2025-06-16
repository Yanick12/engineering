import Head from 'next/head'
import Footer from '../components/Footer'

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions légales - Solutum Engineering</title>
      </Head>

      <section className="section has-background-white py-6">
        <div className="container content">
          <h1 className="title is-3 has-text-primary">Mentions légales</h1>

          <h2 className="title is-5">Éditeur du site</h2>
          <p>
            <strong>Solutum Engineering</strong><br />
            Siège social : Ngaoundéré, Cameroun<br />
            Téléphone : +237 698 08 21 30<br />
            Email : contact@solutum-engineering.com
          </p>

          <h2 className="title is-5">Responsable de publication</h2>
          <p>Le responsable de la publication est le représentant légal de Solutum Engineering.</p>

          <h2 className="title is-5">Hébergement</h2>
          <p>
            Le site est hébergé par un prestataire tiers (à renseigner selon ton hébergeur, par exemple : Vercel, Netlify ou OVH).<br />
            Hébergeur : Vercel Inc.<br />
            Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
            Site web : <a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>
          </p>

          <h2 className="title is-5">Données personnelles</h2>
          <p>
            Aucune donnée personnelle n’est collectée sans votre consentement.<br />
            Les données transmises via les formulaires sont utilisées uniquement dans le cadre de la relation commerciale initiée
            par le visiteur.
          </p>

          <h2 className="title is-5">Cookies</h2>
          <p>
            Ce site utilise des cookies pour améliorer l’expérience utilisateur. En continuant votre navigation, vous acceptez
            l&#39;utilisation de ces cookies. Vous pouvez modifier ce comportement dans les paramètres de votre navigateur.
          </p>

          <h2 className="title is-5">Propriété intellectuelle</h2>
          <p>
            L’ensemble du contenu présent sur ce site (textes, images, logos, icônes) est la propriété exclusive de Solutum
            Engineering, sauf mention contraire. Toute reproduction, même partielle, sans autorisation est interdite.
          </p>

          <h2 className="title is-5">Contact</h2>
          <p>Pour toute question, veuillez nous contacter à l&#39;adresse : <strong>contact@solutum-engineering.com</strong></p>
        </div>
      </section>

      <Footer />
    </>
  )
}
