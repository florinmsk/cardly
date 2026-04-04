import {
  ArrowsClockwise,
  ChartBar,
  Link as LinkIcon,
  PencilSimple,
  Palette,
  ShareNetwork,
} from "@phosphor-icons/react/dist/ssr";
import FeatureCard, { type Feature } from "@/components/ui/FeatureCard";

const features: Feature[] = [
  {
    icon: <PencilSimple size={24} />,
    iconClass: "fi-v",
    gradient: "fc-grad1",
    title: "Drag & drop editor",
    description: "Build your card in minutes with our intuitive editor. No technical skills required.",
  },
  {
    icon: <Palette size={24} />,
    iconClass: "fi-t",
    gradient: "fc-grad2",
    title: "40+ Premium templates",
    description: "Choose from a wide range of professional designs optimized for mobile.",
  },
  {
    icon: <ShareNetwork size={24} />,
    iconClass: "fi-p",
    gradient: "fc-grad3",
    title: "Instant sharing",
    description: "Share via link, QR, NFC or directly on WhatsApp, email or SMS.",
  },
  {
    icon: <ChartBar size={24} />,
    iconClass: "fi-y",
    gradient: "fc-grad1",
    title: "Real-time analytics",
    description: "Track how many people viewed your card and what actions they took.",
  },
  {
    icon: <LinkIcon size={24} />,
    iconClass: "fi-b",
    gradient: "fc-grad2",
    title: "Custom link",
    description: "Get a unique URL like cardly.com/andrei and share it anywhere.",
  },
  {
    icon: <ArrowsClockwise size={24} />,
    iconClass: "fi-g",
    gradient: "fc-grad3",
    title: "Real-time updates",
    description: "Update once and everyone who has your card sees the new version instantly.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="fi">
          <div className="section-tag">Features</div>
          <h2 className="section-title">
            Everything you need
            <br />
            in one place.
          </h2>
          <p className="section-sub">
            From creation to sharing, Cardly covers the entire lifecycle of your digital business cards.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
