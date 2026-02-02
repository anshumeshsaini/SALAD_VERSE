import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { Leaf, Beef, Apple, Droplets, ChevronRight, ChevronLeft, Sparkles } from "lucide-react";

import saladMonday from "@/assets/salad-monday.jpg";
import saladTuesday from "@/assets/salad-tuesday.jpg";
import saladWednesday from "@/assets/salad-wednesday.jpg";
import saladThursday from "@/assets/salad-thursday.jpg";
import saladFriday from "@/assets/salad-friday.jpg";
import saladSaturday from "@/assets/salad-saturday.jpg";

interface Ingredient {
  id: string;
  name: string;
  nutrition: string;
  color: string;
  emoji: string;
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items: Ingredient[];
}

const categories: Category[] = [
  {
    id: "greens",
    title: "Select Your Greens",
    subtitle: "The foundation of your royal salad",
    icon: <Leaf className="w-6 h-6" />,
    items: [
      { id: "kale", name: "Tuscan Kale", nutrition: "Rich in Vitamin K", color: "bg-green-600", emoji: "🥬" },
      { id: "spinach", name: "Baby Spinach", nutrition: "Iron & Folate", color: "bg-green-500", emoji: "🌿" },
      { id: "arugula", name: "Wild Arugula", nutrition: "Detox Properties", color: "bg-green-400", emoji: "🍃" },
      { id: "mixed", name: "Royal Mixed Greens", nutrition: "Complete Balance", color: "bg-emerald-500", emoji: "🥗" },
    ],
  },
  {
    id: "proteins",
    title: "Choose Your Protein",
    subtitle: "Premium, ethically sourced",
    icon: <Beef className="w-6 h-6" />,
    items: [
      { id: "salmon", name: "Wild Salmon", nutrition: "Omega-3 Rich", color: "bg-orange-400", emoji: "🐟" },
      { id: "chicken", name: "Free-Range Chicken", nutrition: "Lean Protein", color: "bg-amber-300", emoji: "🍗" },
      { id: "tofu", name: "Organic Tofu", nutrition: "Plant Protein", color: "bg-yellow-100", emoji: "🧈" },
      { id: "falafel", name: "House Falafel", nutrition: "Fiber Rich", color: "bg-amber-600", emoji: "🧆" },
    ],
  },
  {
    id: "superfoods",
    title: "Add Superfoods",
    subtitle: "Elevate your nutrition",
    icon: <Apple className="w-6 h-6" />,
    items: [
      { id: "avocado", name: "Hass Avocado", nutrition: "Healthy Fats", color: "bg-green-600", emoji: "🥑" },
      { id: "quinoa", name: "Tri-Color Quinoa", nutrition: "Complete Protein", color: "bg-amber-200", emoji: "🌾" },
      { id: "goji", name: "Goji Berries", nutrition: "Antioxidants", color: "bg-red-500", emoji: "🫐" },
      { id: "nuts", name: "Premium Walnuts", nutrition: "Brain Health", color: "bg-amber-700", emoji: "🥜" },
    ],
  },
  {
    id: "dressings",
    title: "Finish with Dressing",
    subtitle: "House-made, artisanal",
    icon: <Droplets className="w-6 h-6" />,
    items: [
      { id: "tahini", name: "Lemon Tahini", nutrition: "Calcium & Zinc", color: "bg-amber-100", emoji: "🍋" },
      { id: "vinaigrette", name: "Champagne Vinaigrette", nutrition: "Low Sugar", color: "bg-yellow-200", emoji: "🍾" },
      { id: "goddess", name: "Green Goddess", nutrition: "Herb Infused", color: "bg-green-400", emoji: "🌱" },
      { id: "miso", name: "White Miso Ginger", nutrition: "Probiotic Boost", color: "bg-amber-300", emoji: "🍯" },
    ],
  },
];

const inspirationImages = [
  saladMonday,
  saladTuesday,
  saladWednesday,
  saladThursday,
  saladFriday,
  saladSaturday,
];

export const SaladBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, Ingredient | null>>({
    greens: null,
    proteins: null,
    superfoods: null,
    dressings: null,
  });

  const currentCategory = categories[currentStep];
  const progress = ((currentStep + 1) / categories.length) * 100;
  const isComplete = Object.values(selections).every((s) => s !== null);

  const handleSelect = (item: Ingredient) => {
    setSelections((prev) => ({
      ...prev,
      [currentCategory.id]: item,
    }));
  };

  const handleNext = () => {
    if (currentStep < categories.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleOrder = () => {
    const selectedItems = Object.entries(selections)
      .filter(([_, item]) => item !== null)
      .map(([category, item]) => `${category}: ${item?.name}`)
      .join("\n");

    const message = encodeURIComponent(
      `Hello! I'd like to order my custom Royal Salad 🥗\n\nMy selections:\n${selectedItems}\n\nPlease prepare my bespoke salad!`
    );
    window.open(`https://wa.me/919045454741?text=${message}`, "_blank");
  };

  return (
    <section id="builder" className="py-24 md:py-32 bg-primary relative overflow-hidden grain-overlay">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl" />

      <div className="luxury-section relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="caption-luxury text-gold mb-4 block">
            Bespoke Creation
          </span>
          <h2 className="heading-section text-cream mb-6">
            Craft Your Royal Salad
          </h2>
          <p className="body-elegant text-cream/70 max-w-2xl mx-auto">
            Design a masterpiece tailored to your palate. 
            Each ingredient is carefully selected for optimal nutrition and taste.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between mb-4">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.id}
                onClick={() => setCurrentStep(index)}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all duration-300
                  ${
                    index === currentStep
                      ? "bg-gold text-primary-dark"
                      : index < currentStep
                      ? "bg-cream/20 text-cream"
                      : "text-cream/40"
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.icon}
                <span className="hidden md:inline">{cat.id.charAt(0).toUpperCase() + cat.id.slice(1)}</span>
              </motion.button>
            ))}
          </div>
          <div className="h-1 bg-cream/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-gold"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Builder Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Selection Panel */}
          <motion.div
            className="glass-card-dark rounded-3xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                    {currentCategory.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-cream">
                      {currentCategory.title}
                    </h3>
                    <p className="text-sm text-cream/60">{currentCategory.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {currentCategory.items.map((item, index) => {
                    const isSelected = selections[currentCategory.id]?.id === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        className={`
                          relative p-6 rounded-2xl text-left transition-all duration-300
                          ${
                            isSelected
                              ? "bg-gold/20 border-2 border-gold shadow-gold"
                              : "bg-cream/5 border-2 border-transparent hover:bg-cream/10"
                          }
                        `}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-4xl mb-3">{item.emoji}</div>
                        <h4 className="font-medium text-cream mb-1">{item.name}</h4>
                        <p className="text-xs text-cream/50">{item.nutrition}</p>
                        {isSelected && (
                          <motion.div
                            className="absolute top-3 right-3 w-6 h-6 bg-gold rounded-full flex items-center justify-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring" }}
                          >
                            <Sparkles className="w-3 h-3 text-primary-dark" />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  <motion.button
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all
                      ${currentStep === 0 ? "opacity-30 cursor-not-allowed" : "text-cream hover:bg-cream/10"}
                    `}
                    whileHover={currentStep > 0 ? { x: -3 } : {}}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </motion.button>
                  <motion.button
                    onClick={handleNext}
                    disabled={currentStep === categories.length - 1}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all
                      ${currentStep === categories.length - 1 ? "opacity-30 cursor-not-allowed" : "text-cream hover:bg-cream/10"}
                    `}
                    whileHover={currentStep < categories.length - 1 ? { x: 3 } : {}}
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Preview Panel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Inspiration Gallery */}
            <div className="mb-8">
              <p className="text-sm text-cream/60 mb-4 text-center">Get inspired by our creations</p>
              <div className="grid grid-cols-3 gap-3">
                {inspirationImages.slice(0, 3).map((img, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-square rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={img}
                      alt={`Salad inspiration ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Your Salad Preview */}
            <div className="glass-card-dark rounded-3xl p-6">
              <h3 className="font-display text-2xl text-cream mb-6 text-center">Your Royal Salad</h3>
              
              {/* Selected Ingredients */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.entries(selections).map(([category, item]) => (
                  <motion.div
                    key={category}
                    className={`p-4 rounded-xl ${item ? 'bg-gold/20 border border-gold/30' : 'bg-cream/5 border border-cream/10'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="text-xs text-cream/50 mb-1 capitalize">{category}</p>
                    {item ? (
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{item.emoji}</span>
                        <span className="text-sm text-cream">{item.name}</span>
                      </div>
                    ) : (
                      <p className="text-sm text-cream/30">Not selected</p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Order Button */}
              <MagneticButton
                variant="gold"
                onClick={handleOrder}
                className={`w-full ${!isComplete ? "opacity-50 pointer-events-none" : ""}`}
              >
                Order via WhatsApp
              </MagneticButton>
              {!isComplete && (
                <p className="text-xs text-cream/40 mt-3 text-center">
                  Complete all selections to order
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
