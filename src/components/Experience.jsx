import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const experiences = [
    {
      title: "AI/ML Engineer, Intern",
      company: "Airman Aeronautics",
      location: "",
      period: "May 2026 — Present",
      description:
        "Design and ship AI-enhanced features for production applications, integrating machine learning models into existing engineering workflows. Collaborate with the engineering team to translate product requirements into working AI-powered functionality.",
      highlights: [
        "Production AI features",
        "ML model integration",
        "Engineering workflows",
        "Requirements to functionality",
      ],
      current: true,
    },
    {
      title: "Frontend Developer, Intern",
      company: "Reflexlabs AI",
      location: "Remote",
      period: "Oct 2025 — Present",
      description:
        "Build responsive, high-performance web interfaces in React and Next.js aligned with modern UI/UX standards. Partner with design and backend teams to ship production-ready features with cross-browser compatibility.",
      highlights: [
        "React & Next.js interfaces",
        "Modern UI/UX standards",
        "Cross-browser compatibility",
        "Production-ready delivery",
      ],
      current: true,
    },
    {
      title: "Generative AI Engineer, Trainee",
      company: "Karunya Innovation and Design Studio",
      location: "Coimbatore",
      period: "Dec 2024 — Present",
      description:
        "Design and build Generative AI solutions in Python using PyTorch and LangChain during institutional hackathons at Karunya Institute of Technology & Sciences.",
      highlights: [
        "Generative AI solutions",
        "PyTorch & LangChain",
        "Institutional hackathons",
        "Rapid prototyping",
      ],
      current: true,
    },
    {
      title: "Frontend Developer, Intern",
      company: "Computer Technology Centre — Karunya Institute",
      location: "Coimbatore",
      period: "Jun 2025 — Aug 2025",
      description:
        "Built a responsive, interactive website for the AIML department using React, HTML, CSS, and JavaScript.",
      highlights: [
        "React development",
        "Responsive web design",
        "Interactive interfaces",
        "Departmental website",
      ],
      current: false,
    },
    {
      title: "Generative AI Engineer, Intern",
      company: "Postulate Info Tech Pvt Ltd",
      location: "Remote",
      period: "Jun 2024 — Jul 2024",
      description:
        "Fine-tuned pre-trained language models for domain-specific applications, improving output relevance for downstream use cases.",
      highlights: [
        "Fine-tuned language models",
        "Domain-specific applications",
        "Improved output relevance",
        "Downstream evaluation",
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary" aria-label="Professional Experience">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Career</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="prose-serif text-body-lg text-text-secondary max-w-xl mt-4">
            Building at the intersection of AI and frontend engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border-line" aria-hidden="true" />

          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative pl-8 md:pl-20"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-8 top-2 w-2.5 h-2.5 rounded-full -translate-x-1/2 border-2 ${
                    exp.current
                      ? 'bg-accent border-accent shadow-glow-sm'
                      : 'bg-primary border-border-hover'
                  }`}
                  aria-hidden="true"
                />

                <div className="card group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-heading text-text-primary">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent-muted text-accent font-medium uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-body-sm text-text-secondary">{exp.company}</p>
                      {exp.location && <p className="text-caption text-text-muted">{exp.location}</p>}
                    </div>
                    <span className="text-caption font-mono text-text-muted whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="prose-serif text-body-sm text-text-secondary leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, j) => (
                      <span
                        key={j}
                        className="text-caption px-2.5 py-1 rounded-md bg-primary border border-border-line text-text-muted"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-surface/50 border border-border-line"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div>
            <h3 className="font-display text-heading text-text-primary mb-1">
              Interested in collaborating?
            </h3>
            <p className="text-body-sm text-text-secondary">
              Let's explore opportunities to work together on AI projects.
            </p>
          </div>
          <a href="#contact" className="btn-primary whitespace-nowrap flex-shrink-0">
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;