'use client';

import { motion, type TargetAndTransition } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  whileHover?: TargetAndTransition;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = '',
  glowColor = 'rgba(71, 181, 255, 0.15)',
  whileHover,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 ${className}`}
      style={{ boxShadow: `0 8px 32px rgba(2, 17, 27, 0.4), 0 0 40px ${glowColor}` }}
      whileHover={whileHover as TargetAndTransition}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
