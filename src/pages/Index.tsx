import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <Helmet>
        <title>Harsh Thakor — Business Analyst & Web Developer</title>
        <meta
          name="description"
          content="A portfolio showcasing data-driven solutions, workflow optimizations, and robust web applications."
        />
      </Helmet>
      
      <div className="min-h-screen text-foreground relative bg-transparent isolate overflow-hidden">
        {/* Deep Solid Background */}
        <div className="fixed inset-0 z-[-4] bg-zinc-50 dark:bg-[#030505] transition-colors duration-700" />
        
        {/* Soft Single Cursor Glow - Hidden on mobile because there is no cursor */}
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[-2] overflow-hidden mix-blend-multiply dark:mix-blend-screen opacity-40 dark:opacity-30">
          <motion.div
            className="absolute top-0 left-0 w-[150px] h-[150px] rounded-full bg-[#00BFA6] blur-[50px]"
            style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
          />
        </div>

        {/* Abstract Aurora / Glowing Orbs for Depth */}
        <div className="fixed top-[-10%] left-[-20%] w-[120vw] h-[120vw] md:w-[70vw] md:h-[70vw] rounded-full bg-teal-300/40 dark:bg-[#00BFA6]/20 blur-[90px] md:blur-[180px] z-[-3] animate-pulse mix-blend-multiply dark:mix-blend-screen" style={{ animationDuration: '12s' }} />
        <div className="fixed bottom-[-10%] right-[-20%] w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] rounded-full bg-cyan-300/40 dark:bg-[#00BFA6]/15 blur-[90px] md:blur-[180px] z-[-3] animate-pulse mix-blend-multiply dark:mix-blend-screen" style={{ animationDuration: '15s', animationDelay: '3s' }} />
        <div className="fixed top-[20%] right-[-10%] w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-emerald-400/30 dark:bg-teal-500/10 blur-[80px] md:blur-[150px] z-[-3] animate-pulse mix-blend-multiply dark:mix-blend-screen" style={{ animationDuration: '10s', animationDelay: '5s' }} />
        
        {/* Heavy Noise Overlay for Lo-Fi Texture */}
        <div className="fixed inset-0 z-[-1] opacity-[0.12] dark:opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;