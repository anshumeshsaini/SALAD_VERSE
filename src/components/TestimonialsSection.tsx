import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Saladverse has completely changed how I look at healthy food. Fresh ingredients, perfect balance, and consistency every single time. This is lifestyle nutrition done right.",
    author: "Amit Sharma",
    title: "Business Owner, Mathura",
  },
  {
    quote: "I’ve tried multiple healthy food brands, but Saladverse stands out. The quality, hygiene, and customization are exactly what modern Indian consumers expect.",
    author: "Neha Agarwal",
    title: "Chartered Accountant, Mathura",
  },
  {
    quote: "Clean, nutritious, and genuinely satisfying. My fitness coach recommended Saladverse, and now it’s part of my daily routine.",
    author: "Rohit Verma",
    title: "Fitness Enthusiast, Mathura",
  },
  {
    quote: "What I love most about Saladverse is the attention to detail. From fresh produce to smart portioning, it feels thoughtfully crafted for health-conscious people.",
    author: "Pooja Mishra",
    title: "Entrepreneur, Mathura",
  },
];


export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);

  const currentTestimonial = testimonials[currentIndex];
  const words = currentTestimonial.quote.split(" ");

  // Auto-advance testimonials
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Word-by-word reveal
  useEffect(() => {
    setDisplayedWords([]);
    const timeouts: NodeJS.Timeout[] = [];
    
    words.forEach((word, index) => {
      const timeout = setTimeout(() => {
        setDisplayedWords((prev) => [...prev, word]);
      }, index * 80);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [currentIndex]);

  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl" />

      <div
        className="luxury-section relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="caption-luxury text-gold mb-4 block">
            Testimonials
          </span>
          <h2 className="heading-section text-primary mb-6">
            Words from Our Clientele
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  className="inline-block mb-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <Quote className="w-12 h-12 text-gold/40" />
                </motion.div>

                <p className="font-display text-2xl md:text-3xl lg:text-4xl text-primary leading-relaxed mb-8">
                  {displayedWords.map((word, i) => (
                    <motion.span
                      key={`${currentIndex}-${i}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-block mr-2"
                    >
                      {word}
                    </motion.span>
                  ))}
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: words.length * 0.08 + 0.3 }}
                >
                  <p className="font-medium text-primary">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.title}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group relative p-2"
              >
                <motion.div
                  className={`w-12 h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-gold" : "bg-primary/20"
                  }`}
                  whileHover={{ scale: 1.1 }}
                />
                {index === currentIndex && !isHovered && (
                  <motion.div
                    className="absolute inset-0 flex items-center"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 8, ease: "linear" }}
                    style={{ originX: 0 }}
                  >
                    <div className="w-full h-1 bg-gold/50 rounded-full" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
