export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Selamat Datang
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-7 text-zinc-600 dark:text-zinc-400">
          Ini adalah halaman landing sederhana yang dibangun dengan Next.js dan Tailwind CSS.
          Cepat, ringan, dan siap untuk dikembangkan lebih lanjut.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Hubungi Kami
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-200 bg-white py-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; 2026 Test Landing Page. Dibuat dengan Next.js.
        </p>
      </footer>
    </div>
  );
}
