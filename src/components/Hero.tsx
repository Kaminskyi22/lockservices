'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/TranslationContext';
import { FaPhone, FaKey, FaLock, FaShieldAlt, FaTelegram } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const floatingIcons = [
  { Icon: FaKey, x: '20%', y: '20%', delay: 0 },
  { Icon: FaLock, x: '80%', y: '30%', delay: 0.5 },
  { Icon: FaShieldAlt, x: '15%', y: '70%', delay: 1 },
];

const START_COUNT = 107; // початкове значення
const INCREMENT_MINUTES = 7;
const STORAGE_KEY = 'lock_counter_start_date';

function getStartDate() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return new Date(saved);
    const now = new Date();
    localStorage.setItem(STORAGE_KEY, now.toISOString());
    return now;
  }
  return new Date();
}

function getCurrentCount(startDate: Date) {
  const now = new Date();
  const diffMs = now.getTime() - startDate.getTime();
  const diffMinutes = Math.floor(diffMs / 1000 / 60);
  return START_COUNT + Math.floor(diffMinutes / INCREMENT_MINUTES);
}

export default function Hero() {
  const { messages } = useTranslation();
  const [count, setCount] = useState(START_COUNT);

  useEffect(() => {
    const startDate = getStartDate();
    setCount(getCurrentCount(startDate));
    const interval = setInterval(() => {
      setCount(getCurrentCount(startDate));
    }, 60 * 1000); // оновлювати кожну хвилину
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Основний фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900" />
      
      {/* Анімовані іконки */}
      {floatingIcons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-500/20 pointer-events-none"
          style={{ left: x, top: y, willChange: 'transform, opacity' }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="text-6xl" />
        </motion.div>
      ))}

      {/* Світлові ефекти */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-full h-full"
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: '100% 100%' }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.07) 0%, transparent 30%),
              radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.07) 0%, transparent 30%),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.07) 0%, transparent 50%)
            `,
            backgroundSize: '200% 200%'
          }}
        />
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 z-20 relative" style={{paddingBottom: 'max(2rem, env(safe-area-inset-bottom))'}}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          {/* Логотип */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight">
              Lock
              <span className="text-white">Service</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-2 rounded-full" />
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow animate-pulse">
                <FaLock className="text-blue-500 text-2xl" />
                <span className="text-3xl md:text-4xl font-bold text-black drop-shadow">{count}</span>
                <span className="text-black text-lg md:text-xl font-semibold ml-2">відкритих замків</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-24 h-24 mx-auto mb-8 relative"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-ping" />
            <div className="relative w-full h-full bg-blue-600 rounded-full flex items-center justify-center">
              <FaLock className="text-4xl text-white" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            {messages.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200 drop-shadow-md">
            {messages.hero.subtitle}
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-300">
            {messages.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-stretch px-2 sm:px-0">
            <motion.a
              href={`tel:${messages.contact.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-100 text-blue-700 font-semibold py-4 sm:py-5 px-4 sm:px-10 rounded-full text-base sm:text-lg transition-colors shadow relative overflow-hidden group min-w-0 border border-blue-200"
              style={{ minWidth: 0 }}
            >
              <FaPhone className="text-lg sm:text-xl relative z-10" />
              <span className="relative z-10 whitespace-nowrap">{messages.contact.phone}</span>
            </motion.a>

            <motion.a
              href="https://t.me/lockservice33000_bot"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-100 text-blue-700 font-semibold py-4 sm:py-5 px-4 sm:px-10 rounded-full text-base sm:text-lg transition-colors shadow relative overflow-hidden group min-w-0 border border-blue-200"
              style={{ minWidth: 0 }}
            >
              <FaTelegram className="text-lg sm:text-xl relative z-10" />
              <span className="relative z-10 whitespace-nowrap">Швидка допомога в Telegram</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 