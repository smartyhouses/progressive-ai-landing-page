"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { GradientButton } from '../ui/GradientButton';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-brand-darkBlue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-progressive-100"
            >
              Готовы?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-brand-text-secondary"
            >
              Напрявьте нам заявку на получение униакального доступа к рабочей версии
            </motion.p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-brand-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-deeperBlue border border-brand-border rounded-lg focus:border-progressive-500 focus:outline-none text-brand-text-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-brand-text-secondary mb-2">
                  Электрический почтовый ящик 
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-deeperBlue border border-brand-border rounded-lg focus:border-progressive-500 focus:outline-none text-brand-text-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-brand-text-secondary mb-2">
                Домохозяйство
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-brand-deeperBlue border border-brand-border rounded-lg focus:border-progressive-500 focus:outline-none text-brand-text-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-brand-text-secondary mb-2">
                Суть вопроса
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-brand-deeperBlue border border-brand-border rounded-lg focus:border-progressive-500 focus:outline-none text-brand-text-primary resize-none"
              />
            </div>

            <div className="text-center">
              <GradientButton
                href="https://calendly.com/rahul-majumder043/discovery-call"
                external
                type="button"
                className="inline-flex items-center"
              >
                Поехали!
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </GradientButton>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Social Media and Contact Info */}
      <div className="mt-20 border-t border-brand-border pt-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">На связи</h3>
              <p className="text-brand-text-secondary mb-2">
                <span className="font-medium text-white">Телефон:</span> <a href="tel:+74957779777" className="hover:text-progressive-400 transition-colors">+74957779777</a>
              </p>
              <p className="text-brand-text-secondary">
                <span className="font-medium text-white">Почта:</span> <a href="mailto:shapiroisme@gmail.com" className="hover:text-progressive-400 transition-colors">info@progressive-ai.com</a>
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">Айда с нами</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-progressive-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-progressive-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-progressive-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Location */}
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">На местности</h3>
              <p className="text-brand-text-secondary">
                Москва, РФ<br />
                Сделано людьми
              </p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-10 pt-6 border-t border-brand-border text-center text-sm text-brand-text-secondary">
            <p>© {new Date().getFullYear()} АО Портал</p>
          </div>
        </div>
      </div>
    </section>
  );
};
