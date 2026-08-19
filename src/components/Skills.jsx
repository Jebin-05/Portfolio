import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const categories = [
    {
      name: "Languages",
      icon: "⟨/⟩",
      skills: ["Python", "Java"],
    },
    {
      name: "AI & Machine Learning",
      icon: "🧠",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Large Language Models",
        "Retrieval-Augmented Generation",
        "Generative AI",
        "Agentic AI",
        "Natural Language Processing",
        "Vision-Language Models",
      ],
    },
    {
      name: "Frameworks & Libraries",
      icon: "⚡",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-Learn",
        "HuggingFace",
        "LangChain",
        "LangGraph",
        "CrewAI",
        "Microsoft AutoGen",
        "Pydantic",
        "Haystack",
      ],
    },
    {
      name: "Vector Databases & Search",
      icon: "🔎",
      skills: ["Pinecone", "ChromaDB", "Weaviate", "FAISS", "Milvus", "Qdrant"],
    },
    {
      name: "Frontend Development",
      icon: "🎨",
      skills: ["React", "Next.js", "HTML/CSS"],
    },
    {
      name: "Backend Development",
      icon: "🔌",
      skills: ["FastAPI", "REST APIs"],
    },
    {
      name: "Databases",
      icon: "🗄️",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    },
    {
      name: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS", "Google Cloud Platform", "Docker"],
    },
    {
      name: "Developer Tools",
      icon: "🔧",
      skills: ["Git", "GitHub", "Linux"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="section-padding bg-primary" aria-label="Technical Skills">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="prose-serif text-body-lg text-text-secondary max-w-xl mt-4">
            The toolkit I build with — spanning AI engineering, retrieval
            infrastructure, and modern frontend development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, i) => (
            <motion.div
              key={i}
              className="card group"
              variants={cardVariants}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border-line">
                <span className="text-lg" role="img" aria-hidden="true">
                  {category.icon}
                </span>
                <h3 className="font-display text-body font-semibold text-text-primary">
                  {category.name}
                </h3>
                <span className="ml-auto text-caption text-text-muted font-mono">
                  {category.skills.length}
                </span>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="text-caption px-2.5 py-1 rounded-md bg-primary border border-border-line text-text-secondary transition-all duration-200 hover:border-accent/30 hover:text-accent hover:bg-accent-muted cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;