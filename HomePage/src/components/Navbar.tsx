import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import acdyonLogo from '../assets/acdyon-logo.png';

const navLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Find Your Path', href: '#path-finder' },
  { label: 'Why AcdyOn', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-[#11151b]/15 bg-[#f4f3f0]">
      <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex shrink-0 items-center" aria-label="AcdyOn home">
          <img
            src={acdyonLogo}
            alt="AcdyOn"
            className="h-11 w-11 rounded-[10px] object-cover sm:h-12 sm:w-12"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="header-link whitespace-nowrap">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#path-finder"
          className="hidden items-center gap-1.5 rounded-full bg-[#11151b] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3e505d] sm:inline-flex"
        >
          Find your path <ArrowRight size={14} />
        </a>

        <button
          type="button"
          className="rounded-full border border-[#11151b]/25 p-2 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#11151b]/15 px-5 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-white/70"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#path-finder"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#11151b] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Find your path <ArrowRight size={16} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
