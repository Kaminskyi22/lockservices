'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/TranslationContext';
import { FaHome, FaCar, FaLock, FaTools } from 'react-icons/fa';

const icons = {
  home: FaHome,
  car: FaCar,
  safe: FaLock,
  lock: FaTools,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  const { messages } = useTranslation();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          {messages.services.title}
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {messages.services.items.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            
            return (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon className="text-3xl text-blue-600" aria-label={service.title} />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-800 text-center">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 