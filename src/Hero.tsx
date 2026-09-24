import { Badge, Text, Heading, Link } from "@radix-ui/themes";
import { ArrowRightIcon, Sparkles } from "lucide-react";
import NextLink from "next/link";

export default function HomeHeroGlow() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden">
      {/* Efek Glow di Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative text-center max-w-3xl space-y-6 z-10">
        <Badge color="orange" size="3" radius="full" variant="soft">
          <Sparkles className="w-3.5 h-3.5 mr-1 inline" /> V1.0 Resmi Dirilis
        </Badge>

        <Heading size="9" className="tracking-tight">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-200">buhniased</span>
        </Heading>

        <Text size="5" color="gray" className="text-balance block text-slate-400">
          Platform modern yang dibangun dengan Next.js, Tailwind CSS, dan performa super cepat tanpa kompromi.
        </Text>

        <div className="pt-4">
          <NextLink 
            href="/schedule" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-all shadow-lg shadow-orange-500/25"
          >
            <span>Mulai Sekarang</span>
            <ArrowRightIcon className="w-4 h-4" />
          </NextLink>
        </div>
      </div>
    </main>
  );
}