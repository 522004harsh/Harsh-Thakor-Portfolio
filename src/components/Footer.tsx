'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const email = "harshthakorwork@gmail.com";

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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  className="group relative w-10 h-10 rounded-full border-2 border-primary/30 hover:border-primary flex items-center justify-center overflow-hidden text-foreground hover:text-primary-foreground transition-colors duration-300 outline-none"
                  whileTap={{ scale: 0.95 }}
                  aria-label="Email options"
                >
                  <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
                  <Mail className="relative z-10 w-4 h-4" />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 p-2 rounded-xl border-primary/20 bg-background/95 backdrop-blur-md shadow-xl z-50 mb-2">
                <DropdownMenuItem asChild className="cursor-pointer rounded-lg px-3 py-2.5 hover:bg-primary/10 focus:bg-primary/10 transition-colors">
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} target="_blank" rel="noopener noreferrer" className="flex items-center w-full outline-none">
                    <Mail className="w-4 h-4 mr-3 text-primary" />
                    <span className="font-medium">Open in Gmail (Web)</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer rounded-lg px-3 py-2.5 hover:bg-primary/10 focus:bg-primary/10 transition-colors mt-1">
                  <a href={`mailto:${email}`} className="flex items-center w-full outline-none">
                    <svg className="w-4 h-4 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Open Default App</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
