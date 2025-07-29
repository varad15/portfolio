import { motion } from "framer-motion";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "NVIDIA Deep Learning",
      subtitle: "Fundamentals of Deep Learning",
      icon: "fas fa-brain",
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Google Cloud",
      subtitle: "Computing Foundations",
      icon: "fab fa-google",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Kubernetes",
      subtitle: "For Beginners",
      icon: "fas fa-ship",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Generative AI",
      subtitle: "For Beginners",
      icon: "fas fa-robot",
      gradient: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold gradient-text mb-4" data-testid="certifications-title">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.title}
              className="glass rounded-2xl p-6 hover-shine text-center group cursor-pointer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              data-testid={`certification-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-r ${cert.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 5 }}
              >
                <i className={`${cert.icon} text-2xl text-white`}></i>
              </motion.div>
              <h3 className="text-lg font-space font-semibold text-white mb-2" data-testid={`cert-title-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm" data-testid={`cert-subtitle-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {cert.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
