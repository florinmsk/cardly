import CtaSection from "@/components/marketing/CtaSection";
import DashboardSection from "@/components/marketing/DashboardSection";
import FeaturesSection from "@/components/marketing/FeaturesSection";
import HeroSection from "@/components/marketing/HeroSection";
import PricingSection from "@/components/marketing/PricingSection";
import TemplatesSection from "@/components/marketing/TemplatesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DashboardSection />
      <TemplatesSection />
      <PricingSection />
      <CtaSection />
    </>
  );
}
