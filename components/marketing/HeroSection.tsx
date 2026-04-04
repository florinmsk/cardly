import {
  Envelope,
  FacebookLogo,
  Globe,
  InstagramLogo,
  LinkedinLogo,
  Palette,
  Phone,
  UploadSimple,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-glow glow-purple"></div>
      <div className="hero-glow glow-pink"></div>
      <div className="hero-inner">
        <div className="fi">
          <div className="hero-badge">
            <span className="badge-dot"></span>Over 12,000 active professionals
          </div>
          <h1>
            Your business card
            <br />
            <span className="grad-text">lives digitally.</span>
          </h1>
          <p>
            Create, customize, and share digital business cards in portrait
            format — designed to be shown from your phone screen.
          </p>
          <div className="hero-actions">
            <a href="#" className="btn btn-lg btn-primary">
              Start for free →
            </a>
            <a href="#templates" className="btn btn-lg btn-ghost">
              <Palette size={18} /> View templates
            </a>
          </div>
          <div className="hero-stats">
            <div className="hstat">
              <span className="hstat-num">12K+</span>
              <span className="hstat-lbl">Active users</span>
            </div>
            <div className="hstat">
              <span className="hstat-num">98K</span>
              <span className="hstat-lbl">Cards shared</span>
            </div>
            <div className="hstat">
              <span className="hstat-num">40+</span>
              <span className="hstat-lbl">Templates</span>
            </div>
          </div>
        </div>

        <div className="hero-visual fi">
          <div className="fc fc1">
            <div className="fc-name">Sarah Mitchell</div>
            <div className="fc-role">Brand Designer</div>
            <div
              className="fc-line"
              style={{ background: "linear-gradient(90deg, #00e5c0, #6e56ff)" }}
            ></div>
            <div className="fc-email">sarah@design.co</div>
          </div>
          <div className="fc fc2">
            <div className="fc-name">James Carter</div>
            <div className="fc-role">CEO & Co-founder</div>
            <div
              className="fc-line"
              style={{ background: "linear-gradient(90deg, #ffd166, #ff4d8d)" }}
            ></div>
            <div className="fc-email">james@startup.io</div>
          </div>
          <div className="phone-shell">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <div className="digital-card">
                <div className="dc-avatar">D</div>
                <div className="dc-name">David Brooks</div>
                <div className="dc-role">Product Manager</div>
                <div className="dc-co">TechVentures Inc.</div>
                <div className="dc-div"></div>
                <div className="dc-contacts">
                  <div className="dc-ci">
                    <div className="dc-ci-icon dci-v">
                      <Envelope size={14} />
                    </div>
                    <div>
                      <div className="dc-ci-lbl">Email</div>
                      <div className="dc-ci-val">david@techventures.io</div>
                    </div>
                  </div>
                  <div className="dc-ci">
                    <div className="dc-ci-icon dci-p">
                      <Phone size={14} />
                    </div>
                    <div>
                      <div className="dc-ci-lbl">Phone</div>
                      <div className="dc-ci-val">+1 (555) 234-567</div>
                    </div>
                  </div>
                  <div className="dc-ci">
                    <div className="dc-ci-icon dci-t">
                      <Globe size={14} />
                    </div>
                    <div>
                      <div className="dc-ci-lbl">Website</div>
                      <div className="dc-ci-val">davidbrooks.co</div>
                    </div>
                  </div>
                </div>
                <div className="dc-social">
                  <div className="dc-social-btn"><LinkedinLogo size={14} /></div>
                  <div className="dc-social-btn"><XLogo size={14} /></div>
                  <div className="dc-social-btn"><InstagramLogo size={14} /></div>
                  <div className="dc-social-btn"><FacebookLogo size={14} /></div>
                </div>
                <button className="dc-save-btn">
                  <UploadSimple size={14} /> Save contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
