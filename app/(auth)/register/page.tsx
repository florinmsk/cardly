import type { Metadata } from "next";
import Link from "next/link";
import {
  Envelope,
  Lock,
  User,
  GoogleLogo,
  GithubLogo,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Create account",
};

export default function RegisterPage() {
  return (
    <div className="auth-form-wrapper">
      <div className="auth-form-header">
        <h1>Create your account</h1>
        <p>Start building your digital business card today</p>
      </div>

      <div className="auth-social-buttons">
        <button className="btn btn-md btn-outline" type="button">
          <GoogleLogo size={18} weight="bold" />
          Continue with Google
        </button>
        <button className="btn btn-md btn-outline" type="button">
          <GithubLogo size={18} weight="bold" />
          Continue with GitHub
        </button>
      </div>

      <div className="auth-divider">
        <span>or register with email</span>
      </div>

      <form className="auth-form">
        <div className="auth-field">
          <label htmlFor="name">Full name</label>
          <div className="auth-input-wrapper">
            <User size={18} />
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
            />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <div className="auth-input-wrapper">
            <Envelope size={18} />
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="password">Password</label>
          <div className="auth-input-wrapper">
            <Lock size={18} />
            <input
              id="password"
              type="password"
              placeholder="Create a strong password"
              autoComplete="new-password"
            />
          </div>
        </div>

        <div className="auth-perks">
          <div className="auth-perk">
            <CheckCircle size={16} weight="fill" />
            Free forever plan included
          </div>
          <div className="auth-perk">
            <CheckCircle size={16} weight="fill" />
            No credit card required
          </div>
        </div>

        <button className="btn btn-lg btn-primary btn-full" type="submit">
          Create account
        </button>
      </form>

      <p className="auth-footer-text">
        Already have an account?{" "}
        <Link href="/login" className="auth-link">
          Sign in
        </Link>
      </p>
    </div>
  );
}
