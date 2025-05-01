'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/contexts/TranslationContext';
import { FaPhone, FaKey, FaLock, FaShieldAlt } from 'react-icons/fa';

const floatingIcons = [
  { Icon: FaKey, x: '20%', y: '20%', delay: 0 },
  { Icon: FaLock, x: '80%', y: '30%', delay: 0.5 },
  { Icon: FaShieldAlt, x: '15%', y: '70%', delay: 1 },
  { Icon: FaKey, x: '70%', y: '80%', delay: 1.5 },
  { Icon: FaLock, x: '40%', y: '25%', delay: 2 },
  { Icon: FaShieldAlt, x: '85%', y: '60%', delay: 2.5 },
];

export default function Hero() {
  const { messages } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Основний фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-black" />
      
      {/* Анімовані іконки */}
      {floatingIcons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-500/20 pointer-events-none"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            y: ["0%", "-20%", "0%"]
          }}
          transition={{
            duration: 4,
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
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 30%),
              radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 30%),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: '200% 200%'
          }}
        />
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 z-10">
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
          
          <motion.a
            href="tel:+380932851411"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors shadow-lg relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 group-hover:translate-x-full transition-transform duration-500" />
            <FaPhone className="text-xl relative z-10" />
            <span className="relative z-10">+380 93 285 14 11</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 