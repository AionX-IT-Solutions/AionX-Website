import { AchievementsStrip } from '@/components/achievements-strip';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Gallery } from '@/components/gallery';
import { Hero } from '@/components/hero';
import { LGUShowcase } from '@/components/lgu-showcase';
import { Navbar } from '@/components/navbar';
import { Process } from '@/components/process';
import { Projects } from '@/components/projects';
import { Services } from '@/components/services';
import { TechMarquee } from '@/components/tech-marquee';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <AchievementsStrip />
        <Services />
        <LGUShowcase />
        <Projects />
        <Gallery />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
