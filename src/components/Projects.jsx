import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Journal Paper Assistant",
      badge: "Open Source",
      description:
        "An open-source alternative to jenni.ai, built around a LangChain-based reviewing agent that validates research papers before submission. Also supports writing a paper from scratch, guiding the author from outline through to a submission-ready draft.",
      tech: ["LangChain", "LLMs", "Agentic AI", "Python", "NLP", "RAG"],
      highlights: [
        "LangChain reviewing agent",
        "Pre-submission validation",
        "Write a paper from scratch",
        "Open-source alternative to jenni.ai",
      ],
      color: "#D97757",
    },
    {
      title: "Reflexlabs Official Website",
      badge: "Production",
      description:
        "Developed and deployed the company's official website in React and Next.js, delivering a responsive, high-performance interface aligned with brand identity.",
      tech: ["React", "Next.js", "UI/UX Design", "Performance Optimization"],
      highlights: [
        "Brand-aligned design",
        "High-performance interface",
        "Responsive and scalable",
        "Developed and deployed",
      ],
      color: "#E08D6F",
    },
    {
      title: "R&D Paper Evaluation System",
      badge: "Agentic AI",
      description:
        "An agentic AI system that uses multi-agent reasoning to autonomously evaluate research papers for quality, relevance, and novelty — automating scoring, feedback generation, and decision support.",
      tech: ["Agentic AI", "Multi-agent Systems", "NLP", "Python", "Automated Evaluation"],
      highlights: [
        "Autonomous paper analysis",
        "Quality & novelty assessment",
        "Automated feedback generation",
        "Multi-agent reasoning",
      ],
      color: "#EBB39C",
    },
    {
      title: "Tamil Story Generator",
      badge: "🏆 2nd Prize — Startup TN Thamizhi",
      description:
        "A Generative AI application that produces creative Tamil stories and advertisement content, deployed with Streamlit. Built to show that generative models can work as well in Tamil as they do in English.",
      tech: ["Generative AI", "Tamil NLP", "Fine-tuning", "Streamlit", "Python"],
      highlights: [
        "Creative Tamil story generation",
        "Advertisement content creation",
        "Deployed with Streamlit",
        "Fine-tuned language model",
      ],
      color: "#D97757",
    },
    {
      title: "Tamil Nadu Citizen Services Chatbot",
      badge: "Bilingual AI",
      description:
        "A bilingual (Tamil and English) chatbot that answers citizen queries about Tamil Nadu government schemes and services, built on a RAG architecture so language is never the barrier to a benefit someone qualifies for.",
      tech: ["RAG", "Tamil NLP", "LLMs", "Python", "FastAPI"],
      highlights: [
        "Bilingual Tamil–English support",
        "Government schemes information",
        "RAG architecture",
        "Multi-department coverage",
      ],
      color: "#E08D6F",
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
          <p className="prose-serif text-body-lg text-text-secondary max-w-xl mt-4">
            A selection of projects spanning agentic AI, retrieval-augmented systems,
            Tamil-language NLP, and production frontend engineering.
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
                <p className="prose-serif text-body text-text-secondary leading-relaxed mb-8">
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