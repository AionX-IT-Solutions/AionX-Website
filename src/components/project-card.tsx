'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Landmark } from 'lucide-react';
import type { Project } from '@/lib/data';
import { cn } from '@/lib/utils';

const categoryColors: Record<Project['category'], string> = {
  Web: 'from-blue-500/40 to-cyan-600/20',
  Mobile: 'from-violet-500/40 to-fuchsia-600/20',
  System: 'from-emerald-500/40 to-teal-600/20',
  Fintech: 'from-teal-500/30 to-cyan-900/20',
  LGU: 'from-cyan-500/35 via-violet-600/25 to-slate-900/40',
};

export function ProjectCard({
  project,
  index,
  large,
}: {
  project: Project;
  index: number;
  large?: boolean;
}) {
  const Wrapper = project.href ? 'a' : 'article';
  const linkProps = project.href
    ? {
        href: project.href,
        target: '_blank' as const,
        rel: 'noopener noreferrer',
      }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={cn(large && 'lg:col-span-2')}
    >
      <Wrapper
        {...linkProps}
        className={cn(
          'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 glass transition hover:border-cyan-500/30 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)]',
        )}
      >
        <div
          className={cn(
            'relative flex min-h-[140px] items-end overflow-hidden bg-gradient-to-br p-6',
            categoryColors[project.category],
            large && 'min-h-[180px]',
          )}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
          {project.lguHighlight && (
            <Landmark className="absolute right-4 top-4 h-8 w-8 text-cyan-400/35" />
          )}
          <div className="relative flex flex-wrap gap-2">
            <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-cyan-200 backdrop-blur">
              {project.category}
            </span>
            {project.year && (
              <span className="rounded-full bg-black/40 px-3 py-1 text-xs text-slate-400">
                {project.year}
              </span>
            )}
            {project.lguHighlight && (
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-200">
                LGU
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 lg:p-7">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold leading-snug transition group-hover:text-cyan-300">
              {project.title}
            </h3>
            {project.href && (
              <ArrowUpRight className="h-5 w-5 shrink-0 text-cyan-400 opacity-70 transition group-hover:opacity-100" />
            )}
          </div>
          {project.client && <p className="mt-1 text-sm text-violet-300/90">{project.client}</p>}
          <p className="mt-3 flex-1 text-sm text-slate-400 leading-relaxed">
            {project.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-500"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </motion.div>
  );
}
