import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const categories = [
    {
      name: "Programming Languages",
      icon: "⟨/⟩",
      skills: ["Python", "Java", "JavaScript", "SQL", "C++", "HTML/CSS"],
    },
    {
      name: "AI & Machine Learning",
      icon: "🧠",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Vision-Language Models",
        "Large Language Models",
        "RAG",
        "Generative AI",
        "Agentic AI",
        "Computer Vision",
        "Edge AI",
        "Conversational AI",
        "Speech-to-Text",
        "Text-to-Speech",
        "Semantic Search",
        "Cognitive Architectures",
        "Reasoning & Planning",
        "Memory Systems",
      ],
    },
    {
      name: "AI Tools & Frameworks",
      icon: "⚡",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "HuggingFace",
        "LangGraph",
        "CrewAI",
        "AutoGen",
        "Pydantic AI",
        "Pinecone",
        "ChromaDB",
        "Weaviate",
        "LangChain",
        "LoRA",
        "OpenCV",
        "LlamaIndex",
        "YOLO",
        "Ollama",
        "vLLM",
        "LiteLLM",
        "DSPy",
        "Haystack",
        "Instructor",
        "Guardrails AI",
      ],
    },
    {
      name: "MLOps & Cloud",
      icon: "☁️",
      skills: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "MLFlow",
        "Model Evaluation",
        "Safety Guardrails",
        "Human-in-the-Loop",
        "Weights & Biases",
        "LangSmith",
        "Prompt Flow",
      ],
    },
    {
      name: "Frontend & Design",
      icon: "🎨",
      skills: [
        "React",
        "Vue.js",
        "Angular",
        "Next.js",
        "Figma",
        "Responsive Design",
        "Cross-Browser Compat.",
        "UI/UX Design",
        "Prototyping",
      ],
    },
    {
      name: "Additional Tools",
      icon: "🔧",
      skills: ["UiPath", "Neo4j", "LiveKit", "FastAPI", "Streamlit", "Gradio", "LangServe"],
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
          <p className="text-body-lg text-text-secondary max-w-xl mt-4">
            A comprehensive toolkit spanning AI engineering, cloud infrastructure,
            and modern frontend development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
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