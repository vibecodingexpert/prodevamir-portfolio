'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SOCIAL_LINKS } from '@/constants';
import Image from 'next/image';

const socialIcons = [FaFacebookF, FaInstagram, FaLinkedinIn];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to send');
      }
      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-container px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-8 left-[8%] w-5 h-5 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
        </svg>
        <svg className="absolute bottom-1/4 right-[10%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.35)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
        <svg className="absolute top-[40%] right-[4%] w-6 h-6 animate-float-fast" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" />
        </svg>
        <svg className="absolute bottom-[30%] left-[4%] w-3 h-3 animate-pulse" style={{ color: 'rgba(var(--theme-primary-rgb),0.4)' }} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="6" />
        </svg>
        <svg className="absolute top-[60%] left-[12%] w-4 h-4 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg className="absolute top-[15%] right-[12%] w-5 h-5 animate-float-medium" style={{ color: 'rgba(var(--theme-primary-rgb),0.3)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="3" transform="rotate(45 12 12)" />
        </svg>
        <svg className="absolute bottom-[15%] left-[10%] w-4 h-4 animate-float-slow" style={{ color: 'rgba(var(--theme-primary-rgb),0.25)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <div className="absolute top-[20%] left-[20%] w-28 h-28 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.07),transparent 70%)' }} />
        <div className="absolute bottom-[10%] right-[15%] w-32 h-32 rounded-full" style={{ background: 'radial-gradient(circle,rgba(var(--theme-primary-rgb),0.05),transparent 70%)' }} />
      </div>
      <motion.div
        className="text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Let&apos;s Discuss Your Project</h2>
        <p className="text-muted text-base md:text-lg mt-4">
          Always available for freelancing if the right project comes along, Feel free to contact me.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl p-5 md:p-8 bg-card border-border h-full overflow-hidden">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-border mb-6">
                <Image
                  src="/images/contact-avatar.jpg"
                  alt="Amir"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 mb-6">
                <a
                  href="mailto:prodeveloperamir@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-accent-10 hover:bg-accent-20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent-20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                    <Mail size={16} />
                  </div>
                    <div className="min-w-0">
                    <h4 className="font-semibold text-sm group-hover:text-accent transition-colors">Write an e-mail</h4>
                    <p className="text-muted2 text-xs sm:text-sm mt-0.5 break-words">prodeveloperamir@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+923166219544"
                  className="flex items-start gap-4 p-4 rounded-xl bg-accent-10 hover:bg-accent-20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent-20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm group-hover:text-accent transition-colors">phone number</h4>
                    <p className="text-muted2 text-sm mt-0.5">+92 316-6219544</p>
                  </div>
                </a>
              </div>

              <div className="hidden lg:flex items-center gap-3">
                {SOCIAL_LINKS.map((social, i) => {
                  const Icon = socialIcons[i];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full flex items-center justify-center border-border text-muted hover-text-primary hover-border-hover transition-all social-glow"
                      aria-label={social.name}
                    >
                      <Icon size={13} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="lg:w-1/2"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="rounded-2xl p-6 md:p-8 bg-card border-border">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold tracking-widest text-muted mb-2 block">YOUR NAME</label>
                  <input
                    type="text"
                    placeholder="Name*"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-card border-border text-primary placeholder:text-muted3 focus:outline-none focus-border-accent-50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest text-muted mb-2 block">YOUR EMAIL</label>
                  <input
                    type="email"
                    placeholder="Email*"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-card border-border text-primary placeholder:text-muted3 focus:outline-none focus-border-accent-50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest text-muted mb-2 block">SUBJECT</label>
                  <input
                    type="text"
                    placeholder="Subject*"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-card border-border text-primary placeholder:text-muted3 focus:outline-none focus-border-accent-50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest text-muted mb-2 block">YOUR MESSAGE</label>
                  <textarea
                    placeholder="Message*"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-card border-border text-primary placeholder:text-muted3 focus:outline-none focus-border-accent-50 transition-colors resize-none"
                  />
                </div>
                {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                <button
                  type="submit"
                  disabled={sending}
                  className="group w-full py-3.5 rounded-full text-primary font-semibold btn-shimmer btn-glow disabled:opacity-60 flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-primary-hover))' }}
                >
                  {sending ? 'SENDING...' : sent ? 'MESSAGE SENT!' : 'SEND MESSAGE'}
                  <Send size={16} className="icon-rotate" />
                </button>
              </div>

              <div className="flex lg:hidden items-center gap-3 mt-8 pt-6 border-t border-border">
                {SOCIAL_LINKS.map((social, i) => {
                  const Icon = socialIcons[i];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full flex items-center justify-center border-border text-muted hover-text-primary hover-border-hover transition-all social-glow"
                      aria-label={social.name}
                    >
                      <Icon size={13} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
