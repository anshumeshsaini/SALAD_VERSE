import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText, Truck, CreditCard, RefreshCw, AlertCircle, Scale } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Service Agreement",
      content: `By subscribing to Royal Salad, you agree to:
        • Provide accurate contact and delivery information
        • Maintain an active WhatsApp number for order communications
        • Notify us of any dietary restrictions or allergies
        • Use our services for personal, non-commercial purposes`
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Delivery Terms",
      content: `Our delivery commitment:
        • We deliver Monday through Saturday (Sunday off)
        • Delivery windows are coordinated via WhatsApp
        • Someone must be available to receive fresh orders
        • Delivery areas are limited to select premium localities`
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Subscription & Payment",
      content: `Subscription details:
        • All subscriptions are managed through our WhatsApp concierge
        • Payments are processed before delivery cycles begin
        • Prices may vary based on seasonal ingredient availability
        • Custom plans are quoted individually`
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Modifications & Cancellations",
      content: `Flexibility in your subscription:
        • Pause your subscription with 48-hour notice
        • Modify orders before the daily cutoff time
        • Cancel anytime with no hidden fees
        • Resume paused subscriptions via WhatsApp`
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Quality Guarantee",
      content: `Our commitment to excellence:
        • 100% organic, premium ingredients guaranteed
        • If unsatisfied, contact us within 2 hours of delivery
        • Replacements or credits for quality issues
        • We take food safety extremely seriously`
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: `Please note:
        • We are not responsible for allergic reactions from undisclosed allergies
        • Nutritional information is approximate
        • Force majeure events may affect delivery
        • Disputes will be resolved through mediation`
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
              Terms of Service
            </span>
            <h1 className="heading-section text-primary mb-6">
              Terms & Conditions
            </h1>
            <p className="body-elegant text-muted-foreground max-w-2xl mx-auto">
              Clear and fair terms for our partnership in your wellness journey.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Effective: January 2026
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

export default Terms;
