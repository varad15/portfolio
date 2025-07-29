import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "Backend Developer",
    "Machine Learning Practitioner",
    "Project Leader",
    "Team Player"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900"></div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Photo */}
          <motion.div 
            className="relative inline-block"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-40 h-40 mx-auto rounded-full glass p-1 animate-glow">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Varad Babasaheb Jumbad - Professional Portrait" 
                className="w-full h-full rounded-full object-cover"
                data-testid="profile-image"
              />
            </div>
          </motion.div>
          
          {/* Name and Title */}
          <motion.div 
            className="space-y-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl font-space font-bold gradient-text" data-testid="hero-name">
              Varad Babasaheb Jumbad
            </h1>
            <p className="text-xl md:text-2xl text-gray-300" data-testid="hero-tagline">
              Backend Developer & ML Enthusiast | VIT Pune
            </p>
            
            {/* Animated Role Typewriter */}
            <div className="h-12 flex items-center justify-center">
              <span className="text-lg md:text-xl text-blue-400 font-jetbrains" data-testid="typewriter-text">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[currentRoleIndex]}
                </motion.span>
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-6 text-gray-400"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2" data-testid="contact-phone">
              <i className="fas fa-phone text-blue-400"></i>
              <span>+91 7798735903</span>
            </div>
            <div className="flex items-center gap-2" data-testid="contact-location">
              <i className="fas fa-map-marker-alt text-purple-400"></i>
              <span>Pune, India</span>
            </div>
            <div className="flex items-center gap-2" data-testid="contact-email">
              <i className="fas fa-envelope text-green-400"></i>
              <span>varadjumbad15@gmail.com</span>
            </div>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div 
            className="pt-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              data-testid="cta-button"
            >
              <i className="fas fa-paper-plane"></i>
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
