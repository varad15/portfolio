import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="py-8 border-t border-slate-300 bg-gradient-to-r from-slate-50 to-white"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-slate-700 font-medium" data-testid="footer-copyright">
            © 2025 Varad Babasaheb Jumbad. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2 font-medium" data-testid="footer-tech">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
