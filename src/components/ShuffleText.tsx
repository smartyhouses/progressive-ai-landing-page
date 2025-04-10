"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShuffleTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export const ShuffleText = ({ texts, interval = 3000, className = '' }: ShuffleTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // First make the current text disappear
      setIsVisible(false);
      
      // After animation completes, change the text and make it appear
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 300); // This should match the exit animation duration
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {texts[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};
