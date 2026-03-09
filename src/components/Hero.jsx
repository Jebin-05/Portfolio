import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const socialLinks = [
    {
      label: 'GitHub (Jebin-05)',
      href: 'https://github.com/Jebin-05',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jebin-abraham-1a0097292/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:jebinabraham1804@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[100px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom pt-24 pb-16 md:pt-0 md:pb-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text Content */}
          <motion.div
            className="flex-1 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Label removed */}

            {/* Headline */}
            <motion.h1
              variants={childVariants}
              className="font-display text-display-lg md:text-display-xl mt-6 mb-2"
            >
              <span className="text-text-primary">Hi, I'm </span>
              <span className="text-gradient">Jebin</span>
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.h2
              variants={childVariants}
              className="font-display text-display-sm md:text-display-md text-text-secondary mb-8"
            >
              Generative AI Engineer
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={childVariants}
              className="text-body-lg text-text-secondary max-w-xl mb-10 leading-relaxed"
            >
              I build intelligent systems — from fine-tuning open-source LLMs to crafting 
              interactive AI-powered applications. Specializing in end-to-end development 
              where AI meets elegant interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a href="#projects" className="btn-primary">
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={childVariants}
              className="flex items-center gap-3"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
              <span className="ml-2 text-caption text-text-muted">
                Let's connect
              </span>
            </motion.div>
          </motion.div>

          {/* Right — Profile Photo */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px]">
              {/* Glow behind photo */}
              <div className="absolute -inset-4 rounded-full bg-accent/10 blur-2xl" aria-hidden="true" />
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border border-accent/20" aria-hidden="true" />
              {/* Photo */}
              <img
                src="/photo.jpeg"
                alt="Jebin Abraham — Generative AI Engineer"
                className="relative w-full h-full object-cover rounded-full border-2 border-border-line shadow-strong"
                loading="eager"
              />
              {/* Status badge */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-surface/90 backdrop-blur-sm border border-border-line rounded-full px-3 py-1.5 shadow-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-caption text-text-secondary font-medium">Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default Hero;