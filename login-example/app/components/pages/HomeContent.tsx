"use client";

import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomeContent() {
  const { user, isLoading } = useUser();
  const [publicMessage, setPublicMessage] = useState("");

  useEffect(() => {
    async function getPublicMessage() {
      try {
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

        const res = await fetch(`${API_BASE_URL}/api/public`);
        const data = await res.json();

        setPublicMessage(JSON.stringify(data, null, 2));
      } catch (err) {
        setPublicMessage("Error al obtener el mensaje del backend público");
      }
    }
    if (!user) getPublicMessage();
  }, [user]);

  if (isLoading)
    return <p className="text-center mt-20 text-gray-400">Cargando...</p>;

  return (
    <main className="flex flex-col items-center justify-center text-center px-4 py-20 text-gray-200">
      <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
        🚀 Ejemplo de Login con Auth0 + Next.js
      </h1>

      <p className="text-gray-400 mb-10 max-w-xl text-lg leading-relaxed">
        Esta es una demo simple para mostrar cómo funciona la autenticación con{" "}
        <span className="text-pink-400 font-semibold">Auth0</span> en una app de{" "}
        <span className="text-purple-400 font-semibold">Next.js</span>.
      </p>

      {!user ? (
        <>
          <a
            href="/auth/login"
            className="px-6 py-3 rounded-md font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white transition-all shadow-lg mb-10"
          >
            Iniciar sesión
          </a>

          <section className="bg-[#18181b] border border-[#2e2e38] rounded-2xl p-6 shadow-lg w-full max-w-2xl text-left">
            <h2 className="text-xl font-semibold text-purple-400 mb-3 flex items-center gap-2">
              Ejemplo endpoint público
            </h2>
            <p className="text-gray-400 text-sm mb-3">
              Este endpoint es accesible sin autenticación.
            </p>
            <pre className="bg-[#0d0d14] p-4 rounded-lg text-sm border border-[#2e2e38] text-gray-300 overflow-x-auto">
              {publicMessage || "Cargando mensaje del backend público..."}
            </pre>
          </section>
        </>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-md font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white transition-all shadow-lg"
          >
            Ir a tu Dashboard
          </Link>

          <a
            href="/auth/logout"
            className="px-6 py-3 rounded-md font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white transition-all shadow-lg"
          >
            Cerrar sesión
          </a>
        </div>
      )}
    </main>
  );
}
