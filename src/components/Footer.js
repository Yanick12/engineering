import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#001F3F', color: '#ffffff' }}>
      <div className="container py-5">
        <div className="columns is-multiline">
          {/* Colonne 1 */}
          <div className="column is-12-mobile is-4-desktop mb-4">
            <h3 className="title is-6 has-text-white">L&#39;entreprise</h3>
            <ul>
              <li><Link href="/" className="has-text-grey-light">À propos</Link></li>
              <li><Link href="/" className="has-text-grey-light">Nos projets</Link></li>
              <li><Link href="/blog" className="has-text-grey-light">Blog</Link></li>

            </ul>
          </div>

          {/* Colonne 2 */}
          <div className="column is-12-mobile is-4-desktop mb-4">
            <h3 className="title is-6 has-text-white">Support & Services</h3>
            <ul>
              <li><Link href="/" className="has-text-grey-light">Conditions générales</Link></li>
              <li><Link href="/AssistanceBot" className="has-text-grey-light">Assistance technique</Link></li>
              
              <li className="mt-2">
                <Link href="/newsletter" className="button is-small" style={{ backgroundColor: '#E63946', color: '#fff' }}>
                  S&#39;abonner à la newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="column is-12-mobile is-4-desktop mb-4">
            <h3 className="title is-6 has-text-white">Suivez-nous</h3>
            <div className="social-icons mb-2">
              <a href="https://www.facebook.com" className="icon mr-3" style={{ color: '#E63946' }}>
                <i className="fab fa-facebook fa-lg"></i>
              </a>
            
              <a href="https://www.linkedin.com" className="icon" style={{ color: '#E63946' }}>
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
            <p className="has-text-grey-light">
              Rejoignez la communauté Solutum
            </p>
          </div>
        </div>

        {/* Slogan */}
       

        {/* Légal */}
        <div style={{ backgroundColor: '#001F3F' }} className="has-text-centered p-3 mt-5">
          <p className="has-text-grey-light is-size-7">
            <Link href="/mention_legale" className="has-text-grey-light">Mentions légales</Link> &nbsp;|&nbsp;
            <Link href="/" className="has-text-grey-light">Politique de confidentialité</Link><br />
            © {currentYear} Solutum Engineering. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
