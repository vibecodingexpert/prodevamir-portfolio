'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HERO, SOCIAL_LINKS } from '@/constants';
import { ArrowRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const socialIcons = [FaFacebookF, FaInstagram, FaLinkedinIn];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentRole = HERO.roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % HERO.roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!imageRef.current) return;
    gsap.to(imageRef.current, {
      y: 80,
      ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-start lg:items-center relative overflow-hidden pt-36 md:pt-32 lg:pt-36">
      <div className="max-w-6xl mx-auto w-full relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute top-20 left-[8%] w-6 h-6 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="8" />
          </svg>
          <svg className="absolute top-1/3 right-[12%] w-5 h-5 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(45 12 12)" />
          </svg>
          <svg className="absolute bottom-1/4 left-[15%] w-4 h-4 animate-float-fast" style={{ color: 'rgba(var(--theme-primary-rgb),0.35)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
          <svg className="absolute top-[15%] right-[25%] w-8 h-8 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.2)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" />
          </svg>
          <svg className="absolute bottom-[30%] left-[5%] w-3 h-3 animate-pulse" style={{ color: 'rgba(var(--theme-primary-rgb),0.4)' }} viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="6" />
          </svg>
          <svg className="absolute top-[40%] right-[8%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <svg className="absolute top-[8%] left-[20%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(45 12 12)" />
          </svg>
          <svg className="absolute bottom-[15%] right-[5%] w-5 h-5 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="8" />
          </svg>
          <div className="absolute top-[20%] left-[30%] w-32 h-32 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.07),transparent 70%)' }} />
          <div className="absolute bottom-[15%] right-[20%] w-40 h-40 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.05),transparent 70%)' }} />
        </div>
        <div className="px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            {HERO.tagline && (
              <motion.span
                className="inline-block px-4 py-1.5 rounded-full bg-card border-border text-xs font-medium tracking-wider text-muted mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {HERO.tagline}
              </motion.span>
            )}

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {HERO.greeting}
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 whitespace-nowrap min-h-[1.75rem] sm:min-h-[2.5rem] md:min-h-[3.5rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I&apos;M A{' '}
              <span className="gradient-text">
                {displayText}
                <span className="typewriter-cursor text-accent">|</span>
              </span>
            </motion.h2>

            <motion.p
              className="text-muted text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {HERO.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={scrollToContact}
                className="group px-8 py-3.5 rounded-full text-primary font-semibold text-sm tracking-wider btn-shimmer btn-glow flex items-center gap-2"
                style={{ background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-primary-hover))' }}
              >
                {HERO.cta}
                <ArrowRight size={16} className="icon-rotate" />
              </button>

              <div className="flex items-center gap-4 mt-4 sm:mt-0 sm:ml-6">
                {SOCIAL_LINKS.map((social, i) => {
                  const Icon = socialIcons[i];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full border-border text-muted hover-text-primary hover-border-hover transition-all duration-300 animate-wobble-hover social-glow"
                      aria-label={social.name}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div ref={imageRef} className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 float-anim">
              <div className="w-full h-full overflow-hidden border-2 border-border hover-border-accent-30 transition-all duration-500 shadow-accent"
                style={{ borderRadius: '20px' }}
              >
                <img src="/images/hero-profile.jpg" alt="Amir" className="w-full h-full object-contain" />
              </div>
              <div className="absolute -inset-1 -z-10 rounded-[22px] opacity-40 blur-md transition-opacity duration-500 group-hover:opacity-70"
                style={{ background: 'linear-gradient(135deg, var(--theme-primary), rgba(168, 85, 247, 0.5))' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}
