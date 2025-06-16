'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/projects', label: 'Projets' },
  { href: '/admin/users', label: 'Utilisateurs' },
  { href: '/admin/settings', label: 'Paramètres' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-64 bg-gray-800 min-h-screen text-white flex flex-col">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">Solutum Admin</div>
      <ul className="flex-grow">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`block px-6 py-3 hover:bg-gray-700 ${
                pathname === href ? 'bg-gray-700 font-semibold' : ''
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
