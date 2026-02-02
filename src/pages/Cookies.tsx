import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Cookie, Settings, BarChart3, Shield, ToggleLeft, HelpCircle } from "lucide-react";

const Cookies = () => {
  const sections = [
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "What Are Cookies?",
      content: `Cookies are small text files stored on your device:
        • They help us remember your preferences
        • Enable smooth website functionality
        • Allow us to understand how you use our site
        • Improve your browsing experience`
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Essential Cookies",
      content: `These cookies are necessary for the website to function:
        • Session management
        • Security features
        • Basic functionality
        • Cannot be disabled`
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Cookies",
      content: `Help us understand website usage:
        • Anonymous usage statistics
        • Page visit patterns
        • Feature popularity
        • Performance optimization`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Preference Cookies",
      content: `Remember your choices:
        • Language preferences
        • Display settings
        • Previously viewed content
        • Personalization options`
    },
    {
      icon: <ToggleLeft className="w-6 h-6" />,
      title: "Managing Cookies",
      content: `You have control over cookies:
        • Browser settings to block cookies
        • Clear existing cookies anytime
        • Accept or reject non-essential cookies
        • Third-party opt-out tools available`
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Questions?",
      content: `We're here to help:
        • WhatsApp: +91 9045454741
        • Email: support@royalsalad.com
        • Available Monday to Saturday
        • Response within 24 hours`
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="luxury-section">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="caption-luxury text-gold mb-4 block">
              Transparency
            </span>
            <h1 className="heading-section text-primary mb-6">
              Cookie Policy
            </h1>
            <p className="body-elegant text-muted-foreground max-w-2xl mx-auto">
              We believe in transparency about how we use technology 
              to enhance your Royal Salad experience.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2026
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="glass-card rounded-3xl p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {section.icon}
                </div>
                <h2 className="font-display text-xl text-primary mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;
