export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-white/10 bg-[#0d0d14] text-gray-400">
      <div className="mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mi App
          </span>
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="text-sm text-gray-500 text-center sm:text-right">
          Hecho con <span className="text-pink-400">♥</span> por{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
            href="https://github.com/hehe-catto"
          >
            Jo Dev
          </a>
        </div>
      </div>
    </footer>
  );
}
