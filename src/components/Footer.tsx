import React from 'react';
import { TrendingUp, MessageCircle, Mail, ShieldAlert, Heart, Calendar } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 border-t border-zinc-100 dark:bg-zinc-950 dark:border-zinc-900 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: About */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-3">
              <BrandLogo size={34} className="shadow-xs" />
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                Kara <span className="text-black dark:text-white">FX</span>
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
              Kara FX adalah platform edukasi trading forex premium yang didesain minimalis, clean, dan profesional. Kami berfokus menyajikan wawasan pasar berkualitas tinggi, katalog ebook trading terbaik untuk trader pemula maupun berpengalaman, serta hasil penelitian analisis struktur pasar tepercaya.
            </p>
          </div>

          {/* Column 2: Navigasi */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4 font-mono">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Beranda / Home', tab: 'home' },
                { label: 'Blog Trading', tab: 'blog' },
                { label: 'Katalog Ebook', tab: 'ebooks' },
                { label: 'Journal & Research', tab: 'journals' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      setActiveTab(link.tab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-zinc-500 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Kontak & Admin */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4 font-mono">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-xs text-zinc-500 dark:text-zinc-400">
              <li className="flex items-start space-x-2">
                <MessageCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-zinc-800 dark:text-zinc-300">WhatsApp Admin</span>
                  <a 
                    href="https://wa.me/6285536601150?text=Halo%20Kara%20FX%2C%20saya%20tertarik%20dengan%20katalog%20ebook." 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    085536601150
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-zinc-800 dark:text-zinc-300">Email</span>
                  <span className="break-all font-mono">contact@karafx.co</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer / Risk Warning */}
        <div className="border-t border-zinc-200/60 pt-6 pb-6 dark:border-zinc-950">
          <div className="rounded-xl bg-orange-50/50 p-4 border border-orange-100/30 dark:bg-orange-950/10 dark:border-orange-900/10">
            <div className="flex items-start gap-3">
              <ShieldAlert className="h-4 w-4 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                <span className="font-semibold text-amber-800 dark:text-amber-400">Peringatan Risiko (Risk Warning):</span> Perdagangan valuta asing (Forex / CFD) dengan margin memiliki risiko kerugian yang tinggi dan mungkin tidak cocok untuk semua kalangan investor. Seluruh materi edukasi, ulasan pasar, ebook, dan materi penelitian jurnal di Kara FX dibuat semata-mata untuk tujuan pembelajaran informasi dan tidak boleh ditafsirkan sebagai rekomendasi keputusan investasi keuangan mutlak pelat.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-zinc-200/40 dark:border-zinc-900 text-xs text-zinc-400">
          <div>
            &copy; {currentYear} <span className="font-semibold text-zinc-700 dark:text-zinc-300">Kara FX</span>. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-1.5 text-[11px]">
            <span>Build with precision and</span>
            <Heart className="h-3 w-3 text-emerald-500 fill-emerald-500" />
            <span>for modern financial free traders.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
