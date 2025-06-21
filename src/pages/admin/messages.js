import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import ConfirmModal from '/src/components/ConfirmModal'  // ajuste chemin si besoin
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AdminMessages() {
  const [messages, setMessages] = useState([
    { id: 1, name: 'Alice B.', email: 'alice@gmail.com', message: 'Bonjour, je souhaite en savoir plus sur vos services.' },
    { id: 2, name: 'Jean D.', email: 'jean@entreprise.com', message: 'Est-il possible d’avoir un devis personnalisé ?' }
  ])

  const [modalOpen, setModalOpen] = useState(false)
  const [messageToDelete, setMessageToDelete] = useState(null)

  const openConfirm = (id) => {
    setMessageToDelete(id)
    setModalOpen(true)
  }

  const handleConfirmDelete = () => {
    setMessages(prev => prev.filter(msg => msg.id !== messageToDelete))
    setModalOpen(false)
    setMessageToDelete(null)
  }

  const handleCancelDelete = () => {
    setModalOpen(false)
    setMessageToDelete(null)
  }

  return (
    <>
      <Head>
        <title>Admin - Messages reçus | Solutum Engineering</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <Navbar/>

      <section className="section" style={{ backgroundColor: '#0f111a', minHeight: '100vh', color: '#e4e6eb' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <h1 style={{
            fontWeight: '700',
            fontSize: '2.5rem',
            marginBottom: '2rem',
            borderBottom: '2px solid #2e2f45',
            paddingBottom: '0.5rem',
            color: '#00fff7',
            fontFamily: "'Inter', sans-serif"
          }}>
            Messages reçus
          </h1>

          {messages.length === 0 ? (
            <div style={{
              backgroundColor: '#1c1e2a',
              padding: '1.5rem',
              borderRadius: '8px',
              fontSize: '1.2rem',
              textAlign: 'center',
              color: '#888',
              fontStyle: 'italic'
            }}>
              <i className="fas fa-inbox fa-2x" style={{ marginBottom: '0.5rem', color: '#00fff7' }}></i><br />
              Aucun message reçu
            </div>
          ) : (
            <div style={{
              backgroundColor: '#1c1e2a',
              borderRadius: '8px',
              overflowX: 'auto',
              boxShadow: '0 0 15px rgba(0,255,247,0.2)'
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: "'Inter', sans-serif"
              }}>
                <thead style={{ borderBottom: '2px solid #2e2f45' }}>
                  <tr>
                    <th style={thStyle}>Nom</th>
                    <th style={thStyle}>Email</th>
                    <th style={thStyle}>Message</th>
                    <th style={{ ...thStyle, width: '120px', textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map(msg => (
                    <tr key={msg.id} style={{ borderBottom: '1px solid #2e2f45', transition: 'background-color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#272a3a'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                      <td style={tdStyle}>{msg.name}</td>
                      <td style={{ ...tdStyle, color: '#00fff7', cursor: 'pointer' }}>
                        <a href={`mailto:${msg.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{msg.email}</a>
                      </td>
                      <td style={{ ...tdStyle, whiteSpace: 'pre-wrap', fontWeight: '500', fontSize: '0.9rem' }}>{msg.message}</td>
                      <td style={{ ...tdStyle, textAlign: 'center' }}>
                        <button
                          onClick={() => openConfirm(msg.id)}
                          style={{
                            backgroundColor: '#ff3860',
                            border: 'none',
                            borderRadius: '6px',
                            color: '#fff',
                            padding: '8px 14px',
                            cursor: 'pointer',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            transition: 'background-color 0.3s ease'
                          }}
                          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ff1f4b'}
                          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ff3860'}
                          title="Supprimer le message"
                          aria-label="Supprimer le message"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div style={{ marginTop: '2.5rem' }}>
            <Link href="/admin" legacyBehavior>
              <a style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: 'transparent',
                border: '2px solid #00fff7',
                borderRadius: '8px',
                color: '#00fff7',
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease, color 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#00fff7';
                e.currentTarget.style.color = '#0f111a';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#00fff7';
              }}
              >
                <i className="fas fa-arrow-left mr-2"></i> Retour au tableau de bord
              </a>
            </Link>
          </div>
        </div>

        {/* Modal de confirmation */}
        <ConfirmModal
          isOpen={modalOpen}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          message="Souhaitez-vous vraiment supprimer ce message ? Cette action est irréversible."
        />
      </section>

      <Footer/>
    </>
  )
}

const thStyle = {
  textAlign: 'left',
  color: '#00fff7',
  fontWeight: '700',
  padding: '1rem 1.25rem',
  fontSize: '1rem'
}

const tdStyle = {
  padding: '1rem 1.25rem',
  verticalAlign: 'middle',
  fontSize: '0.95rem'
}
