import { motion } from "framer-motion";

export default function ContactSection() {
  const contactMethods = [
    {
      title: "Email",
      icon: "fas fa-envelope",
      gradient: "from-blue-500 to-purple-500",
      value: "varadjumbad15@gmail.com",
      href: "mailto:varadjumbad15@gmail.com",
      testId: "contact-email"
    },
    {
      title: "LinkedIn",
      icon: "fab fa-linkedin",
      gradient: "from-blue-600 to-indigo-600",
      value: "linkedin.com/in/varad-jumbad",
      href: "https://linkedin.com/in/varad-jumbad",
      testId: "contact-linkedin"
    },
    {
      title: "WhatsApp",
      icon: "fab fa-whatsapp",
      gradient: "from-green-500 to-emerald-500",
      value: "+91 7798735903",
      href: "https://wa.me/917798735903",
      testId: "contact-whatsapp"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white/50 to-slate-100/50 circuit-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-space font-bold gradient-text mb-4"
            data-testid="contact-title"
          >
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-700 mt-6 font-medium" data-testid="contact-subtitle">
            Let's discuss opportunities and collaborations
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="glass rounded-2xl p-8 hover-shine border border-white/30 flex flex-col items-center text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              data-testid={method.testId}
            >
              <div
                className={`w-16 h-16 mb-4 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center shadow-lg`}
              >
                <i className={`${method.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-lg font-space font-semibold text-slate-800 mb-2">{method.title}</h3>
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 transition-colors font-medium break-words"
                data-testid={`${method.testId}-link`}
              >
                {method.value}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
