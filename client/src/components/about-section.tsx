import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white/50 to-slate-100/50 hex-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold gradient-text mb-4" data-testid="about-title">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8 hover-shine border border-white/30" data-testid="about-description">
              <p className="text-lg leading-relaxed text-slate-700 font-medium">
B.Tech Computer Engineering (CGPA: 8.58) | VIT Pune, 2026
Aspiring backend engineer with a strong foundation in algorithms, distributed systems, and system design. Passionate about architecting scalable web applications, integrating ML pipelines into production backends, and building privacy-first platforms for real-world impact.              </p>
            </div>
            
            {/* Education */}
            <motion.div 
              className="glass rounded-2xl p-6 flex items-center gap-4 border border-white/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              data-testid="education-card"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <i className="fas fa-graduation-cap text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-xl font-space font-semibold text-slate-800">Vishwakarma Institute of Technology</h3>
                <p className="text-slate-600 font-medium">B.Tech Computer Engineering • CGPA: 8.58</p>
                <p className="text-slate-500">Class of 2026 • Pune, India</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* 
            CUSTOMIZABLE WORKSPACE IMAGE
            ===========================
            To add your own workspace photo:
            1. Add your photo to: public/images/workspace.jpg
            2. Recommended size: 800x600 pixels (landscape)
            3. Show your coding setup, desk, monitors, or development environment
            4. Replace the src URL below with: "/images/workspace.jpg"
          */}
          <motion.div 
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-4 border border-white/30">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern developer workspace with multiple monitors" 
                className="rounded-xl shadow-xl w-full h-auto"
                data-testid="workspace-image"
              />
              <div className="absolute inset-4 bg-gradient-to-t from-slate-900/20 to-transparent rounded-xl pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
