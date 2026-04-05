import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-left-content">
          <div className="auth-brand">
            <div className="auth-glow glow-purple"></div>
            <div className="auth-glow glow-pink"></div>
          </div>
          <div className="auth-left-text">
            <h2>
              Your business card
              <br />
              <span className="grad-text">lives digitally.</span>
            </h2>
            <p>
              Join over 12,000 professionals who use Cardly to make an
              unforgettable first impression.
            </p>
            <div className="auth-testimonial">
              <div className="auth-testimonial-avatar">S</div>
              <div>
                <p className="auth-testimonial-text">
                  "Cardly transformed the way I network. I get compliments on my
                  digital card every time I share it."
                </p>
                <p className="auth-testimonial-author">
                  Sarah Mitchell, Brand Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-right-header">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="auth-right-content">
          {children}
        </div>
        <div className="auth-right-footer">
          <span>&copy; 2025 Cardly. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
