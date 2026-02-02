import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import logo from "@/assets/dunkey logo.png";

const navLinks = [
  { label: "Experience", href: "#subscription" },
  { label: "Our Story", href: "#story" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgb(250, 249, 246)", "rgb(38, 50, 40)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300"
        style={{
          backgroundColor,
          borderColor: isScrolled ? "rgba(0,0,0,0.05)" : "transparent",
        }}
      >
        {/* ⬇️ Increased height for big logo */}
        <nav className="luxury-section flex items-center justify-between h-28 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            style={{ color: textColor }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={logo}
              alt="Logo"
              className="
                h-20           /* Mobile HUGE */
                sm:h-24        /* Large phones */
                md:h-24        /* Tablet */
                lg:h-28        /* Desktop */
                w-auto
                object-contain
              "
              transition={{ type: "spring", stiffness: 280 }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium border-animate transition-colors duration-300"
                style={{ color: textColor }}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.button>
            ))}

            <MagneticButton
              variant="gold"
              onClick={() => scrollToSection("#subscription")}
              className="text-sm px-6 py-2"
            >
              Subscribe
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: textColor }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 bg-primary z-40 md:hidden flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : "-100%",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="font-display text-3xl text-cream hover:text-gold transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              {link.label}
            </motion.button>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: 0.4 }}
          >
            <MagneticButton
              variant="gold"
              onClick={() => scrollToSection("#subscription")}
            >
              Subscribe Now
            </MagneticButton>
          </motion.div>
        </nav>
      </motion.div>
    </>
  );
};
