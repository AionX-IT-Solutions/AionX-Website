'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ProjectCard } from './project-card';
import { SectionHeading } from './section-heading';

const filters = ['All', 'LGU', 'Web', 'Mobile', 'System', 'Fintech'] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.06),transparent_70%)]" />

      <SectionHeading
        eyebrow="Portfolio"
        title="Projects we're proud of"
        description="Fintech, ride-hailing, legislative systems, and live links — built from real delivery history."
      />

      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-2 px-4">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              'relative rounded-full px-5 py-2 text-sm font-medium transition',
              filter === f ? 'text-slate-950' : 'text-slate-400 hover:text-slate-200',
            )}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-12 grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8"
        >
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              large={project.featured && i === 0 && filter === 'All'}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
