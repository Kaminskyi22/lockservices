'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/TranslationContext';
import { FaClock, FaCalendarAlt, FaCertificate, FaShieldAlt } from 'react-icons/fa';

const icons = {
  clock: FaClock,
  calendar: FaCalendarAlt,
  certificate: FaCertificate,
  shield: FaShieldAlt,
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

export default function Benefits() {
  const { messages } = useTranslation();

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-black"
        >
          {messages.benefits.title}
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {messages.benefits.items.map((benefit, index) => {
            const Icon = icons[benefit.icon as keyof typeof icons];
            
            return (
              <motion.div
                key={index}
                variants={item}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-4xl text-blue-600" aria-label={benefit.title} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">
                  {benefit.title}
                </h3>
                <p className="text-black">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="text-center mt-8">
          <a href="#faq" className="text-blue-600 hover:underline font-semibold transition">Маєте питання? Дивіться відповіді у розділі FAQ</a>
        </div>
      </div>
    </section>
  );
} 