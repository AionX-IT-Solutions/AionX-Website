'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 rounded-full bg-cyan-500 p-3 shadow-lg transition-opacity duration-300 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <ArrowUp className="h-6 w-6 text-white" />
    </button>
  );
}
