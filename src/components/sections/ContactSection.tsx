"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

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
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-brand-text-secondary"
            >
              Book a discovery call with our team to explore how our AI voice agents can help you
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
                  Email
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
                Company
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
                Message
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
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 bg-progressive-600 hover:bg-progressive-500 text-white rounded-full font-medium transition-colors"
              >
                Book Your Call
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
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
