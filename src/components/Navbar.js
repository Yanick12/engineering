import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className="navbar is-light is-fixed-top" role="navigation">
      <div className="navbar-brand">
        <Link href="/" legacyBehavior>
          <a className="navbar-item">
            <Image src="/images/logos.png" alt="Solutum Logo" width={130} height={30} />
          </a>
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          
          <Link href="/about" legacyBehavior><a className="navbar-item">À propos</a></Link>
          <Link href="/services" legacyBehavior><a className="navbar-item">Services</a></Link>
          
          <Link href="/contact" legacyBehavior><a className="navbar-item">Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}
