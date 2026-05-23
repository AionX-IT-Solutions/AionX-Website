'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { lguRegions, projects } from '@/lib/data';
import { SectionHeading } from './section-heading';

const lguProjects = projects.filter((p) => p.lguHighlight);

export function LGUShowcase() {
  return (
    <section id="lgu" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_55%)]" />

      <SectionHeading
        eyebrow="Government & LGU"
        title="Trusted across Ilocos — Sinait, Santa, Laoag & Provincial Jail"
        description="PhilGEPS-accredited delivery for local government units — from official websites to correctional and legislative systems."
      />

      <div className="relative mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lguRegions.map((region, i) => {
            const Icon = region.icon;
            return (
              <motion.li
                key={region.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass glow-ring rounded-2xl p-6 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/25 to-violet-500/20"
                >
                  <Icon className="h-7 w-7 text-cyan-300" />
                </motion.div>
                <p className="font-semibold leading-snug">{region.name}</p>
                <p className="mt-1 flex items-center justify-center gap-1 text-sm text-slate-500">
                  <MapPin className="h-3 w-3" />
                  {region.province}
                </p>
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {lguProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950 p-8"
            >
              <div className="absolute right-0 top-0 h-32 w-32 bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-500/20" />
              <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-medium text-cyan-300">
                LGU Highlight
              </span>
              <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
              {project.client && (
                <p className="mt-1 text-sm text-violet-300/90">{project.client}</p>
              )}
              <p className="mt-3 text-slate-400">{project.description}</p>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-cyan-300 hover:text-cyan-200"
                >
                  Visit live site
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
