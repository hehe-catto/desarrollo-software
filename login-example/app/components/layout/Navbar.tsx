"use client";

import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export default function Navbar() {
  const { user, isLoading } = useUser();

  return (
    <nav className="w-full flex justify-between items-center px-6 py-3 bg-[#18181b] border-b border-[#2e2e38] shadow-sm">
      <Link
        href="/"
        className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        ✨ Mi App
      </Link>

      <div className="flex items-center gap-4">
        {isLoading ? (
          <span className="text-sm text-gray-400">Cargando...</span>
        ) : user ? (
          <>
            <span className="text-sm text-gray-300">👋 {user.name}</span>
            <a
              href="/auth/logout"
              className="px-3 py-1.5 rounded-md text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-all shadow-md"
            >
              Cerrar sesión
            </a>
          </>
        ) : (
          <a
            href="/auth/login"
            className="px-3 py-1.5 rounded-md text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all shadow-md"
          >
            Iniciar sesión
          </a>
        )}
      </div>
    </nav>
  );
}
