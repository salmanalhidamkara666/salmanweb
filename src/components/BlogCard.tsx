import React, { useState } from 'react';
import { Blog } from '../types';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

interface BlogCardProps {
  key?: string;
  blog: Blog;
  onReadMore: (blog: Blog) => void;
}

export default function BlogCard({ blog, onReadMore }: BlogCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article 
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100/80 bg-white shadow-sm hover:shadow-xl hover:border-emerald-500/20 dark:border-zinc-900 dark:bg-zinc-950 transition-all duration-300 transform hover:-translate-y-1.5"
      id={`blog-card-${blog.id}`}
    >
      {/* Thumbnail area with overlay */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        {!imgError ? (
          <img 
            src={blog.thumbnail} 
            alt={blog.title} 
            onError={() => setImgError(true)}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-900 flex flex-col justify-between p-4.5 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px]" />
            <div className="relative z-10 flex justify-end w-full">
              <span className="text-[9px] font-mono tracking-widest text-emerald-300 font-bold uppercase">
                Kara FX Research
              </span>
            </div>
            <div className="relative z-10 flex items-center justify-center py-2">
              <span className="text-xs font-semibold leading-relaxed line-clamp-2 text-center opacity-90">
                {blog.title}
              </span>
            </div>
            <span className="relative z-10 text-[8px] font-mono text-emerald-300/40 text-right uppercase">
              Chart Insight
            </span>
          </div>
        )}
        {/* Category Badge overlay */}
        <span className={`absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm ${
          blog.category === 'Beginner' 
            ? 'bg-emerald-500 text-white' 
            : 'bg-zinc-900 text-white'
        }`}>
          {blog.category}
        </span>
      </div>

      {/* Details layout */}
      <div className="flex flex-col flex-1 p-5 space-y-3.5">
        
        {/* Meta layout */}
        <div className="flex items-center space-x-3 text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{blog.date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
          {blog.excerpt}
        </p>

        {/* Bottom push */}
        <div className="pt-2 mt-auto flex items-center justify-between border-t border-zinc-100/60 dark:border-zinc-900/40">
          <div className="flex items-center space-x-1.5">
            <div className="h-5.5 w-5.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-[9px] uppercase">
              {blog.author[0]}
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-zinc-600 dark:text-zinc-400">
              {blog.author}
            </span>
          </div>

          <button
            onClick={() => onReadMore(blog)}
            className="flex items-center space-x-1 text-xs font-bold text-emerald-500 group-hover:text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>Selengkapnya</span>
            <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </article>
  );
}
