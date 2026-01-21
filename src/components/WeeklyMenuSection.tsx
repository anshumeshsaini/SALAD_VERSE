import { motion } from "framer-motion";
import { Calendar, Clock, Star } from "lucide-react";

import saladMonday from "@/assets/salad-monday.jpg";
import saladTuesday from "@/assets/salad-tuesday.jpg";
import saladWednesday from "@/assets/salad-wednesday.jpg";
import saladThursday from "@/assets/salad-thursday.jpg";
import saladFriday from "@/assets/salad-friday.jpg";
import saladSaturday from "@/assets/salad-saturday.jpg";

const weeklyMenu = [
  {
    day: "Monday",
    name: "Mediterranean Royale",
    description: "Grilled chicken, feta, olives, cherry tomatoes with cream dressing",
    image: saladMonday,
    highlight: "Rich in protein",
  },
  {
    day: "Tuesday",
    name: "Tropical Quinoa Bowl",
    description: "Quinoa, cucumber, red peppers, pineapple with golden mustard",
    image: saladTuesday,
    highlight: "Vitamin C boost",
  },
  {
    day: "Wednesday",
    name: "Autumn Harvest",
    description: "Carrots, apple, orange, beetroot, walnuts with herb vinaigrette",
    image: saladWednesday,
    highlight: "Antioxidant rich",
  },
  {
    day: "Thursday",
    name: "Greek Goddess",
    description: "Falafel, feta, olives, cucumber, tomatoes with tahini",
    image: saladThursday,
    highlight: "Plant protein",
  },
  {
    day: "Friday",
    name: "Protein Power Bowl",
    description: "Mixed beans, chickpeas, corn, peppers with turmeric dressing",
    image: saladFriday,
    highlight: "High fiber",
  },
  {
    day: "Saturday",
    name: "Omega Supreme",
    description: "Grilled salmon, avocado, edamame, mango with miso ginger",
    image: saladSaturday,
    highlight: "Omega-3 rich",
  },
];

export const WeeklyMenuSection = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

      <div className="luxury-section relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="caption-luxury text-gold mb-4 block">
            Weekly Rotation
          </span>
          <h2 className="heading-section text-primary mb-6">
            This Week's Royal Menu
          </h2>
          <p className="body-elegant text-muted-foreground max-w-2xl mx-auto mb-4">
            Each day brings a new culinary masterpiece, crafted with the freshest 
            organic ingredients. Monday to Saturday delivery.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Sunday: Rest Day</span>
          </div>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weeklyMenu.map((item, index) => (
            <motion.div
              key={item.day}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-elevated transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Day Badge */}
                <motion.div
                  className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{item.day}</span>
                  </div>
                </motion.div>

                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-gold/90 backdrop-blur-sm rounded-full">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-primary-dark" />
                    <span className="text-xs font-medium text-primary-dark">{item.highlight}</span>
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl text-white mb-1">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Hover Reveal */}
                <motion.div
                  className="mt-4 pt-4 border-t border-border/50"
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                >
                  <button
                    onClick={() => {
                      const message = encodeURIComponent(
                        `Hello! I'm interested in the ${item.name} (${item.day}'s special) 🥗`
                      );
                      window.open(`https://wa.me/919045454741?text=${message}`, "_blank");
                    }}
                    className="w-full py-3 bg-primary text-cream rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors"
                  >
                    Order This Salad
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sunday Notice */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-soft">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-lg">🌿</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-primary">Sunday Rest Day</p>
              <p className="text-xs text-muted-foreground">
                We take Sundays off to source the freshest ingredients for your week
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
