import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'Projects', href: 'projects' },
    { label: 'Experience', href: 'experience' },
    { label: 'Skills', href: 'skills' },
    { label: 'Education', href: 'education' },
    { label: 'Contact', href: 'contact' },
  ];

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    // Determine active section
    const sections = navItems.map(item => item.href);
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-primary/80 backdrop-blur-xl border-b border-border-line/50 py-3'
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      role="banner"
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-2.5 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          aria-label="Go to homepage"
        >
          <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center transition-all duration-300 group-hover:bg-accent/20 group-hover:border-accent/40">
            <span className="font-display text-sm font-bold text-accent">JA</span>
          </div>
          <span className="hidden sm:block font-display text-sm font-semibold tracking-wide text-text-primary">
            Jebin<span className="text-accent">.</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
          <ul className="flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
              >
                <a
                  href={`#${item.href}`}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3.5 py-2 text-body-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === item.href
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface/50'
                  }`}
                  aria-current={activeSection === item.href ? 'page' : undefined}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* CTA Button - Desktop */}
        <motion.a
          href="#contact"
          onClick={(e) => scrollToSection(e, 'contact')}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-body-sm font-medium text-accent border border-accent/30 rounded-lg transition-all duration-300 hover:bg-accent-muted hover:border-accent/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          Let's Talk
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-border-line text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-5 flex flex-col items-end gap-1.5">
            <motion.div
              className="h-[1.5px] bg-current rounded-full"
              animate={mobileMenuOpen ? { rotate: 45, y: 5, width: 20 } : { rotate: 0, y: 0, width: 20 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="h-[1.5px] bg-current rounded-full"
              animate={mobileMenuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 14 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="h-[1.5px] bg-current rounded-full"
              animate={mobileMenuOpen ? { rotate: -45, y: -5, width: 20 } : { rotate: 0, y: 0, width: 20 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-primary/95 backdrop-blur-xl border-b border-border-line/50 overflow-hidden"
          >
            <nav className="container-custom py-6" role="navigation" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={`#${item.href}`}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-body font-medium transition-all duration-200 ${
                        activeSection === item.href
                          ? 'text-accent bg-accent-muted'
                          : 'text-text-secondary hover:text-text-primary hover:bg-surface/50'
                      }`}
                    >
                      {item.label}
                      {activeSection === item.href && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-6 pt-6 border-t border-border-line"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="btn-primary w-full justify-center"
                >
                  Let's Talk
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;