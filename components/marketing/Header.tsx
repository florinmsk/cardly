import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Header() {
  return (
    <nav id="lnav">
      <div className="lnav-inner">
        <Logo />
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
        </ul>
        <div className="lnav-cta">
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
