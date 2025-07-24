import { useState } from 'react';

export default function RealisationPopup() {
  const [show, setShow] = useState(false);

  const realisations = [
    "Sous-traitance du Projet EMIS (Energy Management Integration System) à la SABC (Yaoundé et Douala) piloté par ENERGENIC Sarl (Douala)",
    "Inspection des unités (U2000 et U225) de cogénération vapeur et électricité à la SONARA pour le compte de TMS (Allemagne)",
    "Configuration de débitmètres à ultrasons à la Camwater pour le compte de TMS CA (Douala)",
    "Réhabilitation et mise en service d’une presse à injection Sandretto S8/190T et du groupe froid Nova frigo à Multiplast, Douala",
    "Réhabilitation et fourniture de la documentation technique des presses à injection Sandretto S7/190T, 500T à CMIC Métallurgique, Douala",
    "Réhabilitation et régulation automatique des groupes de froid industriels (Nova Frigo, Industrial Froid et Chiller) à STRATEX, Douala",
    "Démontage, réhabilitation et transfert de la sacherie MODA Polybags à la SCPR, Yagoua",
    "Etude, montage et démarrage de la sacherie à la SCPR, Yagoua",
    "Installation avec inverseurs des groupes électrogènes Caterpillar C13_350KVA ET C9_300KVA à la SCPR, Yagoua",
    "Réhabilitation et montage de la rizerie (6t/h-SCHULE) de Maga transféré à la SEMRY Yagoua, pour le compte de la SCPR",
    "Supervision du montage de la rizerie (10t/h-SCHULE) de SEMRY, Yagoua pour le compte de SCPR",
    "Installation d’une décortiqueuse semi-automatique de riz (1t/h, NZJ15/15)",
    "Dépannage, réglage et configuration des machines d’impression offset (KBA, GTO, KORS, Rotatives …) et d’insolation CTP Kodack : MACACOS, Imprimerie MARIA, Yaoundé",
    "Dépannage et installation des variateurs pour moteurs à courant continu et alternatifs : Altivar 930, Mentor 2, Inovance, Allen Bradley, ACS300/550, FRENIC dans diverses entreprises"
  ];

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="button is-primary"
        style={{ margin: '20px auto', display: 'block' }}
      >
        Voir Nos Réalisations
      </button>

      {show && (
        <div className="modal is-active">
          <div className="modal-background" onClick={() => setShow(false)}></div>
          <div className="modal-card" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <header className="modal-card-head">
              <p className="modal-card-title">Nos Réalisations</p>
              <button className="delete" aria-label="close" onClick={() => setShow(false)}></button>
            </header>
            <section className="modal-card-body">
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                {realisations.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '10px', fontFamily: 'Times New Roman' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <footer className="modal-card-foot">
              <button className="button" onClick={() => setShow(false)}>Fermer</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
