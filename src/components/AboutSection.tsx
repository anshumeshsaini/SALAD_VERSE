import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroSalad from "@/assets/about.png";

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-cream relative overflow-hidden"
    >
      <div className="luxury-section relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            style={{ scale: imageScale, opacity: imageOpacity }}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroSalad}
                alt="Premium organic salad"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 shadow-elevated"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center">
                <p className="font-display text-4xl text-primary mb-1">150+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Salads Delivered
                </p>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -left-4 bg-gold text-primary-dark px-4 py-2 rounded-full shadow-gold"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider">
                Farm Fresh
              </span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              className="caption-luxury text-gold mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Us
            </motion.span>

            <motion.h2
              className="heading-section text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Where Wellness Meets 
              <span className="italic text-primary-light"> Opulence</span>
            </motion.h2>

            <div className="space-y-6">
              {[
                "We believe that nourishing your body should be an experience, not a compromise. Founded on the principles of exceptional quality and unparalleled service, Royal Salad curates wellness for those who demand excellence in every aspect of their lives.",
                "Each ingredient is hand-selected from our network of exclusive organic farms. Our master chefs transform these treasures into edible art, delivered to you with the precision and care of a fine dining experience.",
                "This isn't just food. This is your daily ritual of self-care, elevated to an art form.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="body-elegant text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {[
                { value: "100%", label: "Organic" },
                { value: "4.9★", label: "Rating" },
                { value: "Same Day", label: "Delivery" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-2xl text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
