'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Shield } from 'lucide-react';
import { siteConfig } from '@/lib/data';

export function PhilGEPSBadge({ compact = false }: { compact?: boolean }) {
  const { philgeps } = siteConfig;

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-200"
      >
        <BadgeCheck className="h-4 w-4 text-cyan-400" />
        {philgeps.label}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      className="glass glow-ring overflow-hidden rounded-3xl p-8 md:p-10"
    >
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 shadow-lg shadow-cyan-500/30"
        >
          <Shield className="h-10 w-10 text-slate-950" strokeWidth={2} />
        </motion.div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold text-gradient md:text-3xl">{philgeps.label}</h3>
            <BadgeCheck className="h-8 w-8 text-cyan-400" />
          </div>
          <p className="mt-3 max-w-2xl text-slate-400 leading-relaxed">{philgeps.description}</p>
          <p className="mt-4 font-mono text-sm text-violet-300/90">
            Government procurement · LGU & agency IT projects · Compliance-ready deliverables
          </p>
        </div>
      </div>
    </motion.div>
  );
}
