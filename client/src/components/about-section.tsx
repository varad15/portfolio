import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold gradient-text mb-4" data-testid="about-title">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 hover-shine" data-testid="about-description">
              <p className="text-lg leading-relaxed text-gray-300">
                B.Tech in Computer Engineering (CGPA: 8.58), VIT Pune, Class of 2026. Passionate about ML-driven backend solutions, city-scale complaint automation, and building robust, privacy-focused web systems.
              </p>
            </div>
            
            {/* Education */}
            <motion.div 
              className="glass rounded-2xl p-6 flex items-center gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              data-testid="education-card"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <i className="fas fa-graduation-cap text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-space font-semibold text-white">Vishwakarma Institute of Technology</h3>
                <p className="text-gray-400">B.Tech Computer Engineering • CGPA: 8.58</p>
                <p className="text-gray-500">Class of 2026 • Pune, India</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/workspace.jpg" 
              alt="Modern developer workspace with multiple monitors" 
              className="rounded-2xl shadow-2xl"
              data-testid="workspace-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
