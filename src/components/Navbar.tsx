"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { GradientButton } from './ui/GradientButton';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-darkBlue/95 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/progressive_ai_logo.png" alt="Portal" width={32} height={32} className="h-8 w-auto" />
              <Image src="/progressive AI_text logo.png" alt="Portal" width={120} height={24} className="h-6 w-auto" />
            </Link>
          </div>

          {/* Navigation and CTA container */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-heading text-white hover:text-[#3B82F6] transition-colors"
              >
                Можем
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-sm font-heading text-white hover:text-[#3B82F6] transition-colors"
              >
                Умеем
              </button>
            </nav>

            {/* Book a Call Button */}
            <GradientButton
              href="https://portalos.ru"
              className="px-6 py-2.5 text-sm"
              external
            >
              Связь
            </GradientButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white hover:text-progressive-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-brand-darkBlue/95 backdrop-blur-lg"
            >
              <div className="flex flex-col py-4 space-y-4 px-4">
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white font-heading hover:text-[#3B82F6] transition-colors text-left"
                >
                  Умеем
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-white font-heading hover:text-[#3B82F6] transition-colors text-left"
                >
                  Умеем
                </button>
                <GradientButton 
                  href="https://portalos.ru" 
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-2.5 text-sm inline-block"
                  external
                >
                  Связь
                </GradientButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
