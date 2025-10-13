import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"


export const metadata = {
  title: "Mi App",
  description: "App con Auth0 + Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#0d0d14] text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
