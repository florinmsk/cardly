import PricingCard, { type PricingPlan } from "@/components/ui/PricingCard";

const plans: PricingPlan[] = [
  {
    name: "Free",
    price: 0,
    description: "Perfect for trying Cardly and creating your first digital card.",
    features: [
      { label: "1 business card" },
      { label: "5 basic templates" },
      { label: "Shareable link" },
      { label: "QR code" },
      { label: "Advanced analytics", included: false },
    ],
    cta: "Start for free",
  },
  {
    name: "Pro",
    price: 9,
    description: "For professionals who want to make an unforgettable impression.",
    features: [
      { label: "10 business cards" },
      { label: "All templates" },
      { label: "Full analytics" },
      { label: "Custom link" },
      { label: "Priority support" },
    ],
    cta: "Choose Pro →",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Business",
    price: 29,
    description: "For teams and companies that want unified branding.",
    features: [
      { label: "Unlimited cards" },
      { label: "Custom branding" },
      { label: "Up to 25 users" },
      { label: "Team dashboard" },
      { label: "CRM integration" },
    ],
    cta: "Contact us",
  },
];

export default function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="fi">
          <div className="section-tag">Pricing</div>
          <h2 className="section-title">Simple and transparent.</h2>
          <p className="section-sub">Start for free and scale as you grow.</p>
        </div>
        <div className="pricing-grid fi">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
