import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../../../lib/supabaseClient' // adapte le chemin si nécessaire

export default function MessagesAdmin() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('id, name, email, message, is_read')
        .order('id', { ascending: false })

      if (error) {
        console.error('Erreur de récupération :', error)
      } else {
        setMessages(data)
      }
      setLoading(false)
    }

    fetchMessages()
  }, [])

  const markAsRead = async (id) => {
    const { error } = await supabase
      .from('messages')
      .update({ is_read: true })
      .eq('id', id)

    if (error) {
      console.error('Erreur mise à jour is_read:', error)
    } else {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === id ? { ...msg, is_read: true } : msg
        )
      )
    }
  }

  const deleteMessage = async (id) => {
    const { error } = await supabase
      .from('messages')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Erreur suppression:', error)
    } else {
      setMessages((prev) => prev.filter((msg) => msg.id !== id))
    }
  }

  return (
    <section className="section py-6">
      <div className="container">
        <div className="mb-5">
          <button
            className="button is-link"
            onClick={() => router.push('/admin/dashboard')} 
          >
            ← Retour au Dashboard
          </button>
        </div>

        <h1 className="title is-3 has-text-primary has-text-centered mb-5">
          Messages reçus
        </h1>

        {loading ? (
          <p>Chargement...</p>
        ) : messages.length === 0 ? (
          <p>Aucun message reçu pour le moment.</p>
        ) : (
          messages.map(({ id, name, email, message, is_read }) => (
            <article
              key={id}
              className={`message mb-4 ${is_read ? 'is-light' : 'is-info'}`}
            >
              <div className="message-header" style={{ justifyContent: 'space-between' }}>
                <p>{name} &lt;{email}&gt;</p>
                <div>
                  {!is_read && (
                    <button
                      className="button is-small is-success mr-2"
                      onClick={() => markAsRead(id)}
                    >
                      Marquer lu
                    </button>
                  )}
                  <button
                    className="button is-small is-danger"
                    onClick={() => deleteMessage(id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
              <div className="message-body">{message}</div>
            </article>
          ))
        )}
      </div>
    </section>
  )
}
