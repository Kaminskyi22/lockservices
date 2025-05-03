'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/TranslationContext';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'services', label: 'services.title' },
  { id: 'benefits', label: 'benefits.title' },
  { id: 'testimonials', label: 'testimonials.title' },
  { id: 'faq', label: 'faq.title' },
  { id: 'contact', label: 'contact.title' }
];

export default function Navigation() {
  const { messages } = useTranslation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 py-4">
          {sections.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeSection === id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {messages[label as keyof typeof messages]}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
} 