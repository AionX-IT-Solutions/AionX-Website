'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';
import { SectionHeading } from './section-heading';

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <SectionHeading
        eyebrow="What we offer"
        title="End-to-end IT services for growing teams"
        description="From PhilGEPS-ready LGU builds to fintech and ride-hailing — full-stack delivery with polished UX and motion."
      />

      <div className="mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.id}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={cn(
                'group relative overflow-hidden rounded-3xl border border-white/10 p-8',
                'bg-gradient-to-br transition-shadow duration-300',
                service.gradient,
                'hover:shadow-2xl hover:shadow-cyan-500/10',
              )}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-2xl transition group-hover:bg-cyan-400/10" />
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-5 inline-flex rounded-2xl bg-white/10 p-3 ring-1 ring-white/10"
                >
                  <Icon className="h-7 w-7 text-cyan-300" />
                </motion.div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-slate-400 leading-relaxed">{service.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.highlights.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
