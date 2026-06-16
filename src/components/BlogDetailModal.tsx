import React, { useState } from 'react';
import { Blog } from '../types';
import { X, Calendar, User, Clock, ArrowRight, MessageSquare } from 'lucide-react';

interface BlogDetailModalProps {
  blog: Blog | null;
  onClose: () => void;
}

export default function BlogDetailModal({ blog, onClose }: BlogDetailModalProps) {
  const [imgError, setImgError] = useState(false);

  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white text-zinc-900 shadow-2xl dark:bg-zinc-950 dark:text-zinc-100 border border-zinc-100 dark:border-zinc-900 transition-all duration-300"
        id="blog-detail-modal-container"
      >
        {/* Sticky Header Close */}
        <div className="sticky top-0 right-0 flex justify-end p-4 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm z-10 border-b border-zinc-100 dark:border-zinc-900">
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="Tutup"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Badge & Meta */}
          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
              blog.category === 'Beginner' 
                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
                : 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400'
            }`}>
              {blog.category}
            </span>
            <div className="flex items-center text-xs text-zinc-400 space-x-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center text-xs text-zinc-400 space-x-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
            {blog.title}
          </h1>

          {/* Inline Author */}
          <div className="flex items-center space-x-2.5 py-3 border-y border-zinc-100 dark:border-zinc-900">
            <div className="h-7 w-7 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs uppercase shadow-sm">
              {blog.author[0]}
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">{blog.author}</p>
              <p className="text-[10px] text-zinc-400">Trading Advisor & Researcher</p>
            </div>
          </div>

          {/* Thumbnail */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
            {!imgError ? (
              <img 
                src={blog.thumbnail} 
                alt={blog.title} 
                onError={() => setImgError(true)}
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-900 flex flex-col justify-between p-6 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:12px_12px]" />
                <div className="relative z-10 flex justify-end w-full">
                  <span className="text-[10px] font-mono tracking-widest text-emerald-300 font-bold uppercase">
                    Kara FX Research Premium
                  </span>
                </div>
                <div className="relative z-10 flex items-center justify-center">
                  <span className="text-sm font-semibold leading-relaxed text-center opacity-95">
                    {blog.title}
                  </span>
                </div>
                <span className="relative z-10 text-[9px] font-mono text-emerald-300/40 text-right uppercase">
                  Chart Insight
                </span>
              </div>
            )}
          </div>

          {/* Excerpt Summary Card */}
          <div className="border-l-4 border-emerald-500 bg-emerald-50/45 p-4 rounded-r-xl dark:bg-emerald-950/10 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 italic">
            "{blog.excerpt}"
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {blog.content.map((p, idx) => (
              <p key={idx} className="indent-4 sm:indent-6">
                {p}
              </p>
            ))}
          </div>

          {/* Footer Callout to WhatsApp conversion */}
          <div className="pt-6 border-t border-zinc-100 dark:border-zinc-900">
            <div className="rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  Ingin berdiskusi lebih lanjut tentang "{blog.title}"?
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Konsultasikan gratis dengan tim ahli Kara FX mengenai strategi trading ini via WhatsApp.
                </p>
              </div>
              <a
                href={`https://wa.me/6285536601150?text=Halo%20Kara%20FX%2C%20saya%20baru%20membaca%20artikel%20"${encodeURIComponent(blog.title)}"%20dan%20ingin%20tahu%20lebih%20lanjut.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 shrink-0 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-500/10"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Konsultasi Gratis</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
