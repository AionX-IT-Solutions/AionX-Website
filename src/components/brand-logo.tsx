'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type BrandLogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  animated?: boolean;
  transparent?: boolean;
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: { wh: 44, className: 'h-9 w-9 sm:h-11 sm:w-11' },
  md: { wh: 56, className: 'h-14 w-14' },
  lg: { wh: 160, className: 'h-28 w-28 sm:h-32 sm:w-32' },
  hero: { wh: 360, className: 'h-auto w-full max-w-[min(100%,320px)]' },
};

export function BrandLogo({
  size = 'md',
  animated = true,
  transparent = true,
  className,
  priority = false,
}: BrandLogoProps) {
  const s = sizes[size];
  const useKnockout = !transparent;

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      {animated && size === 'hero' && (
        <>
          <div className="animate-logo-glow absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute inset-[15%] rounded-full bg-violet-500/10 blur-2xl" />
        </>
      )}
      <motion.div
        animate={animated ? { y: [0, -8, 0] } : undefined}
        transition={animated ? { repeat: Infinity, duration: 5, ease: 'easeInOut' } : undefined}
        className="relative z-10"
      >
        <Image
          src="/images/brand/logo.png"
          alt="AionX IT Solutions"
          width={s.wh}
          height={s.wh}
          priority={priority}
          className={cn(
            s.className,
            'object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.45)]',
            useKnockout && 'logo-knockout',
          )}
        />
      </motion.div>
    </div>
  );
}
