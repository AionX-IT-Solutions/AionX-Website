'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { siteConfig, stats } from '@/lib/data';
import { HeroBackgroundVideo } from './hero-background-video';

import { PhilGEPSBadge } from './philgeps-badge';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20">
      <HeroBackgroundVideo />
      <div className="noise pointer-events-none absolute inset-0 z-0 opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.div custom={0} variants={fadeUp} className="mb-6">
            <PhilGEPSBadge compact />
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-200 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Web · Mobile · LGU Systems · Fintech
          </motion.div>

          <motion.h1
            custom={2}
            variants={fadeUp}
            className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            We build <span className="text-gradient">digital products</span> that move your business
            forward
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg text-slate-300 md:text-xl"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="btn-primary group inline-flex items-center gap-2 px-8 py-4 transition hover:scale-[1.02]"
            >
              Get a free quote
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 font-medium text-slate-200 backdrop-blur transition hover:bg-white/10"
            >
              <Play className="h-4 w-4 fill-current" />
              View our work
            </a>
          </motion.div>

          <motion.ul
            custom={5}
            variants={fadeUp}
            className="mt-14 grid w-full grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((stat, idx) => (
              <motion.li
                key={stat.label}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ delay: idx * 0.02 }}
                className="glass glow-ring rounded-2xl px-3 py-4 text-center backdrop-blur-md"
              >
                <p className="text-xl font-bold text-gradient sm:text-2xl">{stat.value}</p>
                <p className="mt-0.5 text-xs text-slate-400">{stat.label}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <PhilGEPSBadge />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-10 w-6 rounded-full border border-white/20 bg-black/30 p-1 backdrop-blur"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
