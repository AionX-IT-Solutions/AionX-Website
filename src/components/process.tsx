'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/data';
import { SectionHeading } from './section-heading';

export function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06),transparent_65%)]" />

      <SectionHeading
        eyebrow="How we work"
        title="A clear path from concept to launch"
        description="Transparent milestones, weekly demos, and documentation you can hand to your team — from LGU bids to startup launches."
      />

      <div className="relative mx-auto mt-16 max-w-5xl px-4">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-8 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-cyan-500/60 via-violet-500/35 to-transparent md:left-1/2 md:block"
        />

        <ol className="space-y-12 md:space-y-16">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid gap-6 md:grid-cols-2 md:gap-12"
              >
                <motion.div
                  whileInView={{ scale: [0.9, 1.05, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`md:col-span-1 ${isEven ? 'md:text-right md:pr-14' : 'md:col-start-2 md:pl-14'}`}
                >
                  <span className="font-mono text-sm text-cyan-400">{step.step}</span>
                  <h3 className="mt-1 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-slate-400 leading-relaxed">{step.description}</p>
                </motion.div>

                <div
                  className={`flex items-center ${isEven ? 'md:justify-start md:pl-14' : 'md:col-start-1 md:row-start-1 md:justify-end md:pr-14'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    className="glass glow-ring flex h-16 w-16 items-center justify-center rounded-2xl md:h-[4.5rem] md:w-[4.5rem]"
                  >
                    <Icon className="h-8 w-8 text-cyan-300" />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 260, delay: i * 0.1 }}
                  className="absolute left-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-[#030712] shadow-[0_0_20px_rgba(34,211,238,0.6)] md:left-1/2 md:block"
                />
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
