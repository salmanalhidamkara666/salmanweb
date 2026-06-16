import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogCard from './components/BlogCard';
import EbookCard from './components/EbookCard';
import JournalCard from './components/JournalCard';
import BlogDetailModal from './components/BlogDetailModal';
import { BLOGS_DATA, EBOOKS_DATA, JOURNALS_DATA } from './data';
import { Blog, Ebook, Journal } from './types';
import { 
  TrendingUp, 
  BookOpen, 
  FileText, 
  MessageSquare, 
  ArrowRight, 
  Sparkles, 
  Search, 
  GraduationCap, 
  ArrowUpRight, 
  Download, 
  Grid,
  Percent,
  CheckCircle,
  HelpCircle,
  BookMarked,
  Layers,
  Check
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [globalSearch, setGlobalSearch] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Beginner' | 'Advanced'>('All');
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  // Manage Dark Mode Side effects
  useEffect(() => {
    // Enable default light mode, support theme switching class
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle CTA quick clicks from home page
  const navigateToTab = (tab: string, filter?: 'All' | 'Beginner' | 'Advanced') => {
    setActiveTab(tab);
    if (filter) {
      setActiveFilter(filter);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Searching & Filtering
  const filteredBlogs = BLOGS_DATA.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(globalSearch.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(globalSearch.toLowerCase());
    const matchesCategory = activeFilter === 'All' ? true : blog.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  const filteredEbooks = EBOOKS_DATA.filter(ebook => {
    const matchesSearch = ebook.title.toLowerCase().includes(globalSearch.toLowerCase()) || 
                          ebook.description.toLowerCase().includes(globalSearch.toLowerCase());
    const matchesCategory = activeFilter === 'All' ? true : ebook.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  const filteredJournals = JOURNALS_DATA.filter(journal => {
    return journal.title.toLowerCase().includes(globalSearch.toLowerCase()) || 
           journal.abstract.toLowerCase().includes(globalSearch.toLowerCase());
  });

  // Highlight popular items on home page
  const latestBlogs = BLOGS_DATA.slice(0, 3);
  const popularEbooks = EBOOKS_DATA.slice(0, 2);
  const recentJournals = JOURNALS_DATA.slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/40 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-200" id="main-app-container">
      
      {/* 🧭 NAVIGATION */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setGlobalSearch(''); // Reset search when switching tabs
        }}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        globalSearch={globalSearch}
        setGlobalSearch={setGlobalSearch}
      />

      {/* 📱 GLOBAL SEARCH ACTIVE BANNER */}
      {globalSearch && (
        <div className="bg-emerald-500/10 border-b border-emerald-500/20 py-3.5 px-4 dark:bg-emerald-950/20 transition-all">
          <div className="mx-auto max-w-7xl flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-400">
              <Search className="h-4 w-4 animate-pulse" />
              <span>
                Menampilkan hasil pencarian untuk "<span className="font-semibold">{globalSearch}</span>" 
                ({filteredBlogs.length + filteredEbooks.length + filteredJournals.length} ditemukan)
              </span>
            </div>
            <button 
              onClick={() => setGlobalSearch('')}
              className="text-xs font-semibold text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-200 underline"
            >
              Reset Pencarian
            </button>
          </div>
        </div>
      )}

      {/* ⚙️ PAGES ROUTER / HUB */}
      <main className="flex-1">

        {/* =========================================
            1. HOME PAGE VIEW
        ========================================= */}
        {activeTab === 'home' && (
          <div className="animate-fade-in space-y-16 pb-20">
            
            {/* 🌟 HERO SECTION */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-800 text-white px-8 py-12 sm:p-16 shadow-xl shadow-emerald-950/10">
                {/* Visual grid / spot overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                <div className="relative z-10 max-w-3xl space-y-6 text-left">
                  {/* Premium badge */}
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-emerald-100 shadow-sm backdrop-blur-md">
                    <Sparkles className="h-3.5 w-3.5 fill-emerald-300 text-emerald-300" />
                    <span>Premium Forex Learning Hub & Research</span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                    Learn Smart Trading,<br />Build Financial Freedom.
                  </h1>

                  {/* Elegant intro subtext */}
                  <p className="text-sm sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
                    Platform edukasi digital forex berkualitas tinggi untuk memetakan pasar secara mandiri. Kami menyembuhkan kebingungan Anda lewat katalog panduan teknikal SMC, Price Action, serta ulasan ilmiah terkemuka.
                  </p>

                  {/* 🎯 CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                    <button
                      onClick={() => navigateToTab('blog')}
                      className="px-6 py-3.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 font-extrabold text-sm shadow-lg shadow-emerald-950/10 transition-all cursor-pointer text-center"
                    >
                      Explore Blog
                    </button>
                    <button
                      onClick={() => navigateToTab('ebooks')}
                      className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-all shadow-md shadow-emerald-500/10 cursor-pointer text-center"
                    >
                      Buy Ebook
                    </button>
                    <button
                      onClick={() => navigateToTab('journals')}
                      className="px-6 py-3.5 rounded-xl bg-emerald-400/20 text-white border border-emerald-400/30 font-bold text-sm backdrop-blur-sm hover:bg-emerald-400/30 transition-all cursor-pointer text-center"
                    >
                      Download Journal
                    </button>
                  </div>
                </div>

                {/* Interactive premium statistical badge panel inside hero */}
                <div className="relative z-10 pt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl border-t border-white/10 mt-10">
                  {[
                    { label: 'Edukasi Blog', count: '10 Artikel' },
                    { label: 'Ebook Premium', count: '10 Buku' },
                    { label: 'Jurnal / Riset', count: '10 Jurnal akademis' },
                    { label: 'Admin Support', count: 'Fast-Response' }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-xs p-4 rounded-2xl border border-white/10 text-left">
                      <span className="block text-[10px] uppercase tracking-wider text-emerald-300 font-bold font-mono">{stat.label}</span>
                      <span className="text-lg font-bold text-white block mt-0.5">{stat.count}</span>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* 🛡️ BANNER HIGHLIGHT: LATEST BLOG */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-[10px] font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest font-mono">
                    Sajian Edukasi Terbaru
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
                    Blog Trading Pilihan
                  </h2>
                </div>
                <button
                  onClick={() => navigateToTab('blog')}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
                >
                  <span>Lihat Seluruh Blog ({BLOGS_DATA.length})</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {latestBlogs.map((blog) => (
                  <BlogCard 
                    key={blog.id} 
                    blog={blog} 
                    onReadMore={(b) => setSelectedBlog(b)} 
                  />
                ))}
              </div>
            </section>

            {/* 📚 BANNER HIGHLIGHT: POPULAR EBOOKS */}
            <section className="bg-zinc-50 py-16 dark:bg-zinc-900/40 border-y border-zinc-100/50 dark:border-zinc-900/50">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest font-mono">
                      Produk Sistem Terlaris
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
                      Katalog Ebook Populer
                    </h2>
                  </div>
                  <button
                    onClick={() => navigateToTab('ebooks')}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
                  >
                    <span>Jelajahi Semua Ebook ({EBOOKS_DATA.length})</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {popularEbooks.map((ebook) => (
                    <EbookCard key={ebook.id} ebook={ebook} />
                  ))}
                </div>
              </div>
            </section>

            {/* 📑 BANNER HIGHLIGHT: RECENT JOURNAL */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-[10px] font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest font-mono">
                    Penelitian Akademis & Riset Kuantitatif
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
                    Jurnal & Research Insight
                  </h2>
                </div>
                <button
                  onClick={() => navigateToTab('journals')}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
                >
                  <span>Seluruh Jurnal ({JOURNALS_DATA.length})</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentJournals.map((journal) => (
                  <JournalCard key={journal.id} journal={journal} />
                ))}
              </div>
            </section>

            {/* 👨‍💻 MEET THE FOUNDER SECTION */}
            <section className="mx-auto max-w-5xl px-4">
              <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-zinc-100/40 dark:shadow-none flex flex-col md:flex-row items-stretch gap-8 relative overflow-hidden">
                {/* Background visual element */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-500/5 blur-3xl" />
                
                {/* Image Container */}
                <div className="w-full md:w-2/5 shrink-0 relative flex justify-center items-center">
                  <div className="relative group w-64 h-64 sm:w-72 sm:h-72 md:w-full md:h-full aspect-square rounded-2xl overflow-hidden shadow-lg shadow-zinc-900/10 dark:shadow-zinc-950/40 border border-zinc-200/50 dark:border-zinc-800">
                    <img 
                      src="/images/founder.png" 
                      alt="Salman Alhidamkara B.Sc." 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src.endsWith('.png')) {
                          target.src = '/images/founder.jpg';
                        } else if (target.src.endsWith('.jpg')) {
                          target.src = '/images/founder.jpeg';
                        }
                      }}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-60 sm:opacity-50" />
                    
                    {/* Badge on photo */}
                    <div className="absolute bottom-4 left-4 right-4 bg-emerald-500/90 text-white text-[11px] font-bold tracking-wider uppercase py-1.5 px-3 rounded-lg text-center backdrop-blur-xs">
                      Founder & Chief Market Analyst
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex-1 flex flex-col justify-between py-2 space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] sm:text-xs font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-widest font-mono">
                        Nakhoda Kara FX
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                        Salman Alhidamkara B.Sc.
                      </h2>
                      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800 text-xs font-semibold text-zinc-650 text-zinc-600 dark:text-zinc-400">
                        <GraduationCap className="h-3.5 w-3.5 text-emerald-500" />
                        <span>B.Sc. & Quantitative Market Theorist</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Salman Alhidamkara B.Sc. adalah pendiri sekaligus Chief Analyst di Kara FX. Dengan bekal keilmuan analitis (B.Sc.) dan pengalaman riset bertahun-tahun dalam mengurai kompleksitas pasar modal harian, beliau membangun Kara FX dengan satu visi nyata: <strong>menghadirkan edukasi trading yang transparan, rasional, dan berbasis data objektif.</strong>
                    </p>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Beliau aktif melahirkan model analisis struktur pasar (Smart Money Concepts/SMC), jurnal ilmiah bursa, serta membimbing ribuan trader individu di seluruh Indonesia agar mampu membaca peta likuiditas institusi secara mandiri dengan kedisplinan kelas dunia.
                    </p>
                  </div>

                  {/* Quote block */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/20 border-l-4 border-emerald-500 text-zinc-700 dark:text-zinc-300">
                    <p className="text-xs italic leading-relaxed">
                      "Pasar bukanlah kasino tebak-tebakan. Ada logika pergerakan di balik likuiditas besar (smart money) yang selalu meninggalkan jejak struktur. Di Kara FX, kami memecah kebisingan itu menjadi rule-set visual yang logis dan disiplin bagi kemandirian finansial Anda."
                    </p>
                    <span className="block text-[10px] font-bold text-zinc-400 dark:text-zinc-500 mt-2 font-mono uppercase tracking-wider">— Salman Alhidamkara B.Sc.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 🏆 WHATSAPP VIP CALLOUT BANNER FOR TRAINEE */}
            <section className="mx-auto max-w-5xl px-4">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 sm:p-10 text-white relative overflow-hidden shadow-xl shadow-emerald-500/10">
                <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-white/5 blur-2xl translate-x-12" />
                
                <div className="max-w-2xl space-y-4">
                  <span className="inline-block text-[10px] font-mono tracking-widest uppercase bg-white/25 px-2.5 py-1 rounded">
                    KARA FX VIP MEMBER
                  </span>
                  <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                    Butuh Bimbingan Berkelanjutan?
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
                    Dapatkan akses mentoring private eksklusif dengan para trader profesional berpengalaman, grup diskusi VIP harian, serta ulasan orderblock live langsung di ponsel Anda. Chat admin kami hari ini juga!
                  </p>
                  
                  <div className="pt-3">
                    <a
                      href="https://wa.me/6285536601150?text=Halo%20Admin%20Kara%20FX%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20mentoring%20VIP."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-zinc-950 text-white hover:bg-white hover:text-zinc-950 px-5 py-3 rounded-xl text-xs font-bold tracking-wide transition-all"
                    >
                      <span>Hubungi WhatsApp Admin</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* =========================================
            2. BLOG TRADING VIEW
        ========================================= */}
        {activeTab === 'blog' && (
          <div className="animate-fade-in py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Header Title */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 dark:text-emerald-400 font-bold">
                KAMPUS TRADING KARA FX
              </span>
              <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Blog Trading & Analisis Terkini
              </h1>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Kumpulan tulisan premium mengenai tren, pola candle, psikologi, hingga manajemen modal yang disusun agar mudah dimengerti trader pemula dan profesional.
              </p>
            </div>

            {/* Quick Filter Pill Controls + Search */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-150 pb-5 dark:border-zinc-900">
              <div className="flex items-center space-x-2.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                {(['All', 'Beginner', 'Advanced'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                      activeFilter === filter 
                        ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/10'
                        : 'bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white'
                    }`}
                  >
                    {filter === 'All' ? 'Semua Kategori' : filter}
                  </button>
                ))}
              </div>

              {/* Mini search to override global */}
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Cari dalam blog..."
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                  className="w-full text-xs rounded-xl border border-zinc-200 bg-white py-2 pl-9 pr-4 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                />
              </div>
            </div>

            {/* Grid List */}
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                  <BlogCard 
                    key={blog.id} 
                    blog={blog} 
                    onReadMore={(b) => setSelectedBlog(b)} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-zinc-100 dark:bg-zinc-900/30 dark:border-zinc-905">
                <HelpCircle className="h-10 w-10 text-zinc-300 dark:text-zinc-700 mx-auto mb-3" />
                <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Tidak ada artikel yang cocok</p>
                <p className="text-xs text-zinc-400 mt-1">Coba gunakan kata kunci pencarian atau filter yang lain.</p>
              </div>
            )}

          </div>
        )}

        {/* =========================================
            3. EBOOK KATALOG VIEW
        ========================================= */}
        {activeTab === 'ebooks' && (
          <div className="animate-fade-in py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Header Title */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 dark:text-emerald-400 font-bold">
                Katalog Produk Digital
              </span>
              <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Ebook Trading Pelat Premium
              </h1>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Investasi terbaik untuk memandu perkembangan karir trading forex Anda. Pembelian aman langsung dilayani secara instan oleh admin kami 24/7 via WhatsApp.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-150 pb-5 dark:border-zinc-900">
              <div className="flex items-center space-x-2">
                {(['All', 'Beginner', 'Advanced'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                      activeFilter === filter 
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400'
                    }`}
                  >
                    {filter === 'All' ? 'Semua Level' : filter}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Cari judul atau isi katalog..."
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                  className="w-full text-xs rounded-xl border border-zinc-200 bg-white py-2 pl-9 pr-4 text-zinc-900 outline-none focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                />
              </div>
            </div>

            {/* Grid List */}
            {filteredEbooks.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredEbooks.map((ebook) => (
                  <EbookCard key={ebook.id} ebook={ebook} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-zinc-100 dark:bg-zinc-900/30">
                <HelpCircle className="h-10 w-10 text-zinc-300 dark:text-zinc-700 mx-auto mb-3" />
                <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Tidak ada Ebook yang cocok</p>
                <p className="text-xs text-zinc-400 mt-1">Cuba ganti kata pencarian atau bersihkan filter di atas.</p>
              </div>
            )}

            {/* High Conversion Trust Block */}
            <div className="rounded-2xl border border-dashed border-emerald-500/30 bg-emerald-500/5 p-6 text-center space-y-3 dark:border-emerald-500/10">
              <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-400">
                Mengapa Membeli Ebook Trading di Kara FX?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-2">
                {[
                  { title: 'Pembelian Instan', text: 'Chat admin, bayar via QRIS/Transfer, dapatkan link PDF Google Drive dalam 1 menit.' },
                  { title: 'Materi Berkualitas', text: 'Ditulis dari basis jurnal dan data teknikal asli dari trader berlisensi.' },
                  { title: 'Amanah & Terpercaya', text: 'Lebih dari 10.000+ pembaca telah terbantu memahami SMC & Price Action.' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1 p-2 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-100 dark:border-zinc-900 shadow-xs">
                    <span className="block text-xs font-bold text-zinc-900 dark:text-white">{item.title}</span>
                    <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* =========================================
            4. JOURNAL & RESEARCH VIEW
        ========================================= */}
        {activeTab === 'journals' && (
          <div className="animate-fade-in py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Header Title */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-500 dark:text-emerald-400 font-bold">
                ACADEMIC RESEARCH & PAPERS
              </span>
              <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Jurnal & Research Paper Kara FX
              </h1>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Jelajahi tulisan ilmiah, studi statistik pasar valas jangka panjang, pemodelan data likuiditas, dan analisis manipulasi harga dari pakar riset kami.
              </p>
            </div>

            {/* Simple Search Override */}
            <div className="flex justify-end border-b border-zinc-150 pb-5 dark:border-zinc-900">
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Cari judul riset..."
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                  className="w-full text-xs rounded-xl border border-zinc-200 bg-white py-2 pl-9 pr-4 text-zinc-900 outline-none focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                />
              </div>
            </div>

            {/* Grid List */}
            {filteredJournals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredJournals.map((journal) => (
                  <JournalCard key={journal.id} journal={journal} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-zinc-100 dark:bg-zinc-900/30">
                <HelpCircle className="h-10 w-10 text-zinc-300 dark:text-zinc-700 mx-auto mb-3" />
                <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 font-mono">No journal articles match this query</p>
                <p className="text-xs text-zinc-400 mt-1">Gunakan kata kunci penulisan lain di kolom pencarian.</p>
              </div>
            )}

          </div>
        )}

      </main>

      {/* 🔮 ARTICLE DETAILED VIEW MODAL */}
      <BlogDetailModal 
        blog={selectedBlog} 
        onClose={() => setSelectedBlog(null)} 
      />

      {/* 💬 FLOATING WHATSAPP BUTTON (085536601150) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/6285536601150?text=Halo%20Kara%20FX%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%2C%20konsultasi%2C%20atau%20pembelian%20ebook%20trading%20Anda."
          target="_blank"
          rel="noopener noreferrer"
          id="floating-wa-button"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-all duration-300 hover:scale-115 active:scale-95 group relative"
          aria-label="Admin WhatsApp Contact"
        >
          {/* Pulsing glow ring around the float */}
          <span className="absolute inset-0 rounded-full bg-emerald-500/35 animate-ping -z-10 group-hover:block" />
          <MessageSquare className="h-6 w-6 fill-white/10" />

          {/* Quick notification bubble */}
          <span className="absolute -top-1.5 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white dark:border-zinc-950">
            1
          </span>

          {/* Tooltip on hover */}
          <span className="absolute right-16 bg-zinc-950 text-white font-medium text-xs py-1.5 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md dark:bg-white dark:text-zinc-950">
            Hubungi Admin (085536601150)
          </span>
        </a>
      </div>

      {/* 🧭 FOOTER */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
