'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { BrandLogo } from './brand-logo';
import { PhilGEPSBadge } from './philgeps-badge';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8',
          'glass-strong glow-ring rounded-2xl px-4 py-2.5 sm:px-5',
        )}
        aria-label="Main"
      >
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <BrandLogo size="sm" animated={false} transparent />
          <span className="hidden font-semibold tracking-tight sm:inline">
            Aion<span className="text-cyan-400">X</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-slate-400 transition hover:text-cyan-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <PhilGEPSBadge compact />
          <a href="#contact" className="btn-primary px-5 py-2 text-sm">
            Contact
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 hover:bg-white/5 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={open ? 'open' : 'closed'}
        variants={{
          open: { height: 'auto', opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        className="overflow-hidden lg:hidden"
      >
        <div className="mx-4 mt-2 glass-strong rounded-2xl p-4">
          <div className="mb-4">
            <PhilGEPSBadge compact />
          </div>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2.5 text-slate-200"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn-primary mt-2 block py-3 text-center"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </header>
  );
}
