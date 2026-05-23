'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={cn('mx-auto max-w-3xl px-4', align === 'center' && 'text-center', className)}
    >
      <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-slate-400">{description}</p>}
    </motion.div>
  );
}
