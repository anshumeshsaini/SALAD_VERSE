import { motion } from "framer-motion";
import {  Facebook, Linkedin, Clock, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/dunkey logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to know more about Royal Salad services 🥗"
    );
    window.open(`https://wa.me/919045454741?text=${message}`, "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary py-16 relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cream rounded-full blur-3xl" />
      </div>

      <div className="luxury-section relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl text-cream mb-4">
            <motion.a
  href="#"
  className="font-display text-xl md:text-2xl flex items-center"

  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <img
    src={logo}
    alt="Logo"
    className="h-8 md:h-28 lg:h-28 w-auto object-contain"
  />
</motion.a>
            </h3>
            <p className="text-sm text-cream/60 leading-relaxed mb-4">
              The pinnacle of organic luxury. 
              Curated wellness, delivered with excellence.
            </p>
            {/* Schedule Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-cream/10 rounded-xl">
              <Clock className="w-4 h-4 text-gold" />
              <span className="text-xs text-cream/80">Mon–Sat • Sunday Off</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-medium text-cream mb-4 text-sm uppercase tracking-wider">
              Experience
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Our Philosophy", id: "about" },
                { label: "Subscription Plans", id: "subscription" },
                { label: "Bespoke Builder", id: "builder" },
                { label: "Weekly Menu", id: "menu" },
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-cream/60 hover:text-gold transition-colors duration-300 border-animate inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-medium text-cream mb-4 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppContact}
                className="flex items-center gap-2 text-sm text-cream/60 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9045454741
              </button>
              <a
                href="mailto:concierge@royalsalad.com"
                className="flex items-center gap-2 text-sm text-cream/60 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
           saladversemathura@gmail.com
              </a>
            </div>
            
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-medium text-cream mb-4 text-sm uppercase tracking-wider">
              Get Started
            </h4>
            <p className="text-sm text-cream/60 mb-4">
              Ready to elevate your wellness? Our concierge is just a message away.
            </p>
            <motion.button
              onClick={handleWhatsAppContact}
              className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat with Concierge
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            © {currentYear} Royal Salad. All rights reserved.
          </p>
          <div className="flex gap-6">
           
          </div>
        </div>
      </div>
    </footer>
  );
};
