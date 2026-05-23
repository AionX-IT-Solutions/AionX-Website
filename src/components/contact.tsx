'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/lib/data';
import { SectionHeading } from './section-heading';

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="section-padding">
      <SectionHeading
        eyebrow="Contact"
        title="Ready to build something great?"
        description="LGU procurement, startup MVPs, or enterprise systems — we will reply within one business day."
      />

      <div className="mx-auto mt-16 grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="font-medium hover:text-cyan-300">
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-slate-500">Mobile</p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="font-medium hover:text-violet-300"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-medium">{siteConfig.location}</p>
                <p className="mt-1 text-sm text-slate-500">{siteConfig.founder}</p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-strong glow-ring space-y-5 rounded-3xl p-8"
        >
          {sent ? (
            <div className="py-12 text-center">
              <p className="text-2xl font-semibold text-gradient">Salamat!</p>
              <p className="mt-2 text-slate-400">
                We received your message and will get back to you soon.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm text-slate-400">Name</span>
                  <input
                    required
                    name="name"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-slate-400">Organization</span>
                  <input
                    name="company"
                    placeholder="LGU / Company"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-500/50"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm text-slate-400">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-500/50"
                />
              </label>
              <label className="block">
                <span className="text-sm text-slate-400">Project type</span>
                <select
                  name="type"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
                >
                  <option value="lgu">LGU / Government</option>
                  <option value="web">Website</option>
                  <option value="mobile">Mobile app</option>
                  <option value="fintech">Fintech / System</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm text-slate-400">Message</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-500/50"
                />
              </label>
              <button
                type="submit"
                className="btn-primary flex w-full items-center justify-center gap-2 py-4"
              >
                Send message
                <Send className="h-4 w-4" />
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}
