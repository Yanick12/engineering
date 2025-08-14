import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function NosSites() {
  const villes = [
    { nom: "Adamaoua", top: "55%", left: "52%" },
    { nom: "Centre", top: "73%", left: "47%" },
    { nom: "Nord", top: "40%", left: "69%" },
    { nom: "Littoral", top: "76%", left: "27%" },
  ];

  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // On arrête d’observer après la 1ère apparition
        }
      },
      { threshold: 0.1 } // L’élément est considéré visible quand 10% est visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .marker {
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: #e63946;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 8px 3px rgba(230, 57, 70, 0.8);
          transform: translate(-50%, -50%) scale(1);
          transition: transform 0.3s ease;
          z-index: 10;
        }
        .marker:hover, .marker.hovered {
          transform: translate(-50%, -50%) scale(1.5);
          box-shadow: 0 0 12px 5px rgba(230, 57, 70, 1);
          z-index: 20;
        }
        .tooltip {
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(230, 57, 70, 0.9);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.85rem;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          z-index: 30;
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`section has-background-light py-6 fade-in ${visible ? 'visible' : ''}`}
      >
        <div className="container">
          <h2 className="section-title mb-5">Nos sites & implantations</h2>

          <div className="columns is-vcentered ">
            <div className="column is-4">
              <figure className="image is-6by4 location-img-wrapper">
                <Image
                  src="/images/carte.jpg"
                  alt="Carte des implantations de Solutum"
                  width={589}
                  height={848}
                  style={{ borderRadius: '17px' }}
                  priority
                  layout="responsive"
                />

                {villes.map(({ nom, top, left }, idx) => (
                  <div
                    key={idx}
                    className={`marker ${hovered === idx ? 'hovered' : ''}`}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ top, left }}
                  >
                    {hovered === idx && <div className="tooltip">{nom}</div>}
                  </div>
                ))}
              </figure>
            </div>

            {/* Liste des sites */}
            <div className="column is-8">
              <ul className="content is-medium" style={{ textAlign: 'justify' }}>
                <li><strong>📍 Ngaoundéré</strong> – Siège administratif et centre de formation</li>
                <li><strong>📍 Garoua</strong> – Bureau technique nord</li>
                <li><strong>📍 Yaoundé</strong> – Centre de supervision et support client</li>
                <li><strong>📍 Douala</strong> – Coordination industrielle et logistique</li>
                <li><strong>🌍 Partenariats</strong> – Ouverture à l&apos;international pour les projets complexes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
