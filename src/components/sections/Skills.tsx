'use client';

import { motion } from 'framer-motion';
import { SKILLS_DATA } from '@/constants';
import {
  FaWordpress, FaPhp, FaJsSquare, FaReact, FaHtml5, FaElementor,
  FaShoppingBag, FaWordpressSimple,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import { HiSparkles } from 'react-icons/hi';
import { BsStars } from 'react-icons/bs';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  WordPress: FaWordpress,
  WooCommerce: FaWordpressSimple,
  PHP: FaPhp,
  Shopify: FaShoppingBag,
  Liquid: FaPhp,
  JavaScript: FaJsSquare,
  TypeScript: SiTypescript,
  'React/Next.js': FaReact,
  TailwindCSS: SiTailwindcss,
  'HTML/CSS': FaHtml5,
  'Cursor AI': HiSparkles,
  'Claude AI': BsStars,
  Elementor: FaElementor,
};

function SkillItem({ name, percentage, index }: { name: string; percentage: number; index: number }) {
  const Icon = iconMap[name];
  return (
    <motion.div
      className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-card-hover transition-colors group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-base flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-primary-hover))',
          color: '#fff',
        }}
      >
        {Icon && <Icon size={16} />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm font-medium">{name}</span>
          <span
            className="text-xs font-semibold tabular-nums"
            style={{ color: 'var(--theme-primary)' }}
          >
            {percentage}%
          </span>
        </div>
        <div className="h-1.5 rounded-full" style={{ background: 'var(--border-color)' }}>
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-primary), var(--theme-primary-hover))',
              width: 0,
            }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.04 + 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

const sections = [
  { title: 'CMS & Frameworks', skills: ['WordPress', 'WooCommerce', 'Shopify', 'React/Next.js'] },
  { title: 'Languages & Styling', skills: ['PHP', 'JavaScript', 'TypeScript', 'HTML/CSS', 'TailwindCSS'] },
  { title: 'Tools & AI', skills: ['Liquid', 'Elementor', 'Cursor AI', 'Claude AI'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-8 right-[12%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(45 12 12)" />
        </svg>
        <svg className="absolute bottom-1/3 left-[8%] w-5 h-5 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" />
        </svg>
        <svg className="absolute top-[60%] right-[5%] w-3 h-3 animate-pulse" style={{ color: 'rgba(var(--theme-primary-rgb),0.4)' }} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="6" />
        </svg>
        <svg className="absolute top-[15%] left-[4%] w-5 h-5 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
        </svg>
        <svg className="absolute bottom-[15%] right-[10%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
        <svg className="absolute top-[40%] right-[3%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <div className="absolute top-[10%] left-[5%] w-20 h-20 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.06),transparent 70%)' }} />
        <div className="absolute bottom-[5%] right-[5%] w-24 h-24 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.04),transparent 70%)' }} />
      </div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Technologies and tools I use to build modern digital experiences.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {sections.map((section, secIdx) => (
          <motion.div
            key={section.title}
            className="rounded-2xl bg-card border-border p-6 card-lift w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: secIdx * 0.12 }}
          >
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--theme-primary)' }}>
              {section.title}
            </h3>
            <div className="space-y-0">
              {section.skills.map((name) => {
                const skill = SKILLS_DATA.find((s) => s.name === name);
                if (!skill) return null;
                const idx = SKILLS_DATA.indexOf(skill);
                return <SkillItem key={skill.name} name={skill.name} percentage={skill.percentage} index={idx} />;
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
