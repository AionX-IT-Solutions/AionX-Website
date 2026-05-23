import { navLinks, siteConfig } from '@/lib/data';
import { BrandLogo } from './brand-logo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <BrandLogo size="md" animated={false} transparent />
          <div>
            <p className="font-bold">{siteConfig.name}</p>
            <p className="text-sm text-slate-500">{siteConfig.tagline}</p>
            <p className="mt-1 text-xs text-cyan-400/90">{siteConfig.philgeps.label}</p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-6 text-sm text-slate-400">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-cyan-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-slate-500">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
