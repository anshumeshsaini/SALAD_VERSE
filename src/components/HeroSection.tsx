import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MagneticButton } from "./MagneticButton";
import { Leaf, Sparkles } from "lucide-react";
import heroSalad from "@/assets/salad-wednesday.jpg";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax + fade
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // 🔥 Background image opacity control
  const bgImageOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, 1] // luxury subtle fade
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 30,
        y: (clientY / innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSubscription = () => {
    document
      .getElementById("subscription")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
      style={{ opacity: sectionOpacity }}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <motion.img
          src={heroSalad}
          alt="Luxury salad"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: bgImageOpacity }}
        />

        <div className="absolute inset-0 bg-gradient-hero opacity-90 animate-gradient" />
      </motion.div>

      {/* Floating light blobs */}
      <motion.div
        className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-gold/10 blur-3xl"
        animate={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        transition={{ type: "spring", damping: 30 }}
      />

      <motion.div
        className="absolute bottom-32 right-[15%] w-48 h-48 rounded-full bg-primary-light/20 blur-3xl"
        animate={{
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
        transition={{ type: "spring", damping: 30 }}
      />

    

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y: textY }}
      >
        <motion.span
          className="caption-luxury text-gold mb-6 block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The SALADVERSE Experience
        </motion.span>

        <motion.h1
          className="heading-display text-cream mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${
              mousePosition.y * 0.1
            }px)`,
          }}
        >
          <span className="block">Curated Wellness,</span>
          <span className="block mt-2">
            Delivered in{" "}
            <span className="italic text-gradient-gold bg-gradient-gold">
              Excellence
            </span>
          </span>
        </motion.h1>

        <motion.p
          className="body-elegant text-cream/80 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Experience the pinnacle of organic luxury. Each salad is a masterpiece,
          handcrafted with rare superfoods and delivered by your personal wellness
          concierge.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <MagneticButton variant="gold" onClick={scrollToSubscription}>
            Begin Your Journey
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            onClick={() =>
              document
                .getElementById("builder")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Craft Your Salad
          </MagneticButton>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
