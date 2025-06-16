export default function ConfirmModal({ isOpen, onConfirm, onCancel, message }) {
  if (!isOpen) return null

  return (
    <>
      <div className="modal-overlay" onClick={onCancel}></div>
      <div className="modal-container">
        <p className="modal-message">{message}</p>
        <div className="modal-buttons">
          <button className="button cancel" onClick={onCancel}>Annuler</button>
          <button className="button confirm" onClick={onConfirm}>Confirmer</button>
        </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.7);
          z-index: 1000;
        }
        .modal-container {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: #141722;
          border-radius: 12px;
          padding: 2rem;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 0 15px #00fff7aa;
          z-index: 1100;
          text-align: center;
          color: #e4e6eb;
          font-family: 'Inter', sans-serif;
        }
        .modal-message {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .modal-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        .button {
          cursor: pointer;
          padding: 0.6rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          transition: background-color 0.3s ease;
          min-width: 100px;
        }
        .button.cancel {
          background: #444a6e;
          color: #bbb;
        }
        .button.cancel:hover {
          background: #555d84;
          color: #eee;
        }
        .button.confirm {
          background: #ff3860;
          color: white;
        }
        .button.confirm:hover {
          background: #ff1f4b;
        }
      `}</style>
      </div>
    </>
  )
}
