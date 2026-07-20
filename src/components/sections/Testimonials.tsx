'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '@/constants';
import { client } from '@/sanity/lib/client';
import { testimonialsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 400 : -400, opacity: 0, rotateY: dir > 0 ? 10 : -10 }),
  center: { x: 0, opacity: 1, rotateY: 0 },
  exit: (dir: number) => ({ x: dir > 0 ? -400 : 400, opacity: 0, rotateY: dir > 0 ? -10 : 10 }),
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    client.fetch<Testimonial[]>(testimonialsQuery)
      .then((data) => { if (data?.length) setTestimonials(data); })
      .catch(() => {});
  }, []);

  const goTo = useCallback((i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${y * -6}deg)`;
    glowRef.current.style.left = `${50 + x * 30}%`;
    glowRef.current.style.top = `${50 + y * 30}%`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glowRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    glowRef.current.style.left = '50%';
    glowRef.current.style.top = '50%';
  };

  const t = testimonials[current];
  const avatarUrl = typeof t?.avatar === 'string'
    ? t.avatar
    : t?.avatar
      ? urlFor(t.avatar).width(100).height(100).url()
      : '';

  return (
    <section id="testimonials" className="section-container px-6 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full blur-[120px]"
          style={{ background: 'rgba(var(--theme-primary-rgb), 0.08)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'rgba(var(--theme-primary-rgb), 0.06)' }} />
        <svg className="absolute top-8 left-[6%] w-5 h-5 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
        </svg>
        <svg className="absolute bottom-1/4 right-[5%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
        <svg className="absolute top-[45%] right-[3%] w-6 h-6 animate-float-fast" style={{ color: 'rgba(var(--theme-primary-rgb),0.2)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" />
        </svg>
        <svg className="absolute top-[30%] left-[4%] w-3 h-3 animate-pulse" style={{ color: 'rgba(var(--theme-primary-rgb),0.4)' }} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="6" />
        </svg>
      </div>

      <div className="text-center mb-12 relative z-10">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
          style={{ color: 'var(--theme-primary)', background: 'rgba(var(--theme-primary-rgb), 0.1)' }}>
          Testimonials
        </span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Clients Say
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Feedback from clients I have worked with.
        </motion.p>
      </div>

      <div className="flex items-center gap-6 max-w-4xl mx-auto relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}>
        <button
          onClick={prev}
          aria-label="Previous"
          className="hidden md:flex items-center justify-center w-11 h-11 rounded-full border transition-all shrink-0"
          style={{ borderColor: 'rgba(var(--theme-primary-rgb), 0.2)', color: 'var(--theme-primary)' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(var(--theme-primary-rgb), 0.08)'; e.currentTarget.style.borderColor = 'rgba(var(--theme-primary-rgb), 0.4)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(var(--theme-primary-rgb), 0.2)'; }}
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex-1 min-h-[320px] flex items-center perspective-[1000px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              ref={cardRef}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full rounded-3xl p-8 md:p-10 cursor-default relative overflow-hidden"
              style={{
                background: 'var(--bg-card)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(var(--theme-primary-rgb), 0.15)',
                boxShadow: `0 8px 32px rgba(var(--theme-primary-rgb), 0.08), 0 1px 4px rgba(var(--theme-primary-rgb), 0.04), 0 0 1px rgba(var(--theme-primary-rgb), 0.08)`,
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={glowRef}
                className="absolute pointer-events-none transition-all duration-700 ease-out"
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(var(--theme-primary-rgb), 0.12) 0%, transparent 70%)',
                  transform: 'translate(-50%, -50%)',
                  left: '50%',
                  top: '50%',
                }}
              />

              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(var(--theme-primary-rgb), 0.5), rgba(var(--theme-secondary-rgb), 0.5), transparent)`,
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite',
                }}
              />

              <Quote
                className="absolute top-6 right-6 md:top-8 md:right-8"
                size={48}
                style={{ color: 'rgba(var(--theme-primary-rgb), 0.1)' }}
              />

              <div className="flex gap-1 mb-6 relative z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < t.rating ? 'fill-yellow-500 drop-shadow-sm' : 'text-muted2/20'}
                    style={{ color: i < t.rating ? '#eab308' : undefined }}
                  />
                ))}
              </div>

              <p className="text-base md:text-lg text-muted leading-relaxed mb-8 italic relative z-10">
                <span
                  className="text-2xl leading-none mr-1 font-serif"
                  style={{ color: 'rgba(var(--theme-primary-rgb), 0.4)' }}
                >
                  &ldquo;
                </span>
                {t.content}
                <span
                  className="text-2xl leading-none ml-1 font-serif"
                  style={{ color: 'rgba(var(--theme-primary-rgb), 0.4)' }}
                >
                  &rdquo;
                </span>
              </p>

              <div
                className="flex items-center gap-4 pt-6 relative z-10"
                style={{ borderTop: '1px solid rgba(var(--theme-primary-rgb), 0.1)' }}
              >
                <div
                  className="w-14 h-14 rounded-full overflow-hidden shrink-0"
                  style={{
                    boxShadow: '0 0 0 2px rgba(var(--theme-primary-rgb), 0.2), 0 0 0 4px var(--bg-card)',
                  }}
                >
                  {avatarUrl ? (
                    <img src={avatarUrl} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-sm font-semibold"
                      style={{ color: 'var(--theme-primary)', background: 'rgba(var(--theme-primary-rgb), 0.1)' }}
                    >
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="hidden md:flex items-center justify-center w-11 h-11 rounded-full border transition-all shrink-0"
          style={{ borderColor: 'rgba(var(--theme-primary-rgb), 0.2)', color: 'var(--theme-primary)' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(var(--theme-primary-rgb), 0.08)'; e.currentTarget.style.borderColor = 'rgba(var(--theme-primary-rgb), 0.4)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(var(--theme-primary-rgb), 0.2)'; }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-3 mt-8 relative z-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className="h-2 rounded-full transition-all duration-500"
            style={{
              width: i === current ? '32px' : '8px',
              background: i === current ? 'var(--theme-primary)' : 'var(--bg-card-hover)',
              boxShadow: i === current ? '0 0 8px rgba(var(--theme-primary-rgb), 0.4)' : 'none',
            }}
            onMouseEnter={(e) => { if (i !== current) e.currentTarget.style.background = 'rgba(var(--theme-primary-rgb), 0.3)'; }}
            onMouseLeave={(e) => { if (i !== current) e.currentTarget.style.background = 'var(--bg-card-hover)'; }}
          />
        ))}
      </div>
    </section>
  );
}
