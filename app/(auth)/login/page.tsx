import type { Metadata } from "next";
import Link from "next/link";
import { Envelope, Lock, GoogleLogo, GithubLogo } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return (
    <div className="auth-form-wrapper">
      <div className="auth-form-header">
        <h1>Welcome back</h1>
        <p>Sign in to your account to continue</p>
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
        <span>or continue with email</span>
      </div>

      <form className="auth-form">
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
          <div className="auth-field-header">
            <label htmlFor="password">Password</label>
            <Link href="#" className="auth-link-small">
              Forgot password?
            </Link>
          </div>
          <div className="auth-input-wrapper">
            <Lock size={18} />
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
        </div>

        <button className="btn btn-lg btn-primary btn-full" type="submit">
          Sign in
        </button>
      </form>

      <p className="auth-footer-text">
        Don't have an account?{" "}
        <Link href="/register" className="auth-link">
          Create one for free
        </Link>
      </p>
    </div>
  );
}
