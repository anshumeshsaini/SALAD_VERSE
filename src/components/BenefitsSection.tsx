import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Leaf, Truck, Heart, Shield, Gem, Clock } from "lucide-react";

const benefits = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "100% Organic",
    description: "Every ingredient certified organic, sourced from exclusive partner farms worldwide.",
    hiddenText: "Zero pesticides. Zero compromises.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "White-Glove Delivery",
    description: "Temperature-controlled, delivered in premium reusable packaging.",
    hiddenText: "Arriving at your preferred time, every time.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Nutritionist Curated",
    description: "Each recipe designed by world-class nutritionists for optimal wellness.",
    hiddenText: "Personalized to your health goals.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Quality Guaranteed",
    description: "Not satisfied? Full refund, no questions asked. That's our promise.",
    hiddenText: "Your satisfaction is our reputation.",
  },
  {
    icon: <Gem className="w-6 h-6" />,
    title: "Rare Ingredients",
    description: "Access to superfoods and micro-greens unavailable in standard markets.",
    hiddenText: "Exclusivity in every bite.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Same-Day Fresh",
    description: "Harvested in the morning, on your table by evening. Ultimate freshness.",
    hiddenText: "From farm to fork in hours.",
  },
];

export const BenefitsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
      />

      <div className="luxury-section relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="caption-luxury text-gold mb-4 block">
            The Royal Standard
          </span>
          <h2 className="heading-section text-primary mb-6">
            Why Discerning Clients Choose Us
          </h2>
          <p className="body-elegant text-muted-foreground max-w-2xl mx-auto">
            Every detail is considered. Every standard is elevated. 
            This is wellness redefined for those who accept nothing less.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border border-border hover:border-gold/30 transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 60px -15px rgba(0,0,0,0.1)" }}
            >
              {/* Gold accent line */}
              <motion.div
                className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-gold origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />

              <motion.div
                className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-gold/10 group-hover:text-gold transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {benefit.icon}
              </motion.div>

              <h3 className="font-display text-xl text-primary mb-3">
                {benefit.title}
              </h3>

              <p className="body-elegant text-sm text-muted-foreground mb-4">
                {benefit.description}
              </p>

              {/* Hidden premium text */}
              <motion.p
                className="text-xs font-medium text-gold overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                whileHover={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {benefit.hiddenText}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
