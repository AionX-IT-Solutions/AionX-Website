'use client';

import { motion } from 'framer-motion';

const orbs = [
  { size: 320, x: '10%', y: '20%', color: 'rgba(34,211,238,0.12)', delay: 0 },
  { size: 280, x: '75%', y: '15%', color: 'rgba(167,139,250,0.1)', delay: 1 },
  { size: 200, x: '60%', y: '70%', color: 'rgba(34,211,238,0.08)', delay: 2 },
  { size: 160, x: '20%', y: '65%', color: 'rgba(99,102,241,0.08)', delay: 0.5 },
];

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
