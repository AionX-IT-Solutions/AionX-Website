'use client';

import { useEffect, useRef } from 'react';

export const HERO_VIDEO = '/videos/1.mov';

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = HERO_VIDEO;
    video.load();

    const play = () => {
      void video.play().catch(() => {});
    };

    play();
    video.addEventListener('canplay', play);
    return () => video.removeEventListener('canplay', play);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-[#030712]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/50 to-[#030712]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/40 via-transparent to-[#030712]" />
    </div>
  );
}
