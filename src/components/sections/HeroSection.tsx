"use client";

import { motion } from 'framer-motion';
import { VoiceWidget } from '@/components/VoiceWidget';
import { Navbar } from '@/components/Navbar';

interface HeroSectionProps {
  wsUrl: string;
  token: string;
  onError: (error: Error) => void;
}

export const HeroSection = ({ wsUrl, token, onError }: HeroSectionProps) => {

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex flex-col items-center px-4 bg-gradient-to-b from-brand-darkBlue to-brand-deeperBlue overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-4xl mx-auto pt-32 pb-24 md:pb-32"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-progressive-400 font-medium mb-6 inline-block px-4 py-2 bg-progressive-400/10 rounded-full"
          >
            Transforming Business With AI
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Custom AI Agents Through<br />
            Rich <span className="text-[#3B82F6]">Voice Experiences</span>
          </h1>
          <p className="text-xl text-brand-text-secondary mb-12 max-w-2xl mx-auto">
            We specialize in building tailored AI solutions that transform<br />
            how businesses communicate, operate, and deliver<br />
            value through innovative voice and web interactions.
          </p>

          {/* Voice Assistant Widget - Centered */}
          <div className="relative max-w-[600px] mx-auto mb-12">
            <VoiceWidget wsUrl={wsUrl} token={token} onError={onError} />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-full font-medium transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Call with a Human
          </motion.button>
          

        </motion.div>
      </section>
    </>
  );
};
