"use client";

import { motion, HTMLMotionProps } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface GradientButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  children: ReactNode;
  href?: string;
  className?: string;
  external?: boolean;
}

export const GradientButton = ({ children, href, className = '', external = false, ...props }: GradientButtonProps) => {
  const buttonClasses = `px-8 py-3 bg-gradient-to-r from-black-600 to-black-800 hover:from-violet-700 hover:to-black-900 text-white rounded-full font-heading font-medium transition-all duration-300 shadow-lg ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
};
