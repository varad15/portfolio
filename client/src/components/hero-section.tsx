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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 tech-bg">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 circuit-bg opacity-30"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-purple-300/15 to-pink-300/15 rounded-full blur-2xl"
          animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* 
            CUSTOMIZABLE PROFILE PHOTO
            ========================
            To add your own profile photo:
            1. Add your photo to: public/images/profile.jpg
            2. Recommended size: 400x400 pixels (square)
            3. Use a professional headshot with good lighting
            4. Replace the src URL below with: "/images/profile.jpg"
          */}
          <motion.div 
            className="relative inline-block"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-40 h-40 mx-auto rounded-full glass p-1 shadow-2xl border-2 border-white/20">
              <img 
                src="/images/profile.jpg"
                alt="Varad Babasaheb Jumbad - Professional Portrait" 
                className="w-full h-full rounded-full object-cover"
                data-testid="profile-image"
              />
              {/* Animated border glow effect */}
            </div>
          </motion.div>
          
          {/* Name and Title */}
          <motion.div 
            className="space-y-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
         <h1
           className="text-5xl md:text-7xl font-space font-bold drop-shadow-sm text-black"
           data-testid="hero-name"
         >
           Varad Babasaheb Jumbad
         </h1>

            <p
              className="text-xl md:text-2xl text-black font-medium"
              data-testid="hero-tagline"
            >
              Backend Developer & ML Enthusiast | VIT Pune
            </p>

            {/* Animated Role Typewriter */}
            <div className="h-12 flex items-center justify-center">
              <span
                className="text-lg md:text-xl text-black font-jetbrains font-semibold"
                data-testid="typewriter-text"
              >
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[currentRoleIndex]}
                </motion.span>
                <span className="animate-pulse text-purple-500">|</span>
              </span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-6 text-slate-600"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full" data-testid="contact-phone">
              <i className="fas fa-phone text-indigo-500"></i>
              <span className="font-medium">+91 7798735903</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full" data-testid="contact-location">
              <i className="fas fa-map-marker-alt text-purple-500"></i>
              <span className="font-medium">Pune, India</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full" data-testid="contact-email">
              <i className="fas fa-envelope text-blue-500"></i>
              <span className="font-medium">varadjumbad15@gmail.com</span>
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white rounded-full font-medium hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 glass border border-white/20"
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
