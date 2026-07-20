'use client';

import { motion } from 'framer-motion';
import { ABOUT } from '@/constants';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function About() {
  return (
    <section id="about" className="section-container px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-10 right-[10%] w-5 h-5 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
        </svg>
        <svg className="absolute bottom-1/3 left-[5%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.35)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
        <svg className="absolute top-[60%] right-[5%] w-6 h-6 animate-float-fast" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" />
        </svg>
        <svg className="absolute top-[25%] left-[3%] w-3 h-3 animate-pulse" style={{ color: 'rgba(var(--theme-primary-rgb),0.4)' }} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="6" />
        </svg>
        <svg className="absolute top-[12%] left-[10%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(45 12 12)" />
        </svg>
        <svg className="absolute bottom-[15%] right-[8%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <div className="absolute top-[15%] right-[20%] w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.07),transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[15%] w-28 h-28 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.05),transparent 70%)' }} />
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
        <motion.div
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative float-anim">
            <div className="w-full h-full overflow-hidden border-2 border-border hover-border-accent-30 transition-all duration-500 shadow-accent"
              style={{ borderRadius: '20px' }}
            >
              <img src={ABOUT.image} alt="Amir" className="w-full h-full object-contain" />
            </div>
            <div className="absolute -inset-1 -z-10 rounded-[22px] opacity-40 blur-md transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, var(--theme-primary), rgba(168, 85, 247, 0.5))' }}
            />
          </div>
        </motion.div>

        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title text-left">About Me</h2>
          <div className="w-16 h-1 rounded-full mb-6"
            style={{ background: 'linear-gradient(to right, var(--theme-primary), var(--theme-primary-hover))' }}
          />
          <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
            {ABOUT.bio}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ABOUT.stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl bg-card border-border card-lift"
              >
                <AnimatedCounter value={stat.value} />
                <div className="text-xs text-muted2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
