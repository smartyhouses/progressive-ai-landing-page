"use client";

import { motion } from 'framer-motion';

const features = [
  {
    title: "Natural Conversations",
    description: "Our AI agents engage in natural, context-aware conversations that feel human-like.",
  },
  {
    title: "Real-time Processing",
    description: "Lightning-fast response times with our advanced speech processing technology.",
  },
  {
    title: "Multi-voice Support",
    description: "Choose from a variety of natural-sounding voices to match your brand.",
  },
  {
    title: "Custom Training",
    description: "Train your AI agent with your business knowledge and brand voice.",
  },
  {
    title: "Analytics & Insights",
    description: "Detailed analytics to understand and improve customer interactions.",
  },
  {
    title: "Seamless Integration",
    description: "Easy integration with your existing systems and workflows.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-brand-deeperBlue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-progressive-100"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brand-text-secondary max-w-2xl mx-auto"
          >
            Everything you need to create exceptional voice experiences
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-brand-darkBlue border border-brand-border hover:border-progressive-500 transition-all hover:shadow-lg hover:shadow-progressive-500/10"
            >

              <h3 className="text-xl font-bold mb-2 text-brand-text-primary">{feature.title}</h3>
              <p className="text-brand-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-progressive-600 hover:bg-progressive-500 text-white rounded-full font-medium transition-colors"
          >
            Get Started
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
