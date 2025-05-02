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
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-700"
                  >
                    {item.answer}
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