import type { ReactNode } from "react";

export type Feature = {
  icon: ReactNode;
  iconClass: string;
  gradient: string;
  title: string;
  description: string;
};

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className={`feat-card ${feature.gradient} fi`}>
      <div className={`feat-icon ${feature.iconClass}`}>{feature.icon}</div>
      <div className="feat-title">{feature.title}</div>
      <p className="feat-desc">{feature.description}</p>
    </div>
  );
}
