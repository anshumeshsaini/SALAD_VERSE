import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Crown, Sparkles, Star } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

type PlanType = "weekly" | "monthly" | "custom";

interface Plan {
  id: PlanType;
  name: string;
  price: string;
  period: string;
  salads: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: "weekly",
    name: "Weekly Indulgence",
    price: "₹1499",
    period: "per week",
    salads: "7 Royal Salads",
    features: [
      "Daily fresh delivery",
      "Seasonal ingredients",
      "WhatsApp support",
      "Flexible pause anytime",
    ],
    icon: <Star className="w-6 h-6" />,
  },
  {
    id: "monthly",
    name: "Monthly Prestige",
    price: "₹5399",
    period: "per month",
    salads: "24 Royal Salads",
    features: [
      "Priority morning delivery",
      "Rare superfood selection",
      "Personal concierge",
      "Exclusive seasonal menu",
      "Complimentary wellness consult",
    ],
    icon: <Crown className="w-6 h-6" />,
    popular: true,
  },
  {
    id: "custom",
    name: "Bespoke Experience",
    price: "Custom",
    period: "tailored for you",
    salads: "Unlimited Access",
    features: [
      "Private chef curation",
      "Any time delivery",
      "Dietary consultations",
      "Event catering included",
      "Family plans available",
      "White-glove service",
    ],
    icon: <Sparkles className="w-6 h-6" />,
  },
];

export const SubscriptionSelector = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("monthly");
  const [hoveredPlan, setHoveredPlan] = useState<PlanType | null>(null);

  const handleSubscribe = (plan: Plan) => {
    const message = encodeURIComponent(
      `Hello! I'm interested in the ${plan.name} plan 🥗\n\nPlan: ${plan.name}\nPrice: ${plan.price} ${plan.period}\n\nPlease help me get started with my Royal Salad subscription.`
    );
    window.open(`https://wa.me/919045454741?text=${message}`, "_blank");
  };

  return (
    <section id="subscription" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="luxury-section relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="caption-luxury text-gold mb-4 block">
            Membership
          </span>
          <h2 className="heading-section text-primary mb-6">
            Choose Your Royal Plan
          </h2>
          <p className="body-elegant text-muted-foreground max-w-2xl mx-auto">
            Every subscription is a commitment to your wellness, 
            curated with the finest organic ingredients from around the world.
          </p>
        </motion.div>

        {/* Plan Toggle */}
        <motion.div
          className="flex justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`
                px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                ${
                  selectedPlan === plan.id
                    ? "bg-primary text-primary-foreground shadow-elevated"
                    : "bg-white/60 text-primary hover:bg-white"
                }
              `}
            >
              {plan.id.charAt(0).toUpperCase() + plan.id.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`
                relative rounded-3xl p-8 transition-all duration-500 cursor-pointer
                ${
                  selectedPlan === plan.id
                    ? "bg-white shadow-elevated scale-[1.02]"
                    : "bg-white/60 hover:bg-white hover:shadow-soft"
                }
                ${plan.popular ? "ring-2 ring-gold" : ""}
              `}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-gold rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.3 }}
                >
                  <span className="text-xs font-semibold text-primary-dark uppercase tracking-wider">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <motion.div
                className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                  ${
                    selectedPlan === plan.id || hoveredPlan === plan.id
                      ? "bg-gradient-gold text-primary-dark shadow-gold"
                      : "bg-primary/10 text-primary"
                  }
                `}
                animate={{
                  scale: hoveredPlan === plan.id ? 1.1 : 1,
                  rotate: hoveredPlan === plan.id ? 5 : 0,
                }}
              >
                {plan.icon}
              </motion.div>

              <h3 className="font-display text-2xl text-primary mb-2">
                {plan.name}
              </h3>

              <div className="mb-6">
                <motion.span
                  className="text-4xl font-display text-primary"
                  key={`${plan.id}-price`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {plan.price}
                </motion.span>
                <span className="text-muted-foreground ml-2">
                  {plan.period}
                </span>
              </div>

              <p className="text-sm font-medium text-gold mb-6">
                {plan.salads}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <MagneticButton
                variant={selectedPlan === plan.id ? "gold" : "secondary"}
                onClick={() => handleSubscribe(plan)}
                className="w-full"
              >
                {plan.id === "custom" ? "Contact Concierge" : "Subscribe Now"}
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
