import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      color: "text-blue-400",
      skills: [
        { name: "Java", color: "from-orange-500/20 to-red-500/20 border-orange-500/30" },
        { name: "Python", color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30" },
        { name: "SQL", color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30" },
        { name: "JavaScript", color: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30" }
      ]
    },
    {
      title: "Frameworks",
      icon: "fas fa-layer-group",
      color: "text-purple-400",
      skills: [
        { name: "Spring Boot", color: "from-green-500/20 to-emerald-500/20 border-green-500/30" },
        { name: "FastAPI", color: "from-teal-500/20 to-cyan-500/20 border-teal-500/30" },
        { name: "Streamlit", color: "from-red-500/20 to-pink-500/20 border-red-500/30" }
      ]
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      color: "text-green-400",
      skills: [
        { name: "PostgreSQL", color: "from-blue-600/20 to-indigo-600/20 border-blue-600/30" },
        { name: "MySQL", color: "from-orange-600/20 to-yellow-600/20 border-orange-600/30" }
      ]
    },
    {
      title: "Soft Skills",
      icon: "fas fa-users",
      color: "text-pink-400",
      skills: [
        { name: "Team Collaboration", color: "from-purple-500/20 to-pink-500/20 border-purple-500/30" },
        { name: "Communication", color: "from-blue-500/20 to-purple-500/20 border-blue-500/30" },
        { name: "Ownership", color: "from-green-500/20 to-blue-500/20 border-green-500/30" },
        { name: "Time Management", color: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold gradient-text mb-4" data-testid="skills-title">Technical & Soft Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              className="glass rounded-2xl p-6 space-y-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              data-testid={`skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <i className={`${category.icon} text-2xl ${category.color}`}></i>
                <h3 className="text-xl font-space font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skill.name}
                    className={`skill-badge inline-block px-4 py-2 bg-gradient-to-r ${skill.color} rounded-full text-sm ${category.title === 'Languages' || category.title === 'Frameworks' ? 'font-jetbrains' : ''}`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
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
