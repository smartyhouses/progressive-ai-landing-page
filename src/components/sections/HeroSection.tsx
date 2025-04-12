"use client";

import { motion } from 'framer-motion';
import { VoiceWidget } from '@/components/VoiceWidget';
import { Navbar } from '@/components/Navbar';
import { ShuffleText } from '@/components/ShuffleText';
import { GradientButton } from '@/components/ui/GradientButton';

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
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"/>
        
        {/* Floating circles background animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.div
            className="absolute bottom-1/3 -right-20 w-60 h-60 rounded-full bg-purple-500/10 blur-xl"
            animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-4xl mx-auto pt-20 pb-24 md:pb-32 flex flex-col items-center"
        >
          {/* Voice Assistant Widget - Positioned with floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
            transition={{ 
              delay: 0.2, 
              duration: 0.5,
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }
            }}
            className="relative mx-auto mb-16 z-20"
            style={{ marginTop: '20px' }}
          >
            <VoiceWidget wsUrl={wsUrl} token={token} onError={onError} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-progressive-400 font-heading font-medium mb-6 inline-block px-4 py-2 bg-progressive-400/10 rounded-full"
          >
            Трансформируем пизднес
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 text-white">
            ИИ, в котором есть правда<br />
            <ShuffleText 
              texts={[
                "Мультимодальные агенты, которые позволят Вам общаться с Вашей техникой на естественном языке",
                "Разпознавание и создание фото и видео",
                "Постоянная память и профилирование пользователя",
                "Использование на любом устройстве",
                "И еще, и еще"
              ]}
              className="text-[#8a1896] inline-block"
            />
          </h1>
          <p className="text-base sm:text-lg text-brand-text-secondary mb-8 max-w-2xl mx-auto font-sans">
            Мультимодальные агенты, которые позволят Вам общаться с Вашей техникой на естественном языке.
          </p>



          <GradientButton
            href="https://portalos.ru"
            external
          >
            Гудни нам
          </GradientButton>
          
          {/* Decorative elements floating at the bottom of the circle */}
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-progressive-400/10 pointer-events-none z-0" />
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-progressive-400/5 pointer-events-none z-0" />
          
          {/* Floating elements at the bottom of the circle */}
          <motion.div
            className="absolute top-[53%] left-[46%] w-16 h-16 rounded-full bg-violet-500/20 blur-md"
            animate={{ y: [-5, 5, -5], x: [-5, 5, -5], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.div
            className="absolute top-[56%] left-[54%] w-12 h-12 rounded-full bg-purple-500/20 blur-md"
            animate={{ y: [5, -5, 5], x: [5, -5, 5], scale: [1.05, 0.95, 1.05] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.div
            className="absolute top-[54%] left-[50%] w-8 h-8 rounded-full bg-cyan-500/20 blur-sm"
            animate={{ y: [0, 8, 0], x: [0, -8, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          />
          {/* Additional smaller floating elements */}
          <motion.div
            className="absolute top-[52%] left-[52%] w-6 h-6 rounded-full bg-pink-500/20 blur-sm"
            animate={{ y: [-3, 3, -3], x: [3, -3, 3], scale: [1, 1.15, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.div
            className="absolute top-[55%] left-[48%] w-5 h-5 rounded-full bg-indigo-500/20 blur-sm"
            animate={{ y: [2, -2, 2], x: [-2, 2, -2], scale: [1.1, 0.9, 1.1] }}
            transition={{ duration: 3.5, repeat: Infinity, repeatType: 'reverse' }}
          />

        </motion.div>
      </section>
    </>
  );
};
