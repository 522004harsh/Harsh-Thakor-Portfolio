'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const emailHref = "mailto:harshthakorwork@gmail.com";

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 border-t border-primary/20 dark:border-primary/40"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <motion.a
              href={emailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 rounded-full border-2 border-primary/30 hover:border-primary flex items-center justify-center overflow-hidden text-foreground hover:text-primary-foreground transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <Mail className="relative z-10 w-4 h-4" />
            </motion.a>
            <motion.a
              href="http://linkedin.com/in/harsh-thakor-a7bab8255"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-10 h-10 rounded-full border-2 border-[#0077B5]/30 hover:border-[#0077B5] flex items-center justify-center overflow-hidden text-foreground hover:text-white transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <span className="absolute inset-0 bg-[#0077B5] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <Linkedin className="relative z-10 w-4 h-4" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-1">
            <p className="text-sm text-foreground">
              © {currentYear} Harsh Thakor
            </p>
            <p className="text-xs text-muted-foreground">
              Designed & Built with passion
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
