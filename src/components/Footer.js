// src/components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="section has-background-light mt-6">
      <div className="container">
        <div className="columns is-variable is-6">
          {/* Colonne Le Groupe */}
          <div className="column">
            <h3 className="title is-6">L&#39;entreprise</h3>
            <ul>
              <li><Link href="/">À propos</Link></li>
              <li><Link href="/">Nos projets</Link></li>
              <li><Link href="/">Carrière</Link></li>
              <li><Link href="/">Partenaires</Link></li>
              
            </ul>
          </div>

          {/* Colonne Service Client */}
          <div className="column">
            <h3 className="title is-6">Support & Services</h3>
            <ul>
              <li><Link href="/">Conditions générales</Link></li>
              <li><Link href="/">Assistance technique</Link></li>
              <li><Link href="/">FAQ</Link></li>
              <li>
              
<Link href="/newsletter" className="button is-primary is-small mt-2">
  Newsletter
</Link>
              </li>
            </ul>
          </div>

          {/* Colonne Réseaux Sociaux */}
          <div className="column">
            <h3 className="title is-6">Suivez-nous</h3>
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i> Facebook Solutum</a></li>
              <li><a href="#"><i className="fab fa-youtube"></i> YouTube Solutum</a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i> LinkedIn Solutum</a></li>
              
            </ul>
          </div>
        </div>

        {/* Message d’avertissement */}
        <div className="notification is-info is-light mt-4 mb-2">
          <strong> Votre métier est de produire, le nôtre est de vous y assister.</strong><br />
        </div>

        {/* Légal */}
        <div className="content has-text-centered has-background-black p-3">
          <p className="has-text-white">

            <Link href="/mention_legale" className="has-text-grey-light">Mentions légales</Link>&nbsp;|&nbsp;
            <Link href="/" className="has-text-white">Politique de confidentialité</Link> &nbsp;|&nbsp;
            <br />
            © {new Date().getFullYear()} Solutum Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
