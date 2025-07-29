import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      color: "text-blue-600",
      skills: [
        { name: "Java", color: "from-orange-500/30 to-red-500/30 border-orange-500/40" },
        { name: "Python", color: "from-blue-500/30 to-indigo-500/30 border-blue-500/40" },
        { name: "SQL", color: "from-blue-500/30 to-cyan-500/30 border-blue-500/40" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: "fas fa-layer-group",
      color: "text-purple-600",
      skills: [
        { name: "Spring Boot", color: "from-green-400/30 to-lime-400/30 border-green-400/40" },
        { name: "FastAPI", color: "from-cyan-400/30 to-blue-400/30 border-cyan-400/40" },
        { name: "Streamlit", color: "from-pink-300/30 to-rose-400/30 border-pink-300/40" },
        { name: "React.js", color: "from-sky-400/30 to-blue-500/30 border-sky-400/40" },
        { name: "Pandas", color: "from-teal-300/30 to-cyan-300/30 border-teal-300/40" },
        { name: "Scikit-learn", color: "from-yellow-300/30 to-amber-400/30 border-yellow-300/40" },
        { name: "NumPy", color: "from-indigo-300/30 to-violet-400/30 border-indigo-300/40" }
      ]
    },
    {
      title: "Databases & Storage",
      icon: "fas fa-database",
      color: "text-green-600",
      skills: [
        { name: "PostgreSQL", color: "from-blue-600/30 to-indigo-600/30 border-blue-600/40" },
        { name: "MySQL", color: "from-orange-600/30 to-yellow-600/30 border-orange-600/40" }
      ]
    },
    {
      title: "Soft Skills",
      icon: "fas fa-users",
      color: "text-pink-600",
      skills: [
        { name: "Team Collaboration", color: "from-purple-500/30 to-pink-500/30 border-purple-500/40" },
        { name: "Technical Communication", color: "from-blue-500/30 to-purple-500/30 border-blue-500/40" },
        { name: "Ownership", color: "from-green-500/30 to-blue-500/30 border-green-500/40" },
        { name: "Time Management", color: "from-indigo-500/30 to-purple-500/30 border-indigo-500/40" },
        { name: "Problem Solving", color: "from-yellow-400/30 to-amber-400/30 border-yellow-400/40" },
        { name: "Adaptability", color: "from-teal-400/30 to-cyan-400/30 border-teal-400/40" }
      ]
    },
    {
      title: "Machine Learning & Data",
      icon: "fas fa-robot",
      color: "text-yellow-600",
      skills: [
        { name: "Scikit-learn", color: "from-yellow-300/30 to-amber-400/30 border-yellow-300/40" },
        { name: "Pandas", color: "from-teal-300/30 to-cyan-300/30 border-teal-300/40" },
        { name: "Matplotlib", color: "from-indigo-300/30 to-blue-400/30 border-indigo-300/40" },
        { name: "Seaborn", color: "from-pink-300/30 to-purple-400/30 border-pink-300/40" },
        { name: "OpenCV", color: "from-green-400/30 to-cyan-400/30 border-green-400/40" },
        { name: "LLM Integration", color: "from-purple-400/30 to-indigo-500/30 border-purple-400/40" },
        { name: "RAG Pipelines", color: "from-cyan-400/30 to-blue-500/30 border-cyan-400/40" }
      ]
    },
    {
      title: "Security",
      icon: "fas fa-shield-alt",
      color: "text-red-600",
      skills: [
        { name: "JWT Auth", color: "from-red-400/30 to-pink-400/30 border-red-400/40" },
        { name: "Role-Based Access Control", color: "from-yellow-400/30 to-orange-400/30 border-yellow-400/40" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-100/50 to-white/50 circuit-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold gradient-text mb-4" data-testid="skills-title">Technical & Soft Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* First row: 4 normal boxes */}
          {skillCategories.slice(0, 4).map((category, i) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl p-6 space-y-4 border border-white/30"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              data-testid={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <i className={`${category.icon} text-2xl ${category.color}`}></i>
                <h3 className="text-xl font-space font-semibold text-slate-800">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    className={`skill-badge inline-block px-4 py-2 bg-gradient-to-r ${skill.color} rounded-full text-sm text-slate-700 font-medium ${["Languages", "Frameworks & Libraries"].includes(category.title) ? 'font-jetbrains' : ''}`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: (i * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    viewport={{ once: true }}
                    data-testid={`skill-badge-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Second row: two wide boxes, each col-span-2 */}
          {skillCategories.slice(4).map((category, i) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl p-6 space-y-4 border border-white/30 col-span-2"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: (4 + i) * 0.1 }}
              viewport={{ once: true }}
              data-testid={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <i className={`${category.icon} text-2xl ${category.color}`}></i>
                <h3 className="text-xl font-space font-semibold text-slate-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    className={`skill-badge inline-block px-4 py-2 bg-gradient-to-r ${skill.color} rounded-full text-sm text-slate-700 font-medium`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: ((4 + i) * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    viewport={{ once: true }}
                    data-testid={`skill-badge-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
