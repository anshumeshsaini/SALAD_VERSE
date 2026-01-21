import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sprout, Truck, Utensils, Sparkles } from "lucide-react";


const steps = [
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "Sourced at Dawn",
    description: "Our partner farms harvest the finest organic produce at first light, ensuring peak nutrition and flavor.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Artisan Preparation",
    description: "Master chefs hand-craft each salad in our pristine kitchen, balancing textures and tastes to perfection.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Concierge Delivery",
    description: "Your salad arrives in temperature-controlled premium packaging, timed precisely to your schedule.",
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "The Saladverse Experience",
    description: "Unwrap, indulge, and nourish. Every bite reflects our commitment to freshness, balance, and quality.",
  },
];

export const StorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-primary relative overflow-hidden grain-overlay"
    >
      <div className="luxury-section relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="caption-luxury text-gold mb-4 block">
            Our Philosophy
          </span>
          <h2 className="heading-section text-cream mb-6">
            From Farm to Your Table
          </h2>
          <p className="body-elegant text-cream/70 max-w-2xl mx-auto">
            Every Royal Salad tells a story of dedication, craftsmanship, 
            and an unwavering commitment to your well-being.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cream/10 -translate-x-1/2" />
          <motion.div
            className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-gold to-gold/0 -translate-x-1/2 origin-top"
            style={{
              height: useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]),
            }}
          />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center gap-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <motion.h3
                    className="font-display text-2xl text-cream mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="body-elegant text-cream/60"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Icon Node */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary-dark border-2 border-gold flex items-center justify-center text-gold z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.2 }}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
                >
                  {step.icon}
                </motion.div>

                {/* Spacer for layout */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
