'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from 'framer-motion';
import { X } from 'lucide-react';
import PortfolioCard from './PortfolioCard';
import portfolioInstagramPost from '@/assets/portfolio-instagram-post.png';
import portfolioBusinessCard from '@/assets/portfolio-business-card.png';
import portfolioElearning from '@/assets/portfolio-elearning.png';
import portfolioIdcard from '@/assets/portfolio-idcard.png';
import portfolioMarketingFlyer from '@/assets/portfolio-marketing-flyer.png';
import portfolioCookieBranding from '@/assets/portfolio-cookie-branding.jpg';
import portfolioTshirt from '@/assets/portfolio-tshirt.png';
import portfolioBrochure from '@/assets/portfolio-brochure.png';
import portfolioCertificate from '@/assets/portfolio-certificate.jpg';
import portfolioSugarcaneLogo from '@/assets/portfolio-sugarcane-logo.jpg';
import portfolioDxdTradersLogo from '@/assets/portfolio-dxd-traders-logo.jpg';
import portfolioStandee from '@/assets/portfolio-standee.png';
import portfolioDiary from '@/assets/portfolio-diary.jpg';
import portfolioMagazine from '@/assets/portfolio-magazine.jpg';
import portfolioChatbotLogo from '@/assets/portfolio-chatbot-logo.jpg';
import portfolioArkaExportsLogo from '@/assets/portfolio-arka-exports-logo.jpg';
import portfolioMottoLogo from '@/assets/portfolio-motto-logo.jpg';
import portfolioOrdinaryGuyLogo from '@/assets/portfolio-ordinary-guy-logo.png';
import portfolioPoster from '@/assets/portfolio-poster.png';
import portfolioKrishiSarthLogo from '@/assets/portfolio-krishi-sarth-logo.jpg';
import portfolioBadge from '@/assets/portfolio-badge.jpg';
import portfolioDropdownBanner from '@/assets/portfolio-dropdown-banner.jpg';
import portfolioDiabetesNavigator from '@/assets/portfolio-diabetes-navigator.png';
import portfolioSelfLearning from '@/assets/portfolio-self-learning.jpg';
import portfolioDocmorph from '@/assets/portfolio-docmorph.png';
import portfolioContractFarming from '@/assets/portfolio-contract-farming.png';
import portfolioSmartInventory from '@/assets/portfolio-smart-inventory.png';
import portfolioEcommerce from '@/assets/portfolio-ecommerce.png';
import portfolioRebyte from '@/assets/portfolio-rebyte.png';


interface WorkItem {
  id: number;
  title: string;
  category: string;
  mediaType: 'Software Projects';
  description: string;
  tags: string[];
  gradient: string;
  image?: any;
  containImage?: boolean;
  customBg?: string;
  radialVariant?: 'center' | 'top-right' | 'bottom-left' | 'none';
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: 'Contract Farming Platform',
    category: 'Web Application',
    mediaType: 'Software Projects',
    description: 'A dedicated platform connecting farmers with buyers to facilitate contract farming agreements, ensuring transparency and better pricing.',
    tags: ['Web Development', 'Agriculture', 'Platform'],
    gradient: 'from-teal-900/80 via-cyan-800/80 to-zinc-900/80',
    image: portfolioContractFarming,
  },
  {
    id: 2,
    title: 'Smart Inventory Management System',
    category: 'Data & Analytics',
    mediaType: 'Software Projects',
    description: 'An intelligent system designed to track inventory levels, analyze trends, and optimize supply chain operations efficiently.',
    tags: ['Inventory', 'Data Analytics', 'Management'],
    gradient: 'from-cyan-800/80 via-teal-900/80 to-slate-800/80',
    image: portfolioSmartInventory,
  },
  {
    id: 3,
    title: 'E-Commerce Website',
    category: 'Web Application',
    mediaType: 'Software Projects',
    description: 'A full-featured e-commerce platform with a dynamic product catalog, secure payment gateways, and a smooth user experience.',
    tags: ['E-Commerce', 'Full Stack', 'Web App'],
    gradient: 'from-zinc-900/80 via-cyan-800/80 to-teal-900/80',
    image: portfolioEcommerce,
  },
  {
    id: 4,
    title: 'ReByte',
    category: 'Software Solution',
    mediaType: 'Software Projects',
    description: 'A modern software solution focused on optimizing data processing and workflow automation for better business efficiency.',
    tags: ['Software', 'Automation', 'Workflow'],
    gradient: 'from-slate-800/80 via-zinc-900/80 to-teal-900/80',
    image: portfolioRebyte,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Work = () => {
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <div className="relative mb-24 text-center py-8">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-9xl font-black text-foreground/[0.03] uppercase tracking-widest whitespace-nowrap"
            >
              PORTFOLIO
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
              Port<span className="text-primary">folio</span>
            </h2>
            <div className="w-8 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-primary"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {workItems
            .filter((item) => item.mediaType === 'Software Projects')
            .map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PortfolioCard
                  title={item.title}
                  category={item.category}
                  description={item.description}
                  tags={item.tags}
                  gradient={item.gradient}
                  image={item.image}
                  containImage={item.containImage}
                  customBg={item.customBg}
                  radialVariant={item.radialVariant}
                  onClick={() => setSelectedItem(item)}
                />
              </motion.div>
            ))}
        </div>
      </div>

        {/* Full Image Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedItem(null)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

              {/* Modal Content */}
              <motion.div
                className="relative z-10 max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden border border-border bg-card shadow-2xl"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image */}
                <div className="flex-1 overflow-auto bg-muted/30">
                  {selectedItem.image && (
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-auto object-contain"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="p-6 border-t border-border">
                  <p className="text-label text-primary text-sm mb-1">{selectedItem.category}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{selectedItem.title}</h3>
                  <p className="text-sm text-muted-foreground">{selectedItem.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  );
};

export default Work;
