'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/lib/data';

export function TechMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <section className="overflow-hidden border-y border-white/5 py-12">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
      >
        {items.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <span
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2 text-2xl font-semibold text-slate-600 transition hover:text-slate-400"
            >
              <Icon className="w-7 h-7" />
              {tech.name}
            </span>
          );
        })}
      </motion.div>
    </section>
  );
}
