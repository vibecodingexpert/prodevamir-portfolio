'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'var(--bg-primary)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.svg
            viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-28 h-auto"
            style={{ color: 'var(--theme-primary)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <rect x="2" y="2" width="20" height="36" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
            <rect x="6" y="6" width="4" height="12" rx="1" fill="currentColor" />
            <rect x="14" y="6" width="4" height="12" rx="1" fill="currentColor" />
            <rect x="6" y="22" width="4" height="4" rx="1" fill="currentColor" opacity="0.5" />
            <rect x="14" y="22" width="4" height="4" rx="1" fill="currentColor" opacity="0.5" />
            <motion.rect x="28" y="10" width="6" height="20" rx="2" fill="currentColor"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.rect x="38" y="6" width="6" height="28" rx="2" fill="currentColor"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} />
            <motion.rect x="48" y="14" width="6" height="16" rx="2" fill="currentColor"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }} />
            <text x="64" y="26" fontFamily="var(--font-sans)" fontSize="16" fontWeight="700" fill="currentColor">AMIR</text>
            <text x="64" y="38" fontFamily="var(--font-sans)" fontSize="9" fontWeight="500" fill="currentColor" opacity="0.6">DEVELOPER</text>
          </motion.svg>

          <motion.div
            className="h-0.5 rounded-full mt-8 overflow-hidden"
            style={{ width: '120px', background: 'rgba(var(--theme-primary-rgb), 0.15)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'var(--theme-primary)' }}
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
