"use client";

import { useTranslation } from '@/contexts/TranslationContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQ() {
  const { messages } = useTranslation();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          {messages.faq.title}
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.faq.items.map((item: any, idx: number) => (
            <div key={idx} className="border rounded-lg overflow-hidden bg-gray-50">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-lg font-semibold text-gray-900 focus:outline-none focus:bg-blue-100 transition"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span>{item.question}</span>
                <FaChevronDown className={`ml-2 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0, y: -10 }}
                    animate={{ height: 'auto', opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="relative px-0"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-r" />
                    <div className="pl-6 pr-6 pb-4 pt-2 bg-blue-50 text-gray-800">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        {item.answer}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 