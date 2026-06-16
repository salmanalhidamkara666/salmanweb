import React from 'react';
import { Ebook } from '../types';
import { MessageSquare, Star, BookOpen, Check } from 'lucide-react';

interface EbookCardProps {
  key?: string;
  ebook: Ebook;
}

export default function EbookCard({ ebook }: EbookCardProps) {
  // Convert coverColor gradient to CSS or use classes
  const coverBgClass = ebook.coverColor || 'from-emerald-500 to-emerald-800';

  // Format WhatsApp Link
  const encodedText = encodeURIComponent(
    `Halo Kara FX Admin, saya ingin membeli Ebook "${ebook.title}" seharga ${ebook.price}. Mohon panita kirimkan detail pembayaran.`
  );
  const waUrl = `https://wa.me/6285536601150?text=${encodedText}`;

  return (
    <div 
      className="group flex flex-col md:flex-row overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm hover:shadow-xl hover:border-emerald-500/20 dark:border-zinc-900/80 dark:bg-zinc-950 transition-all duration-300"
      id={`ebook-card-${ebook.id}`}
    >
      {/* Visual Book Cover Column (Interactive Mockup) */}
      <div className="relative w-full md:w-56 shrink-0 py-8 md:py-12 bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center dark:from-zinc-900 dark:to-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [background-position:top_center] opacity-35 dark:opacity-10" />
        
        {/* Book 3D Container */}
        <div className="relative w-36 h-48 sm:w-40 sm:h-56 rounded-r-xl shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 overflow-hidden flex flex-col justify-between p-4 text-white z-10">
          {/* Subtle page spine highlight */}
          <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-black/25 origin-left" />
          {/* The Gradient Cover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${coverBgClass} -z-10`} />
          {/* Chart Grid Lines overlay to simulate trading charts */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:10px_10px] -z-10" />
          
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono tracking-widest bg-white/20 px-2 py-0.5 rounded uppercase">
              Kara FX
            </span>
            <span className="text-[9px] font-mono text-zinc-100">
              Ebook
            </span>
          </div>

          <div className="space-y-1 mt-6">
            <h4 className="text-[12px] sm:text-xs font-semibold leading-tight font-sans tracking-wide">
              {ebook.title}
            </h4>
            <div className="h-1.5 w-10 bg-white/65 rounded" />
          </div>

          <div className="mt-auto flex items-end justify-between border-t border-white/20 pt-2.5">
            <span className="text-[8px] opacity-75 font-mono">
              SYSTEM GUIDE
            </span>
            <BookOpen className="h-3 w-3 opacity-80" />
          </div>
        </div>

        {/* Highlight Glowing Circle behind 3D book */}
        <div className="absolute h-28 w-28 rounded-full bg-emerald-500/10 blur-xl group-hover:bg-emerald-500/25 transition-all duration-500" />
      </div>

      {/* Book description & info column */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between space-y-4">
        
        {/* Upper metadata details */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${
              ebook.category === 'Beginner' 
                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
                : 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400'
            }`}>
              {ebook.category}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                {ebook.rating.toFixed(2)}
              </span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-zinc-900 group-hover:text-emerald-500 dark:text-white dark:group-hover:text-emerald-400 transition-colors">
            {ebook.title}
          </h3>

          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {ebook.description}
          </p>

          {/* Book Metrics */}
          <div className="flex items-center space-x-4 py-2 border-y border-zinc-100/60 dark:border-zinc-900/40 text-[11px] text-zinc-500 dark:text-zinc-400">
            <div>
              Halaman: <span className="font-semibold text-zinc-800 dark:text-zinc-200">{ebook.pages} PDF</span>
            </div>
            <span>•</span>
            <div>
              Status: <span className="font-semibold text-emerald-600 dark:text-emerald-400">Siap Kirim</span>
            </div>
          </div>

          {/* Key Deliverables Bullet Points */}
          <div className="space-y-1.5 pt-1">
            <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500">
              Apa yang Anda peroleh:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1">
              {ebook.features.map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                  <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Purchase Area */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 pt-4 border-t border-zinc-100/60 dark:border-zinc-900/40">
          <div className="text-center sm:text-left shrink-0">
            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 block uppercase font-bold tracking-wider font-mono">Harga Spesial</span>
            <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 whitespace-nowrap block mt-0.5">
              {ebook.price}
            </span>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`ebook-buy-wa-${ebook.id}`}
            className="flex w-full sm:w-auto items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20"
          >
            <MessageSquare className="h-4.5 w-4.5 fill-white/10" />
            <span>Beli via WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
