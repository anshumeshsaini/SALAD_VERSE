import { motion } from "framer-motion";
import { Clock, Star } from "lucide-react";

import foxtail from "@/assets/foxtail.png";
import organe from "@/assets/organe.png";
import cottage from "@/assets/Cottagecheese.png";
import mexican from "@/assets/salad-friday.jpg";
import vegcaser from "@/assets/veg-caser.png";

const weeklyMenu = [
  {
    highlight: "High Protein",
    name: "Mexican Tri Beans Salad",
    ingredients: [
      "Chickpea",
      "Black Chana",
      "Kidney Beans",
      "Lobia Beans",
      "Lettuce",
      "Red Capsicum",
      "Yellow Capsicum",
      "Sweet Corn",
      "Green Coriander",
      "Onion (Optional)",
      "Chipotle Dressing",
    ],
    nutrition: {
      calories: 325,
      protein: 15,
      carbs: 40,
      fat: 15,
      fiber: 11,
    },
    image: mexican,
  },
  {
    highlight: "Grilled Special",
    name: "Cottage Cheese & Grilled Veggie Salad",
    ingredients: [
      "Lettuce",
      "Red Capsicum (Grilled)",
      "Broccoli (Grilled)",
      "Carrot (Grilled)",
      "Paneer (Grilled)",
      "Mushroom (Grilled)",
      "Jalapeño",
      "Balsamic Vinaigrette Dressing",
    ],
    nutrition: {
      calories: 285.2,
      protein: 17.3,
      carbs: 19.9,
      fat: 16.1,
      fiber: 11,
    },
    image: cottage,
  },
  {
    highlight: "Light & Fresh",
    name: "Foxtail Millet Pineapple Salad",
    ingredients: [
      "Foxtail Millet",
      "Pineapple",
      "Red Capsicum",
      "Persian Cucumber",
      "Green Coriander",
      "Feta Cheese",
      "Jalapeño Pineapple Cilantro Dressing",
    ],
    nutrition: {
      calories: 320,
      protein: 10,
      carbs: 30,
      fat: 12,
      fiber: 6,
    },
    image: foxtail,
  },
  {
    highlight: "Vitamin Rich",
    name: "Orange Beet Salad",
    ingredients: [
      "Persian Cucumber",
      "Beetroot",
      "Apple",
      "Carrot",
      "Orange",
      "Coriander",
      "Lettuce",
      "Walnut",
      "Pomegranate",
      "Feta Cheese",
      "Orange Ginger Vinaigrette",
    ],
    nutrition: {
      calories: 320,
      protein: 14,
      carbs: 40,
      fat: 18,
      fiber: 5,
    },
    image: organe,
  },
  {
    highlight: "Classic",
    name: "Veg Caesar Salad",
    ingredients: [
      "Lettuce",
      "Persian Cucumber",
      "French Beans",
      "Red Capsicum",
      "Yellow Capsicum",
      "Onion (Optional)",
      "Broccoli Mushroom",
      "Sun-dried Tomatoes",
      "Black Olives",
      "Croutons",
      "Cheese",
      "Classic Caesar Dressing",
    ],
    nutrition: {
      calories: 285.2,
      protein: 17.3,
      carbs: 19.9,
      fat: 16.1,
      fiber: 4,
    },
    image: vegcaser,
  },
];

export const WeeklyMenuSection = () => {
  return (
    <section
      id="menu"
      className="py-24 md:py-32 bg-cream relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

      <div className="luxury-section relative z-10">
        {/* Header */}
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
            Thoughtfully crafted salads using fresh, seasonal, and organic
            ingredients. Delivered Monday to Saturday.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Sunday: Rest Day
            </span>
          </div>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weeklyMenu.map((item, index) => (
            <motion.div
              key={item.name}
              className="relative overflow-hidden rounded-3xl bg-white shadow-soft hover:shadow-elevated transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Highlight */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-gold/90 rounded-full">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-primary-dark" />
                    <span className="text-xs font-medium text-primary-dark">
                      {item.highlight}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl text-white">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Ingredients */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    Ingredients
                  </h4>
                  <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                    {item.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>

                {/* Nutrition */}
                <div className="pt-4 border-t border-border/50">
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    Nutritional Value (per serving)
                  </h4>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex justify-between">
                      <span>Calories</span>
                      <span className="font-medium">
                        {item.nutrition.calories} kcal
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Protein</span>
                      <span className="font-medium">
                        {item.nutrition.protein} g
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Carbs</span>
                      <span className="font-medium">
                        {item.nutrition.carbs} g
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fat</span>
                      <span className="font-medium">
                        {item.nutrition.fat} g
                      </span>
                    </div>
                    <div className="flex justify-between col-span-2">
                      <span>Fiber</span>
                      <span className="font-medium">
                        {item.nutrition.fiber} g
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    const msg = encodeURIComponent(
                      `Hello! I'm interested in the ${item.name} 🥗`
                    );
                    window.open(
                      `https://wa.me/919045454741?text=${msg}`,
                      "_blank"
                    );
                  }}
                  className="w-full mt-2 py-3 bg-primary text-cream rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  Order This Salad
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
