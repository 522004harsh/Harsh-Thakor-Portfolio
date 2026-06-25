'use client';

import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Mail, Copy } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const email = "harshthakorwork@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    toast({
      description: (
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="font-medium">Email Copied to Clipboard</span>
        </div>
      ),
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto text-center space-y-16">
        <div className="relative mb-24 text-center py-8">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-9xl font-black text-foreground/[0.03] uppercase tracking-widest whitespace-nowrap"
            >
              CONTACT
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 flex items-center justify-center gap-4"
          >
            <div className="w-8 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-primary"></div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-foreground">
              Con<span className="text-primary">tact</span>
            </h2>
            <div className="w-8 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-primary"></div>
          </motion.div>
        </div>

          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter"
            >
              Let's <span className="text-primary italic">Work Together.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Main Email Button (Pill shape like the image) */}
              <motion.a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full border-2 border-primary text-foreground hover:bg-primary/5 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xl font-medium tracking-tight">Email</span>
              </motion.a>

              {/* Subtle Copy Option */}
              <button
                onClick={copyEmail}
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 opacity-60 hover:opacity-100"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy email</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
