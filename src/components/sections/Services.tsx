'use client';

import { motion } from 'framer-motion';
import { SERVICES } from '@/constants';
import { Code, Palette, Smartphone, Zap, Globe, ShoppingCart, Brain, Store, Workflow } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={28} />,
  Globe: <Globe size={28} />,
  ShoppingCart: <ShoppingCart size={28} />,
  Store: <Store size={28} />,
  Workflow: <Workflow size={28} />,
  Code: <Code size={28} />,
  Palette: <Palette size={28} />,
  Smartphone: <Smartphone size={28} />,
  Zap: <Zap size={28} />,
};

export default function Services() {
  return (
    <section id="services" className="section-container px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-12 left-[5%] w-5 h-5 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
        </svg>
        <svg className="absolute bottom-1/4 right-[8%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.35)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
        <svg className="absolute top-[30%] right-[3%] w-6 h-6 animate-float-fast" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" />
        </svg>
        <svg className="absolute bottom-[20%] left-[4%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(45 12 12)" />
        </svg>
        <svg className="absolute top-[55%] left-[10%] w-3 h-3 animate-pulse" style={{ color: 'rgba(var(--theme-primary-rgb),0.4)' }} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="6" />
        </svg>
        <svg className="absolute top-[8%] right-[15%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <div className="absolute top-1/2 left-[2%] w-20 h-20 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.06),transparent 70%)' }} />
        <div className="absolute bottom-[5%] right-[15%] w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.05),transparent 70%)' }} />
      </div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My Services
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        I offer a range of WordPress, Shopify, Full Stack, and AI development services to help your business grow online.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.title}
            className="group p-8 rounded-2xl bg-card border-border hover-border-accent-30 card-lift"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-accent"
              style={{ background: `linear-gradient(135deg, rgba(var(--theme-primary-rgb), 0.2), rgba(var(--theme-primary-rgb), 0.1))` }}
            >
              {iconMap[service.icon]}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted2 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
