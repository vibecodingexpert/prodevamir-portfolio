'use client';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';
import Logo from '@/components/ui/Logo';

const socialIcons = [FaFacebookF, FaInstagram, FaLinkedinIn];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-[30%]">
            <a href="#hero" className="flex items-center">
              <Logo className="h-12 w-auto" />
            </a>
            <p className="text-muted text-sm mt-6 leading-relaxed">
              WordPress websites crafted with clean design and powerful functionality. Focused on performance, responsiveness, and seamless user experience. Turning ideas into scalable digital solutions that grow your brand.
            </p>
          </div>

          <div className="md:w-[30%] md:pl-30 mt-10 md:mt-0">
            <h3 className="text-sm font-semibold tracking-widest mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              {[
                { label: 'HOME', href: '#hero' },
                { label: 'ABOUT', href: '#about' },
                { label: 'PROJECTS', href: '#portfolio' },
                { label: 'SERVICES', href: '#services' },
                { label: 'TESTIMONIALS', href: '#testimonials' },
                { label: 'CONTACT', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted text-sm hover-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-[30%] mt-10 md:mt-0">
            <h3 className="text-sm font-semibold tracking-widest mb-6">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted text-sm">
                <Mail size={14} className="flex-shrink-0" />
                <a href="mailto:prodeveloperamir@gmail.com" className="hover-text-primary transition-colors">prodeveloperamir@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-muted text-sm">
                <MapPin size={14} className="flex-shrink-0" />
                <span>Multan, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-muted text-sm">
                <Phone size={14} className="flex-shrink-0" />
                <a href="tel:+923166219544" className="hover-text-primary transition-colors">+92 316 6219544</a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
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
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted3 text-sm">&copy; 2026 copyright all right reserved</p>
        </div>
      </div>
    </footer>
  );
}
