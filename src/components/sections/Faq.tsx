'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA } from '@/constants';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-container px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-12 left-[8%] w-5 h-5 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
        </svg>
        <svg className="absolute bottom-1/3 right-[6%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(45 12 12)" />
        </svg>
        <svg className="absolute top-[40%] right-[4%] w-5 h-5 animate-float-fast" style={{ color: 'rgba(var(--theme-primary-rgb),0.35)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
        <svg className="absolute bottom-[20%] left-[5%] w-6 h-6 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.2)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" />
        </svg>
        <svg className="absolute top-[60%] left-[12%] w-3 h-3 animate-pulse" style={{ color: 'rgba(var(--theme-primary-rgb),0.4)' }} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="6" />
        </svg>
        <div className="absolute top-[20%] right-[20%] w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.06),transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[20%] w-28 h-28 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.04),transparent 70%)' }} />
      </div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Got questions? I have got answers. Here are some common inquiries.
      </motion.p>

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ_DATA.map((faq, i) => (
          <motion.div
            key={i}
            className="rounded-2xl bg-card border-border overflow-hidden card-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <span className="font-medium text-primary pr-4">{faq.question}</span>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                } text-muted`}
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-muted text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
