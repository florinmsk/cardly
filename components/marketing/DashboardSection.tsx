import {
  ChartBar,
  Gear,
  IdentificationCard,
  Palette,
  PencilSimple,
  ShareNetwork,
} from "@phosphor-icons/react/dist/ssr";

export default function DashboardSection() {
  return (
    <section className="db-section">
      <div className="container">
        <div className="fi">
          <div className="section-tag">Dashboard</div>
          <h2 className="section-title">
            Manage everything
            <br />
            from a single panel.
          </h2>
          <p className="section-sub">
            The Cardly interface gives you full control, with detailed
            statistics and quick actions.
          </p>
        </div>
        <div className="db-preview fi">
          <div className="db-topbar">
            <div className="db-dots">
              <div className="db-dot d1"></div>
              <div className="db-dot d2"></div>
              <div className="db-dot d3"></div>
            </div>
            <div className="db-tabs-lp">
              <button className="db-tab-lp active">My cards</button>
              <button className="db-tab-lp">Analytics</button>
              <button className="db-tab-lp">Settings</button>
            </div>
            <div style={{ width: "80px" }}></div>
          </div>
          <div className="db-body-lp">
            <div className="db-sidebar-lp">
              <div className="db-nav-lp active"><IdentificationCard size={16} /> My cards</div>
              <div className="db-nav-lp"><PencilSimple size={16} /> Editor</div>
              <div className="db-nav-lp"><ShareNetwork size={16} /> Sharing</div>
              <div className="db-nav-lp"><ChartBar size={16} /> Analytics</div>
              <div className="db-nav-lp"><Palette size={16} /> Templates</div>
              <div className="db-nav-lp"><Gear size={16} /> Settings</div>
            </div>
            <div className="db-main-lp">
              <div className="db-main-title">My business cards</div>
              <div className="db-main-sub">
                4 active cards — updated just now
              </div>
              <div className="mini-cards-grid">
                <div className="mini-card mc-bg1 is-active">
                  <span className="active-pill">Active</span>
                  <div
                    className="mc-av"
                    style={{
                      background: "linear-gradient(135deg,#6e56ff,#ff4d8d)",
                    }}
                  >
                    A
                  </div>
                  <div className="mc-name">Andrei Constantin</div>
                  <div className="mc-role">Product Manager</div>
                  <div className="mc-stats-row">
                    <div>
                      <div className="mc-stat-num">1.2k</div>
                      <div className="mc-stat-lbl">Views</div>
                    </div>
                    <div>
                      <div className="mc-stat-num">234</div>
                      <div className="mc-stat-lbl">Saves</div>
                    </div>
                  </div>
                </div>
                <div className="mini-card mc-bg2">
                  <div
                    className="mc-av"
                    style={{
                      background: "linear-gradient(135deg,#00e5c0,#6e56ff)",
                    }}
                  >
                    A
                  </div>
                  <div className="mc-name">Andrei — Design</div>
                  <div className="mc-role">Brand Designer</div>
                  <div className="mc-stats-row">
                    <div>
                      <div className="mc-stat-num">430</div>
                      <div className="mc-stat-lbl">Views</div>
                    </div>
                    <div>
                      <div className="mc-stat-num">78</div>
                      <div className="mc-stat-lbl">Saves</div>
                    </div>
                  </div>
                </div>
                <div className="mini-card mc-bg3">
                  <div
                    className="mc-av"
                    style={{
                      background: "linear-gradient(135deg,#ffd166,#ff4d8d)",
                    }}
                  >
                    A
                  </div>
                  <div className="mc-name">Andrei — Startup</div>
                  <div className="mc-role">Co-founder</div>
                  <div className="mc-stats-row">
                    <div>
                      <div className="mc-stat-num">890</div>
                      <div className="mc-stat-lbl">Views</div>
                    </div>
                    <div>
                      <div className="mc-stat-num">156</div>
                      <div className="mc-stat-lbl">Saves</div>
                    </div>
                  </div>
                </div>
                <div className="mini-card mc-bg4 mc-new">
                  <div style={{ fontSize: "26px", opacity: 0.3 }}>+</div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--muted)",
                    }}
                  >
                    New card
                  </div>
                </div>
              </div>
            </div>
            <div className="db-panel-lp">
              <div className="panel-title">Statistics</div>
              <div className="an-item">
                <div>
                  <div className="an-lbl">Views today</div>
                  <div className="an-bar">
                    <div className="an-fill" style={{ width: "72%" }}></div>
                  </div>
                </div>
                <div className="an-val an-up">+127</div>
              </div>
              <div className="an-item">
                <div>
                  <div className="an-lbl">Contact saves</div>
                  <div className="an-bar">
                    <div
                      className="an-fill"
                      style={{
                        width: "45%",
                        background: "linear-gradient(90deg,#00e5c0,#6e56ff)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="an-val">23</div>
              </div>
              <div className="an-item">
                <div>
                  <div className="an-lbl">Link clicks</div>
                  <div className="an-bar">
                    <div
                      className="an-fill"
                      style={{
                        width: "58%",
                        background: "linear-gradient(90deg,#ffd166,#ff4d8d)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="an-val">89</div>
              </div>
              <div className="an-item">
                <div>
                  <div className="an-lbl">QR shares</div>
                  <div className="an-bar">
                    <div
                      className="an-fill"
                      style={{
                        width: "30%",
                        background: "linear-gradient(90deg,#ff4d8d,#6e56ff)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="an-val">14</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
