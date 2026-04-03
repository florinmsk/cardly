"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Header() {
  return (
    <nav id="lnav">
      <div className="lnav-inner">
        <div className="logo">
          Card<span>ly</span>
        </div>
        <ul className="lnav-links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#templates">Templates</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <div className="lnav-cta">
          <div className="theme-toggle" id="themeToggle">
            <Icon icon="ph:moon" width={18} />
          </div>
          <Link href="/login" className="btn btn-md btn-ghost">
            Sign in
          </Link>
          <Link href="/register" className="btn btn-md btn-primary">
            Try for free →
          </Link>
        </div>
      </div>
    </nav>
  );
}
