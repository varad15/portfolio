import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "GrievanceGrid",
      subtitle: "Full-Stack Smart Municipal Dashboard",
      description: "City portal with geo-logging, dashboards, multilingual complaint classification, JWT-based roles, analytics, and in-progress RAG chatbot/live support.",
      image: "/images/grievancegrid.jpg",
      imageAlt: "Abstract geometric pattern representing data dashboard",
      tech: [
        { name: "Python", color: "bg-blue-500/20 border-blue-500/30" },
        { name: "FastAPI", color: "bg-teal-500/20 border-teal-500/30" },
        { name: "Streamlit", color: "bg-red-500/20 border-red-500/30" },
        { name: "PostgreSQL", color: "bg-blue-600/20 border-blue-600/30" },
        { name: "JWT", color: "bg-orange-500/20 border-orange-500/30" }
      ],
      gradient: "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
      hoverColor: "group-hover:text-blue-400"
    },
    {
      title: "FireSentinel",
      subtitle: "YOLOv8 Wildfire Early Warning System",
      description: "Real-time fire/smoke detection in surveillance video with OpenCV pipeline achieving 90%+ model accuracy. Published in IEEE Xplore (ICDICI 2024).",
      image: "/images/firesentinel.jpg",
      imageAlt: "Abstract geometric pattern representing AI and machine learning",
      tech: [
        { name: "Python", color: "bg-blue-500/20 border-blue-500/30" },
        { name: "YOLOv8", color: "bg-purple-500/20 border-purple-500/30" },
        { name: "OpenCV", color: "bg-green-500/20 border-green-500/30" },
        { name: "NumPy", color: "bg-yellow-500/20 border-yellow-500/30" }
      ],
      gradient: "from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      hoverColor: "group-hover:text-purple-400",
      award: true
    },
    {
      title: "FinVault",
      subtitle: "Secure Online Banking Simulator",
      description: "Role-based online banking platform with JWT authentication, dynamic fund transfers, comprehensive transaction history, and admin oversight capabilities.",
      image: "/images/finvault.jpg",
      imageAlt: "Abstract geometric pattern representing secure financial systems",
      tech: [
        { name: "Java", color: "bg-orange-500/20 border-orange-500/30" },
        { name: "Angular", color: "bg-red-500/20 border-red-500/30" },
        { name: "Spring Boot", color: "bg-green-500/20 border-green-500/30" },
        { name: "MySQL", color: "bg-orange-600/20 border-orange-600/30" },
        { name: "JWT", color: "bg-purple-500/20 border-purple-500/30" }
      ],
      gradient: "from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700",
      hoverColor: "group-hover:text-green-400"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold gradient-text mb-4" data-testid="projects-title">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className="project-card glass rounded-2xl p-6 hover-shine group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              data-testid={`project-card-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="mb-6">
                <img 
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-48 object-cover rounded-xl"
                  data-testid={`project-image-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </div>
              
              <div className="space-y-4">
                <h3 className={`text-2xl font-space font-bold text-white ${project.hoverColor} transition-colors`} data-testid={`project-title-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {project.title}
                </h3>
                <p className="text-gray-400" data-testid={`project-subtitle-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>{project.subtitle}</p>
                <p className="text-gray-300 leading-relaxed" data-testid={`project-description-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2" data-testid={`project-tech-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {project.tech.map((tech) => (
                    <span 
                      key={tech.name}
                      className={`px-2 py-1 ${tech.color} rounded text-xs font-jetbrains`}
                      data-testid={`tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                {project.award && (
                  <div className="flex items-center gap-2 text-sm text-green-400" data-testid="project-award">
                    <i className="fas fa-award"></i>
                    <span>Published in IEEE Xplore</span>
                  </div>
                )}
                
                <div className="pt-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg font-medium transition-all duration-300 hover:scale-105`}
                    data-testid={`project-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <i className="fab fa-github"></i>
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
