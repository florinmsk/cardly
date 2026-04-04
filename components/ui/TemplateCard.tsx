import type { ReactNode } from "react";

export type Template = {
  avatar: ReactNode;
  name: string;
  job: string;
  gradient: string;
  bg: string;
  label: ReactNode;
  category: "Minimalist" | "Bold" | "Colorful";
  selected?: boolean;
};

export default function TemplateCard({ template }: { template: Template }) {
  return (
    <div className={`card-prev ${template.bg}${template.selected ? " sel" : ""}`}>
      <div className="cp-inner">
        <div className="cp-av">{template.avatar}</div>
        <div className="cp-name">{template.name}</div>
        <div className="cp-job">{template.job}</div>
        <div className="cp-line" style={{ background: template.gradient }}></div>
      </div>
      <span className="cp-lbl">{template.label}</span>
    </div>
  );
}
