'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { achievements } from '@/lib/data';

export function AchievementsStrip() {
  const items = [...achievements, ...achievements];

  return (
    <section className="overflow-hidden border-y border-white/5 bg-slate-900/30 py-5">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 35, ease: 'linear' }}
      >
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400"
          >
            <Trophy className="h-4 w-4 shrink-0 text-cyan-400" />
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
