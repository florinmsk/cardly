import { Check, Minus, Sparkle } from "@phosphor-icons/react/dist/ssr";

export type PricingFeature = {
  label: string;
  included?: boolean;
};

export type PricingPlan = {
  name: string;
  price: number;
  description: string;
  features: PricingFeature[];
  cta: string;
  featured?: boolean;
  badge?: string;
};

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  const checkClass = plan.featured ? "check check-featured" : "check";
  const btnClass = plan.featured
    ? "btn btn-md btn-primary btn-full"
    : "btn btn-md btn-outline btn-full";

  return (
    <div className={`price-card${plan.featured ? " featured" : ""}`}>
      {plan.badge && (
        <span className="price-badge">
          <Sparkle size={14} weight="fill" /> {plan.badge}
        </span>
      )}
      <div className="price-plan">{plan.name}</div>
      <div className="price-amount">
        {plan.price} <span className="price-per">EUR/month</span>
      </div>
      <p className="price-desc">{plan.description}</p>
      <ul className="price-feats">
        {plan.features.map((feat) =>
          feat.included === false ? (
            <li key={feat.label} style={{ color: "var(--muted)" }}>
              <span className="check" style={{ background: "rgba(255,255,255,.05)" }}>
                <Minus size={12} />
              </span>
              {feat.label}
            </li>
          ) : (
            <li key={feat.label}>
              <span className={checkClass}>
                <Check size={12} weight="bold" />
              </span>
              {feat.label}
            </li>
          ),
        )}
      </ul>
      <a href="#" className={btnClass}>
        {plan.cta}
      </a>
    </div>
  );
}
