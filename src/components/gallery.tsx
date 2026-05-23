'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { gallery } from '@/lib/data';
import { cn } from '@/lib/utils';
import { SectionHeading } from './section-heading';

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  const activeItem = gallery.find((g) => g.id === active);

  return (
    <section id="gallery" className="section-padding relative">
      <SectionHeading
        eyebrow="Gallery"
        title="Behind the builds — events, LGU work & wins"
        description="Live pitches, hackathon championships, team moments, and on-the-ground government consultations."
      />

      <div className="mx-auto mt-14 grid max-w-7xl auto-rows-[200px] grid-cols-2 gap-3 px-4 sm:grid-cols-4 sm:gap-4 lg:px-8">
        {gallery.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.03, zIndex: 10 }}
            onClick={() => setActive(item.id)}
            className={cn(
              'group relative overflow-hidden rounded-2xl border border-white/10 text-left',
              item.span === 'wide' && 'col-span-2 row-span-1 sm:row-span-2',
              item.span === 'tall' && 'row-span-2',
            )}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent opacity-90" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-cyan-500/0 transition group-hover:bg-cyan-500/10"
              whileHover={{ opacity: 1 }}
            >
              <ZoomIn className="h-10 w-10 text-white opacity-0 transition group-hover:opacity-100" />
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-0.5 line-clamp-2 text-xs text-slate-400">{item.caption}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]/95 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 glow-ring"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                className="absolute right-4 top-4 z-10 rounded-full bg-black/80 p-2 text-white hover:bg-cyan-600"
                onClick={() => setActive(null)}
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative aspect-[4/3] w-full sm:aspect-video">
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  className="object-contain bg-black"
                  sizes="100vw"
                />
              </div>
              <div className="border-t border-white/10 bg-slate-950 p-6">
                <h3 className="text-xl font-bold text-gradient">{activeItem.title}</h3>
                <p className="mt-2 text-slate-400">{activeItem.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
