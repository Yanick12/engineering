import React from "react";

export default function HeroVideo() {
  return (
    <section className="hero is-fullheight is-relative">
      {/* Vidéo en fond */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/ingenierie.mp4" type="video/mp4" />
        {/* Tu peux ajouter d'autres sources ici pour compatibilité */}
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>

      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="overlay"></div>

      {/* Contenu texte centré */}
      <div className="hero-body">
        <div className="container has-text-centered has-text-white">
          <h1 className="title is-size-1-desktop is-size-3-tablet is-size-4-mobile">
            L&#39;ingénierie au service de vos projets
          </h1>
          <p className="subtitle is-size-4-desktop is-size-6-mobile mt-3">
            Découvrez nos solutions innovantes et performantes.
          </p>
          <button className="button is-primary is-medium mt-5">
            Demandez une consultation
          </button>
        </div>
      </div>

      {/* Styles CSS inline, à déplacer dans ton fichier CSS */}
      <style jsx>{`
        .hero {
          position: relative;
          overflow: hidden;
          background: #000; /* fallback */
        }
        .hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          width: auto;
          height: 100%;
          min-width: 100%;
          min-height: 100%;
          transform: translate(-50%, -50%);
          object-fit: cover;
          z-index: 0;
          filter: brightness(0.6);
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }
        .hero-body {
          position: relative;
          z-index: 2;
        }
        .button.is-primary {
          background-color: #3273dc; /* Bulma primary */
          border-color: transparent;
          font-weight: 600;
        }
        .button.is-primary:hover {
          background-color: #2759a5;
          border-color: transparent;
        }
      `}</style>
    </section>
  );
}
