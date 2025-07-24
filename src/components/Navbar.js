import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsActive(!isActive);

  return (
    <>
      <style jsx>{`
        nav.navbar {
        height: 60px;
        padding: 0 2rem;
          position: fixed;
          top: 0;
          width: 100%;
          background: #001F3F;

          color: #001F3F; /* texte bleu foncé par défaut */
          box-shadow: none;
          
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
        }

        nav.navbar.scrolled {
          background: #001F3F;
          color: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .search-input {
          border-radius: 20px;
          border: none;
          padding: 0.3rem 1rem;
          font-size: 0.9rem;
          width: 250px;
          max-width: 100%;
          transition: box-shadow 0.3s ease;
          color: inherit; /* hérite la couleur du navbar */
          background-color: transparent;
          border: 1px solid currentColor;
        }
        .search-input:focus {
          outline: none;
          box-shadow: 0 0 6px 2px #e63946aa;
        }

        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .navbar-item {
  color: white !important;
  font-weight: 700; /* gras */
  cursor: pointer;
  transition: color 0.3s ease;
  text-decoration: none;
}

        }
        .navbar-item:hover {
          color: #e63946;
        }


        .cta-button {

          background-color: #e63946;
          color: white;
          padding: 0.4rem 1.2rem;
          border-radius: 25px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .cta-button:hover {
          background-color: #d42c3b;
          box-shadow: 0 0 12px rgba(230, 57, 70, 0.7);
        }

        .admin-button {
          color: inherit;
          padding: 0.4rem 1.2rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          background: none;
          border: 1px solid currentColor;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .admin-button:hover {
          background-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }

        .navbar-burger {
          display: none;
          color: inherit;
          cursor: pointer;
          border: none;
          background: none;
          flex-direction: column;
          gap: 4px;
          padding: 0;
        }
        .navbar-burger span {
          display: block;
          width: 25px;
          height: 3px;
          background-color: currentColor;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .navbar-burger.is-active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .navbar-burger.is-active span:nth-child(2) {
          opacity: 0;
        }
        .navbar-burger.is-active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 1024px) {
          .search-input {
            width: 150px;
          }
          .navbar-menu {
            display: none;
            position: fixed;
            top: 60px;
            right: 0;
            background-color: #001f3f;
            flex-direction: column;
            width: 200px;
            padding: 1rem;
            gap: 1rem;
            height: calc(100vh - 60px);
            overflow-y: auto;
            z-index: 9999;
          }
          .navbar-menu.is-active {
            display: flex;
          }
          .navbar-burger {
            display: flex;
          }
        }
      `}</style>

      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link href="/" legacyBehavior>
            <a className="navbar-item" aria-label="Accueil Solutum">
              <Image src="/images/logos.png" alt="Solutum Logo" width={120} height={60} />

            </a>
          </Link>

          <input
            type="text"
            className="search-input"
            placeholder="Rechercher..."
            aria-label="Recherche"
          />
        </div>

        <button
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded={isActive}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <Link href="/services" legacyBehavior>
            <a className="navbar-item">Services</a>
          </Link>
          <Link href="../services/montage" legacyBehavior>
            <a className="navbar-item">Montage industriel</a>
          </Link>
          <Link href="../services/formation" legacyBehavior>
            <a className="navbar-item">Formation</a>
          </Link>
          <Link href="/a_propos" legacyBehavior>
            <a className="navbar-item">À propos</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <button className="cta-button" type="button">
              Contactez-nous
            </button>
          </Link>

          <Link href="../admin" legacyBehavior>
            <button className="admin-button" type="button">
              Connexion
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
