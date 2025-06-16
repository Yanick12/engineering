'use client';
import sidebar from './sidebar'
//import sidebar from './sidebar';
import Header from './Header';

import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ici on simule la récupération des infos utilisateur connecté
    // Dans un vrai projet, on ferait fetch /api/session ou on vérifierait un token
    setTimeout(() => {
      setUser({ name: 'Admin Solutum' });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <p className="text-center mt-10">Chargement du dashboard...</p>;

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Bienvenue, {user?.name}</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Nombre de projets</h2>
          <p className="text-4xl font-bold">12</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Demandes en attente</h2>
          <p className="text-4xl font-bold">5</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Utilisateurs</h2>
          <p className="text-4xl font-bold">48</p>
        </div>
      </section>
    </main>
  );
}
