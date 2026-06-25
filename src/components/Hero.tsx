'use client';

import { motion } from 'framer-motion';
import profileImage from '@/assets/profile.jpeg';

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center pb-8 pt-24 md:pt-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 relative">
          
          {/* Main Typography Area */}
          <div className="max-w-xl md:max-w-2xl lg:max-w-3xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg md:text-xl text-primary font-mono uppercase">
                Hello I'm
              </p>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-foreground uppercase"
            >
              HARSH<br />
              <span className="text-primary/90 italic font-serif">THAKOR.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg md:text-2xl font-light leading-relaxed text-muted-foreground max-w-xl mt-8 mb-12"
            >
              Transforming data into insights and building thoughtful, functional web platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="inline-flex flex-row items-center p-1.5 rounded-full bg-background/50 backdrop-blur-md border border-border shadow-sm w-fit"
            >
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-auto bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                View Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-auto px-6 sm:px-8 py-3 sm:py-4 font-medium hover:text-primary transition-colors text-foreground text-center text-sm sm:text-base whitespace-nowrap"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Right Side: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-sm md:max-w-md mx-auto md:mx-0 mt-12 md:mt-0"
          >
            <motion.div 
              animate={{ 
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%", 
                  "30% 70% 70% 30% / 30% 30% 70% 70%", 
                  "60% 40% 30% 70% / 60% 30% 70% 40%"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="aspect-square overflow-hidden bg-primary/5 border-2 border-primary/20 relative shadow-[0_0_40px_rgba(var(--primary),0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50 z-10 pointer-events-none"></div>
              <img 
                src={profileImage} 
                alt="Harsh Thakor" 
                className="w-full h-full object-cover relative z-0"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
