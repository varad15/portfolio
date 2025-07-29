import { motion } from "framer-motion";

export default function LeadershipSection() {
  const skills = [
    { name: "Team Leadership", color: "bg-purple-500/20 border-purple-500/30" },
    { name: "Event Management", color: "bg-blue-500/20 border-blue-500/30" },
    { name: "Logistics Coordination", color: "bg-green-500/20 border-green-500/30" },
    { name: "Strategic Planning", color: "bg-pink-500/20 border-pink-500/30" }
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-b from-slate-100/50 to-white/50 hex-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold gradient-text mb-4" data-testid="leadership-title">Leadership & Extracurriculars</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glass rounded-2xl p-8 hover-shine border border-white/30"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="leadership-card"
          >
            <motion.div 
              className="flex items-center gap-4 mb-6"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <i className="fas fa-globe text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-2xl font-space font-bold text-slate-800" data-testid="leadership-position">Logistics & Function Execution Head</h3>
                <p className="text-indigo-600 text-lg font-semibold" data-testid="leadership-organization">VIT Pune Model United Nations</p>
                <p className="text-slate-600 font-medium" data-testid="leadership-duration">2023–2024</p>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-slate-700 text-lg leading-relaxed font-medium"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              data-testid="leadership-description"
            >
              Led a 15-member team for event operations and logistics, ensuring seamless execution of international conference proceedings and diplomatic simulations.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-3 mt-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              data-testid="leadership-skills"
            >
              {skills.map((skill, index) => (
                <motion.span 
                  key={skill.name}
                  className={`px-4 py-2 ${skill.color} rounded-full text-sm text-slate-700 font-medium border`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  data-testid={`leadership-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
