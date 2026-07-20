'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/ui/Logo'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import { MessageCircle } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/#hero' },
  ...NAV_LINKS.filter(l => l.href.startsWith('#')),
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname !== '/') return
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = NAV_LINKS.filter(l => l.href.startsWith('#')).map(l => l.href)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  useEffect(() => {
    setIsScrolled(window.scrollY > 50 || pathname !== '/')
  }, [pathname])

  const scrollTo = (href: string) => {
    setIsOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(href)
    }
  }

  const handleClick = (href: string) => {
    setIsOpen(false)
    if (pathname !== '/') {
      router.push(href)
      return
    }
    const hash = href.includes('#') ? '#' + href.split('#')[1] : null
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[9998] px-3 md:px-6 lg:px-8"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl mt-3 md:mt-4 px-3 md:px-6 lg:px-8 py-3 flex md:py-3.5 items-center justify-between overflow-visible"
            style={{
              background: isScrolled
                ? 'var(--nav-bg)'
                : 'var(--bg-card)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--border-color)',
            }}
          >
            <Link href="/" className="flex items-center">
              {pathname === '/' ? (
                <motion.span
                  className="text-lg font-bold gradient-text"
                  whileHover={{ scale: 1.05 }}
                >
                  Amir
                </motion.span>
              ) : (
                <Logo className="h-8 w-auto" />
              )}
            </Link>

            <div className="hidden lg:flex items-center gap-4 lg:gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => (
                link.href.startsWith('#') ? (
                  <motion.button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className="nav-link text-sm font-medium"
                    style={{
                      color: pathname === '/' && activeSection === link.href
                        ? 'var(--theme-primary)'
                        : 'var(--text-muted)',
                    }}
                    whileHover={{ x: 3 }}
                  >
                    {link.label}
                  </motion.button>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link text-sm font-medium ${
                      pathname === link.href ? 'text-accent' : ''
                    }`}
                    style={{
                      color: pathname === link.href
                        ? 'var(--theme-primary)'
                        : 'var(--text-muted)',
                    }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <motion.button
                onClick={() => {
                  if (pathname === '/') {
                    const el = document.querySelector('#contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    router.push('/#contact')
                  }
                }}
                className="px-5 py-2.5 text-sm font-semibold rounded-full flex items-center gap-2 btn-shimmer btn-glow"
                style={{
                  background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-primary-hover))',
                  color: '#fff',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={14} className="icon-rotate" /> LET&apos;S TALK
              </motion.button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center shrink-0"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative w-6 h-5 overflow-visible">
                <motion.span
                  className="absolute left-0 top-0 w-6 h-[2px] block rounded-full origin-center"
                  style={{ background: 'var(--text-primary)' }}
                  animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="absolute left-0 top-[9px] w-6 h-[2px] block rounded-full origin-center"
                  style={{ background: 'var(--text-primary)' }}
                  animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                />
                <motion.span
                  className="absolute left-0 top-[18px] w-6 h-[2px] block rounded-full origin-center"
                  style={{ background: 'var(--text-primary)' }}
                  animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9997] flex items-center justify-center lg:hidden"
            style={{
              background: 'var(--nav-bg)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-3xl font-bold"
                  style={{
                    color: pathname === '/' && activeSection === link.href
                      ? 'var(--theme-primary)'
                      : 'var(--text-muted)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => {
                  setIsOpen(false)
                  if (pathname === '/') {
                    const el = document.querySelector('#contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    router.push('/#contact')
                  }
                }}
                className="px-8 py-3.5 text-sm font-semibold rounded-full btn-shimmer btn-glow mt-4"
                style={{
                  background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-primary-hover))',
                  color: '#fff',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={16} /> LET&apos;S TALK
                </span>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}