import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Database, Bell, Mail } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: `We collect information you provide directly to us, including:
        • Name and contact information when you subscribe to our services
        • Dietary preferences and health goals you share with us
        • Order history and delivery preferences
        • Communication records with our concierge team via WhatsApp`
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: `Your information helps us deliver the Royal Salad experience:
        • Personalize your salad selections and recommendations
        • Process and deliver your orders with precision
        • Communicate about your subscription and new offerings
        • Improve our services based on your feedback`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Information Protection",
      content: `We implement robust security measures:
        • End-to-end encryption for all communications
        • Secure data storage with industry-standard protocols
        • Regular security audits and updates
        • Limited access to personal information`
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Sharing",
      content: `We respect your privacy:
        • We never sell your personal information
        • Information is shared only with delivery partners as needed
        • Third-party services used comply with privacy regulations
        • You can request data deletion at any time`
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Your Rights",
      content: `You have control over your data:
        • Access and download your personal information
        • Request corrections to your data
        • Opt-out of marketing communications
        • Delete your account and associated data`
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Us",
      content: `For privacy-related inquiries:
        • WhatsApp: +91 9045454741
        • Email: privacy@royalsalad.com
        • We respond within 48 hours`
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
              Your Trust Matters
            </span>
            <h1 className="heading-section text-primary mb-6">
              Privacy Policy
            </h1>
            <p className="body-elegant text-muted-foreground max-w-2xl mx-auto">
              At Royal Salad, we treat your privacy with the same care 
              we put into crafting your perfect salad.
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

export default Privacy;
