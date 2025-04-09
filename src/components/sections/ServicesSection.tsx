"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Voice AI Agents",
    description: "Custom voice assistants that understand context and deliver natural conversations.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M19 12C19 11.1971 18.8776 10.4145 18.6484 9.67706C18.5677 9.39689 18.6782 9.09884 18.9307 8.91513L20.4983 7.7501C20.8161 7.51194 20.9106 7.07666 20.7291 6.71473C19.9727 5.14679 18.8533 3.77616 17.4755 2.71978C17.1378 2.47231 16.6748 2.48907 16.3592 2.76045L14.8274 4.0952C14.5778 4.31066 14.2359 4.36958 13.9376 4.25298C13.3388 4.0177 12.6852 3.87565 12 3.87565C11.3148 3.87565 10.6612 4.0177 10.0624 4.25298C9.76415 4.36958 9.42216 4.31066 9.17259 4.0952L7.64076 2.76045C7.32517 2.48907 6.86223 2.47231 6.52447 2.71978C5.14674 3.77616 4.02731 5.14679 3.27089 6.71473C3.08936 7.07666 3.18393 7.51194 3.50172 7.7501L5.06927 8.91513C5.32177 9.09884 5.43227 9.39689 5.35155 9.67706C5.12237 10.4145 5 11.1971 5 12C5 12.8029 5.12237 13.5855 5.35155 14.3229C5.43227 14.6031 5.32177 14.9012 5.06927 15.0849L3.50172 16.2499C3.18393 16.4881 3.08936 16.9233 3.27089 17.2853C4.02731 18.8532 5.14674 20.2238 6.52447 21.2802C6.86223 21.5277 7.32517 21.5109 7.64076 21.2396L9.17259 19.9048C9.42216 19.6893 9.76415 19.6304 10.0624 19.747C10.6612 19.9823 11.3148 20.1244 12 20.1244C12.6852 20.1244 13.3388 19.9823 13.9376 19.747C14.2359 19.6304 14.5778 19.6893 14.8274 19.9048L16.3592 21.2396C16.6748 21.5109 17.1378 21.5277 17.4755 21.2802C18.8533 20.2238 19.9727 18.8532 20.7291 17.2853C20.9106 16.9233 20.8161 16.4881 20.4983 16.2499L18.9307 15.0849C18.6782 14.9012 18.5677 14.6031 18.6484 14.3229C18.8776 13.5855 19 12.8029 19 12Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Voice Integration",
    description: "Seamlessly integrate voice capabilities into your existing systems and workflows.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Custom Solutions",
    description: "Tailored AI solutions designed specifically for your business needs and goals.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V12M12 12V18M12 12H18M12 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-brand-darkBlue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-progressive-100"
          >
            Our AI Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-brand-text-secondary max-w-2xl mx-auto"
          >
            Discover how our AI-powered voice solutions can transform your business
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-brand-border/20 to-transparent border border-brand-border hover:border-progressive-500 transition-colors"
            >
              <div className="text-progressive-400 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-brand-text-primary">{service.title}</h3>
              <p className="text-brand-text-secondary">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
