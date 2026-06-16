import React from 'react';
import { TrendingUp, BookOpen, FileText, Search, Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  globalSearch: string;
  setGlobalSearch: (val: string) => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  isDarkMode,
  setIsDarkMode,
  globalSearch,
  setGlobalSearch,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: TrendingUp },
    { id: 'blog', label: 'Blog Trading', icon: BookOpen },
    { id: 'ebooks', label: 'Katalog Ebook', icon: FileText },
    { id: 'journals', label: 'Journal & Research', icon: FileText },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo */}
          <div 
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
            className="flex cursor-pointer items-center space-x-2.5 group shrink-0"
            id="nav-logo"
          >
            <BrandLogo size={42} className="shadow-md shadow-emerald-950/15" />
            <div className="flex flex-col justify-center leading-none shrink-0">
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white whitespace-nowrap leading-none block">
                Kara <span className="text-black dark:text-white">FX</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase whitespace-nowrap leading-none block mt-1.5">
                SMART TRADING
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1 shrink-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center whitespace-nowrap space-x-1 px-2 py-2 lg:px-3 text-xs lg:text-sm font-medium transition-all duration-200 rounded-lg ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-900/60'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box & Controls */}
          <div className="hidden lg:flex items-center relative max-w-[180px] xl:max-w-xs w-full">
            <Search className="absolute left-3 h-4.5 w-4.5 text-zinc-400" />
            <input
              type="text"
              id="global-search-input"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="Cari artikel, ebook, jurnal..."
              className="w-full text-xs rounded-xl border border-zinc-200 bg-zinc-50/50 py-2 pl-9 pr-4 text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-500/15 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-emerald-500/80 dark:focus:bg-zinc-950"
            />
            {globalSearch && (
              <button 
                onClick={() => setGlobalSearch('')}
                className="absolute right-3.5 text-zinc-400 hover:text-zinc-600 text-xs font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Right Section Tools */}
          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <button
               id="dark-mode-toggle"
               onClick={() => setIsDarkMode(!isDarkMode)}
               className="p-2.5 rounded-xl border border-zinc-100 hover:border-zinc-200 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white transition-all duration-200 cursor-pointer"
               aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-4.5 w-4.5 text-amber-400" /> : <Moon className="h-4.5 w-4.5 text-zinc-600" />}
            </button>

            {/* Quick Contact WhatsApp CTA Button */}
            <a
              href="https://wa.me/6285536601150?text=Halo%20Kara%20FX%2C%20saya%20tertarik%20dengan%20layanan%20dan%20ebook%20trading%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              id="nav-wa-cta"
              className="hidden sm:flex items-center space-x-1 bg-zinc-900 text-white hover:bg-emerald-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-emerald-500 dark:hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shadow-sm"
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 md:hidden rounded-xl text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-900"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-4 py-4 dark:border-zinc-900 dark:bg-zinc-950 space-y-3 shadow-xl transition-all duration-300">
          {/* Mobile search */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              id="mobile-search-input"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="Cari disini..."
              className="w-full text-xs rounded-xl border border-zinc-200 bg-zinc-50 py-2 pl-9 pr-4 text-zinc-900 outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            />
          </div>

          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex w-full items-center space-x-3 px-3 py-3 rounded-xl text-sm font-medium ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
                      : 'text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-900/60'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
            <a
              href="https://wa.me/6285536601150?text=Halo%20Kara%20FX%2C%20saya%20tertarik%20dengan%20layanan%20dan%20ebook%20trading%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl text-sm font-semibold transition-all"
            >
              <span>WhatsApp Admin (085536601150)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
