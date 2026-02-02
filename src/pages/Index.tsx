import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WeeklyMenuSection } from "@/components/WeeklyMenuSection";
import { SubscriptionSelector } from "@/components/SubscriptionSelector";
import { SaladBuilder } from "@/components/SaladBuilder";
import { BenefitsSection } from "@/components/BenefitsSection";
import { StorySection } from "@/components/StorySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { WhatsAppConcierge } from "@/components/WhatsAppConcierge";

const Index = () => {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WeeklyMenuSection />
      <SubscriptionSelector />

      <BenefitsSection />
      <section id="story">
        <StorySection />
      </section>
      <TestimonialsSection />
      <Footer />
      <WhatsAppConcierge />
    </main>
  );
};

export default Index;
