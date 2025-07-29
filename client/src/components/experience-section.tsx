import { motion } from "framer-motion";

export default function ExperienceSection() {
  const techStack = [
    { name: "Python", color: "bg-blue-500/20 border-blue-500/30" },
    { name: "FastAPI", color: "bg-teal-500/20 border-teal-500/30" },
    { name: "PostgreSQL", color: "bg-blue-600/20 border-blue-600/30" },
    { name: "Scikit-learn", color: "bg-orange-500/20 border-orange-500/30" },
    { name: "Logistic Regression", color: "bg-purple-500/20 border-purple-500/30" },
    { name: "MultiLabelBinarizer", color: "bg-pink-500/20 border-pink-500/30" }
  ];

  const highlights = [
    {
      icon: "fas fa-robot",
      color: "bg-blue-500/20 text-blue-400",
      text: "Led development of ML system auto-classifying/routing civic complaints to departments."
    },
    {
      icon: "fas fa-shield-alt",
      color: "bg-purple-500/20 text-purple-400",
      text: "Integrated with PostgreSQL & enforced data security/NDA compliance."
    },
    {
      icon: "fas fa-language",
      color: "bg-green-500/20 text-green-400",
      text: "Developed multilingual models (Marathi/Hindi/English) with scikit-learn."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold gradient-text mb-4" data-testid="experience-title">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glass rounded-2xl p-8 hover-shine"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="experience-card"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-space font-bold text-white mb-2" data-testid="job-title">Project Lead</h3>
                <h4 className="text-xl text-blue-400 mb-2" data-testid="company-name">Pune Municipal Corporation</h4>
                <p className="text-gray-400" data-testid="job-duration">Complaint Analysis & Categorization • 2025–Present</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full" data-testid="job-status">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Currently Active</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4" data-testid="job-highlights">
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                  data-testid={`highlight-${index}`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 ${highlight.color} rounded-full flex items-center justify-center mt-1`}>
                    <i className={`${highlight.icon} text-sm`}></i>
                  </div>
                  <p className="text-gray-300">{highlight.text}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-6 pt-6 border-t border-gray-700"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h5 className="text-sm font-semibold text-gray-400 mb-3">Technology Stack:</h5>
              <div className="flex flex-wrap gap-2" data-testid="tech-stack">
                {techStack.map((tech, index) => (
                  <motion.span 
                    key={tech.name}
                    className={`px-3 py-1 ${tech.color} rounded-full text-xs font-jetbrains`}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + (index * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    data-testid={`tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
