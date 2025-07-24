import { useState } from 'react';

export default function AssistanceBot() {
  const [showPopup, setShowPopup] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Bonjour je suis votre assistance! Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');

  const getBotResponse = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('contact')) {
      return 'Vous pouvez nous joindre au numeros suivent:+237 620793700, 699599682, 682475341, +237 620 793 700 ou par email à bitjokalaurent@gmail.com, ecstudents06@gmail.com.';
    } else if (lower.includes('horaire')) {
      return 'Nos horaires sont du lundi au vendredi, de 8h à 15h.';
    } else if (lower.includes('adresse') || lower.includes('localisation')) {
      return 'Nous sommes situés à Douala Bonamoussadi, face aux écoles publiques, et a ngaoundere (a cote de l&#39ecole la grace).';
    } else {
      return 'Désolé, je ne comprends pas. Pouvez-vous reformuler votre question ?';
    }  
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: 'user', text: input }]);
    setTimeout(() => {
      const response = getBotResponse(input);
      setMessages((msgs) => [...msgs, { from: 'bot', text: response }]);
    }, 500);
    setInput('');
  };

  return (
    <>
      <style jsx>{`
        .contact-help {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 10000;
          font-family: 'Times New Roman', serif;
        }
        .help-button {
          background-color: #e63946;
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-weight: 800;
          font-size: 1.5rem;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(230, 57, 70, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
        }
        .help-popup {
          position: absolute;
          bottom: 60px;
          right: 0;
          width: 320px;
          max-width: 90vw;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          padding: 10px 15px;
          color: #333;
          display: flex;
          flex-direction: column;
          height: 400px;
          transition: all 0.3s ease;
        }
        /* Style plein écran */
        .help-popup.expanded {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          border-radius: 0;
          padding: 20px;
          z-index: 11000;
          max-width: none;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
        }
        .messages {
          flex-grow: 1;
          overflow-y: auto;
          padding-right: 8px;
          margin-bottom: 10px;
          border-bottom: 1px solid #ccc;
        }
        .message {
          margin-bottom: 10px;
          padding: 8px 12px;
          border-radius: 15px;
          max-width: 80%;
          word-wrap: break-word;
        }
        .message.bot {
          background-color: #e0e0e0;
          color: #000;
          align-self: flex-start;
        }
        .message.user {
          background-color: #e63946;
          color: white;
          align-self: flex-end;
        }
        .input-area {
          display: flex;
          gap: 8px;
        }
        input[type="text"] {
          flex-grow: 1;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          border-radius: 9999px;
          padding: 12px 20px;
          font-size: 1rem;
          outline: none;
          background-color: rgba(255, 255, 255, 0.5);
          color: #000;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: none;
          user-select: text;
          min-width: 0;
        }
        input[type="text"]::placeholder {
          color: rgba(0, 0, 0, 0.5);
          font-style: italic;
        }
        input[type="text"]:focus {
          border-color: #e63946;
          box-shadow: 0 0 8px 2px rgba(230, 57, 70, 0.6);
          background-color: rgba(255, 255, 255, 0.75);
          color: #000;
        }
        button.send-button {
          background-color: #e63946;
          border: none;
          color: white;
          font-weight: 700;
          border-radius: 25px;
          padding: 0 20px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button.send-button:hover {
          background-color: #d42c3b;
        }
        button.expand-button {
          background: transparent;
          border: none;
          color: #e63946;
          font-size: 1.2rem;
          cursor: pointer;
          margin-left: 10px;
          user-select: none;
        }
        button.expand-button:hover {
          color: #d42c3b;
        }
      `}</style>

      <div className="contact-help">
        <button
          className="help-button"
          aria-label="Ouvrir l'assistance"
          onClick={() => setShowPopup(!showPopup)}
        >
          ?
        </button>

        {showPopup && (
          <div className={`help-popup ${isExpanded ? 'expanded' : ''}`} role="dialog" aria-modal="true" aria-labelledby="help-title">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
              <strong id="help-title">Solutum Assistante</strong>
              <button
                className="expand-button"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label={isExpanded ? "Réduire" : "Agrandir"}
              >
                {isExpanded ? '⬇️' : '⬆️'}
              </button>
            </div>
            <div className="messages" aria-live="polite" aria-relevant="additions">
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.from}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="input-area">
              <input
                type="text"
                placeholder="Écrivez votre question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                aria-label="Message utilisateur"
              />
              <button className="send-button" onClick={handleSend} aria-label="Envoyer message">Envoyer</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
