import { Badge } from "@radix-ui/themes";

export default function HomeHero() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6">
      <div className="text-center max-w-3xl space-y-6">
        
        {/* Badge / Pill kecil */}
        <Badge color="orange" size="3">
          Selamat Datang di Proyek Baru
        </Badge>

        {/* Judul Utama / Brand */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          buhniased
        </h1>

        {/* Subtitle / Deskripsi */}
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto">
          Platform modern yang dibangun dengan Next.js, Tailwind CSS, dan performa super cepat tanpa kompromi.
        </p>

        {/* Tombol Aksi (CTA) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="/login"
            className="w-full sm:w-auto px-8 py-3 font-medium text-black bg-white rounded-lg hover:bg-gray-200 transition"
          >
            Masuk / Login
          </a>
          <a
            href="/about"
            className="w-full sm:w-auto px-8 py-3 font-medium text-white bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>

      </div>
    </main>
  );
}