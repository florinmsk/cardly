"use client";

import { useState } from "react";
import {
  Fire,
  Leaf,
  Moon,
  Waves,
  Star,
} from "@phosphor-icons/react";
import TemplateCard, { type Template } from "@/components/ui/TemplateCard";

const categories = ["All", "Minimalist", "Bold", "Colorful"] as const;

const templates: Template[] = [
  {
    avatar: <Moon size={20} />,
    name: "Elena Marin",
    job: "UI Designer",
    gradient: "linear-gradient(90deg,#6e56ff,#ff4d8d)",
    bg: "cp-bg1",
    label: <><Star size={14} weight="fill" /> Midnight</>,
    category: "Minimalist",
    selected: true,
  },
  {
    avatar: <Leaf size={20} />,
    name: "Radu Popa",
    job: "Consultant",
    gradient: "linear-gradient(90deg,#00e5c0,#00b4ff)",
    bg: "cp-bg2",
    label: <><Leaf size={14} /> Forest</>,
    category: "Minimalist",
  },
  {
    avatar: <Fire size={20} />,
    name: "Ioana Dumitrescu",
    job: "Creative Director",
    gradient: "linear-gradient(90deg,#ff4d8d,#ffd166)",
    bg: "cp-bg3",
    label: <><Fire size={14} /> Ember</>,
    category: "Bold",
  },
  {
    avatar: <Waves size={20} />,
    name: "Dan Gheorghe",
    job: "Software Engineer",
    gradient: "linear-gradient(90deg,#00b4ff,#00e5c0)",
    bg: "cp-bg4",
    label: <><Waves size={14} /> Ocean</>,
    category: "Colorful",
  },
];

export default function TemplatesSection() {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All"
    ? templates
    : templates.filter((t) => t.category === active);

  return (
    <section className="tabs-section" id="templates">
      <div className="container">
        <div className="themes-hdr fi">
          <div>
            <div className="section-tag">Templates</div>
            <h2 className="section-title">
              Designs for
              <br />
              every professional.
            </h2>
          </div>
          <div className="theme-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`theme-pill${active === cat ? " active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="themes-grid fi">
          {filtered.map((template) => (
            <TemplateCard key={template.name} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}
