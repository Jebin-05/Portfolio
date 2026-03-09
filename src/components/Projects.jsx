import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Tamil Story Generator",
      badge: "🏆 Hackathon Winner — StartupTN",
      description:
        "Designed a GenAI-based application that generates creative Tamil stories and advertisement content. Integrated a fine-tuned language model with Tamil TTS for voice output, creating a seamless content generation and narration pipeline.",
      tech: ["Generative AI", "Tamil LLM", "TTS", "Fine-tuning", "Python", "NLP"],
      highlights: [
        "Creative Tamil story generation",
        "Advertisement content creation",
        "Integrated Tamil TTS output",
        "Fine-tuned language model",
      ],
      color: "#6366f1",
    },
    {
      title: "TN Citizen Services Chatbot",
      badge: "Bilingual AI",
      description:
        "Built a smart chatbot that responds to questions about Tamil Nadu government schemes and services in both Tamil and English. Provides reliable answers across multiple departments using a fine-tuned Tamil LLM.",
      tech: ["Fine-tuned Tamil LLM", "RAG", "Python", "FastAPI", "Tamil NLP"],
      highlights: [
        "Bilingual Tamil-English support",
        "Government schemes information",
        "Fine-tuned Tamil LLM",
        "Multi-department coverage",
      ],
      color: "#818cf8",
    },
    {
      title: "AIML Department Website",
      badge: "Web Development",
      description:
        "Designed and developed a responsive, interactive website for the AIML department. Focused on clean UI/UX design, mobile compatibility, and modern web standards. Collaborated with faculty and students to showcase academic events, research, and achievements.",
      tech: ["React", "JavaScript", "CSS", "UI/UX Design", "Responsive Design"],
      highlights: [
        "Responsive cross-device design",
        "Modern UI/UX standards",
        "Faculty collaboration",
        "Academic content showcase",
      ],
      color: "#a5b4fc",
    },
    {
      title: "R&D Paper Evaluation System",
      badge: "Agentic AI",
      description:
        "Developed an Agentic AI-based R&D paper evaluation system that autonomously analyzes research papers for quality, relevance, and novelty using multi-agent reasoning. Automated scoring, feedback generation, and decision support.",
      tech: ["Agentic AI", "Multi-agent Systems", "NLP", "Python", "Automated Evaluation"],
      highlights: [
        "Autonomous paper analysis",
        "Quality & novelty assessment",
        "Automated feedback generation",
        "Multi-agent reasoning",
      ],
      color: "#6366f1",
    },
    {
      title: "Reflexlabs Official Website",
      badge: "Production",
      description:
        "Developed the official Reflex Labs company website, delivering a responsive, high-performance interface aligned with brand identity and modern UI/UX standards.",
      tech: ["React", "Next.js", "UI/UX Design", "Performance Optimization"],
      highlights: [
        "Brand-aligned design",
        "High-performance interface",
        "Modern UI/UX standards",
        "Responsive and scalable",
      ],
      color: "#818cf8",
    },
  ];

  const current = projects[activeProject];

  return (
    <section id="projects" className="section-padding bg-primary relative" aria-label="Projects">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-body-lg text-text-secondary max-w-xl mt-4">
            A selection of projects that showcase my expertise in Generative AI, 
            full-stack development, and intelligent system design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Project List — Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {/* Mobile: horizontal scroll */}
            <div className="lg:hidden flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-5 px-5">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`snap-start flex-shrink-0 w-[70%] text-left p-4 rounded-xl border transition-all duration-300 ${
                    activeProject === index
                      ? 'bg-surface border-accent/30 shadow-glow-sm'
                      : 'bg-surface/30 border-border-line hover:border-border-hover'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`w-2 h-2 rounded-full transition-colors ${
                      activeProject === index ? 'bg-accent' : 'bg-text-muted'
                    }`} />
                    <span className="text-caption text-text-muted">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className={`text-body-sm font-semibold transition-colors ${
                    activeProject === index ? 'text-text-primary' : 'text-text-secondary'
                  }`}>
                    {project.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Desktop: vertical list */}
            <div className="hidden lg:flex lg:flex-col gap-2">
              {projects.map((project, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`text-left p-5 rounded-xl border transition-all duration-300 group ${
                    activeProject === index
                      ? 'bg-surface border-accent/30 shadow-glow-sm'
                      : 'bg-transparent border-border-line hover:bg-surface/30 hover:border-border-hover'
                  }`}
                  whileHover={{ x: activeProject === index ? 0 : 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-2 h-2 rounded-full transition-colors ${
                      activeProject === index ? 'bg-accent' : 'bg-text-muted group-hover:bg-text-secondary'
                    }`} />
                    <span className="text-caption text-text-muted font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {project.badge && activeProject === index && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent-muted text-accent font-medium">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className={`text-body font-semibold transition-colors ${
                    activeProject === index ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-caption text-text-muted mt-1 line-clamp-1">
                    {project.tech.slice(0, 3).join(' · ')}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Project Detail — Right Column */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface/50 border border-border-line rounded-2xl p-6 md:p-8 lg:p-10"
              >
                {/* Badge */}
                {current.badge && (
                  <span className="inline-flex items-center gap-1.5 text-caption font-medium text-accent bg-accent-muted px-3 py-1 rounded-full mb-6">
                    {current.badge}
                  </span>
                )}

                {/* Title */}
                <h3 className="font-display text-heading md:text-display-sm text-text-primary mb-4">
                  {current.title}
                </h3>

                {/* Description */}
                <p className="text-body text-text-secondary leading-relaxed mb-8">
                  {current.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="text-label uppercase tracking-widest text-text-muted mb-4 font-mono">
                    Key Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2.5"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.2, duration: 0.3 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-body-sm text-text-secondary">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-label uppercase tracking-widest text-text-muted mb-4 font-mono">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {current.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="text-caption px-3 py-1.5 rounded-lg bg-primary border border-border-line text-text-secondary transition-all duration-200 hover:border-accent/30 hover:text-accent"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.03 + 0.3, duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;