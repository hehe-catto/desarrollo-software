"use client";

import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function Dashboard() {
  const { user, error, isLoading } = useUser();
  const [privateData, setPrivateData] = useState<string>("");

  async function fetchPrivateData() {
    try {
      const tokenRes = await fetch("/auth/access-token");
      const { token } = await tokenRes.json();

      if (!token) throw new Error("No se pudo obtener el token de acceso.");

      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

      const res = await fetch(`${API_BASE_URL}/api/private`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error(`Error del backend: ${res.status}`);

      const data = await res.json();
      setPrivateData(JSON.stringify(data, null, 2));
    } catch (err: any) {
      console.error("Error al obtener datos privados:", err);
      setPrivateData("Error al obtener datos privados");
    }
  }

  useEffect(() => {
    if (user) fetchPrivateData();
  }, [user]);

  if (isLoading)
    return <p className="p-8 text-gray-400 text-center">Cargando usuario...</p>;
  if (error)
    return (
      <p className="p-8 text-center text-red-400">Error: {error.message}</p>
    );
  if (!user) return null;

  return (
    <main className="min-h-screen  text-gray-200 px-6 py-10 flex flex-col items-center">
      <section className="bg-[#18181b] border border-[#2e2e38] rounded-2xl p-8 shadow-lg w-full max-w-3xl text-center">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-70 animate-[pulse_3s_ease-in-out_infinite]" />
          <img
            src={user.picture ?? "/default-avatar.png"}
            alt={`Foto de perfil de ${user.name ?? "usuario"}`}
            className="relative z-10 w-32 h-32 rounded-full border-4 border-[#18181b] object-cover shadow-md"
          />
        </div>

        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
          {user.name}
        </h1>
        <p className="text-gray-400 text-sm mb-6">{user.email}</p>

        <div className="flex justify-center gap-4 mb-6">
          <Link
            href="/auth/logout"
            className="px-5 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02] hover:shadow-lg text-white font-semibold transition-all"
          >
            Cerrar sesión
          </Link>
          <Link
            href="/"
            className="px-5 py-2 rounded-md bg-[#27272a] hover:bg-[#323238] text-gray-300 font-semibold shadow-inner transition-all"
          >
            Volver al inicio
          </Link>
        </div>


    
      </section>

      <section className="w-full max-w-3xl mt-8 bg-[#18181b] border border-[#2e2e38] rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-purple-400 mb-3">
          Ejemplo de private endpoint
        </h2>
        <pre className="bg-[#0d0d14] p-4 rounded-lg text-sm border border-[#2e2e38] text-gray-300 overflow-x-auto whitespace-pre-wrap break-words">
          {privateData || "Cargando..."}
        </pre>
      </section>
    </main>
  );
}
