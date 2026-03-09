import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      institution: "Karunya Institute of Technology & Sciences",
      degree: "B.Tech, Computer Science and Engineering",
      field: "Specialization in Artificial Intelligence",
      period: "Aug 2023 — Present",
      location: "Coimbatore",
      gpa: "GPA: 7.77",
    },
  ];

  const achievements = ["2nd Prize — Startup TN Thamizhi Hackathon"];

  const languages = ["English (Professional)", "Tamil (Native)"];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="education" className="section-padding bg-secondary" aria-label="Education and Achievements">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Background</span>
          <h2 className="section-title">Education & Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Education — Main column */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {education.map((edu, i) => (
              <motion.div key={i} className="card" variants={fadeUp}>
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6.5" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <h3 className="font-display text-heading text-text-primary">
                        {edu.institution}
                      </h3>
                      <span className="text-caption font-mono text-text-muted whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-body-sm text-text-secondary mb-1">{edu.degree}</p>
                    {edu.field && (
                      <p className="text-body-sm text-accent">{edu.field}</p>
                    )}
                    <div className="flex items-center gap-4 mt-3">
                      {edu.gpa && (
                        <span className="text-caption px-2.5 py-1 rounded-md bg-primary border border-border-line text-text-secondary font-mono">
                          {edu.gpa}
                        </span>
                      )}
                      {edu.location && (
                        <span className="text-caption text-text-muted flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {edu.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sidebar — Achievements & Languages */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          >
            {/* Achievements */}
            <motion.div className="card" variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg" role="img" aria-label="Trophy">🏆</span>
                <h3 className="font-display text-body font-semibold text-text-primary">
                  Achievements
                </h3>
              </div>
              <ul className="space-y-3">
                {achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-body-sm text-text-secondary">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div className="card" variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg" role="img" aria-label="Globe">🌐</span>
                <h3 className="font-display text-body font-semibold text-text-primary">
                  Languages
                </h3>
              </div>
              <ul className="space-y-3">
                {languages.map((language, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-body-sm text-text-secondary">{language}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Continuous Learning Card */}
            <motion.div
              className="p-5 rounded-xl bg-accent-muted border border-accent/20"
              variants={fadeUp}
            >
              <h4 className="text-body-sm font-semibold text-accent mb-2">
                Always Learning
              </h4>
              <p className="text-caption text-text-secondary leading-relaxed">
                Continuously exploring new technologies, participating in hackathons,
                and contributing to open-source to sharpen my craft.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;