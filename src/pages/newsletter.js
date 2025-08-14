import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setStatus('');

    if (!email || !email.includes('@')) {
      setMessage("Veuillez entrer une adresse e-mail valide.");
      setStatus('error');
      return;
    }

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage("Merci ! Vous êtes maintenant inscrit à notre newsletter.");
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || "Une erreur s’est produite.");
      }
    } catch (err) {
      setStatus('error');
      setMessage("Erreur réseau. Veuillez réessayer plus tard.");
    }
  };

  return (
    <>
      <Head>
        <title>Inscription Newsletter - Solutum Engineering</title>
      </Head>

      <Navbar/>

      <section className="section">
        <div className="container">
          <h1 className="title">Recevez nos actualités</h1>
          <p className="subtitle">Inscrivez-vous à notre newsletter pour ne rien manquer.</p>

          <form onSubmit={handleSubmit} className="box" style={{ maxWidth: '500px' }}>
            <div className="field">
              <label className="label">Adresse e-mail</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="exemple@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">
                  S&#39;inscrire
                </button>
              </div>
            </div>

            {message && (
              <p className={`help ${status === 'success' ? 'is-success' : 'is-danger'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </section>

      <Footer/>
    </>
  );
}
