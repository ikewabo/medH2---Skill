"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "100vh" }}>
      <div className="container" style={{ paddingBottom: "40px" }}>
        {/* Section Header */}
        <div className="section-title-wrap" style={{ textAlign: "center", marginBottom: "50px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="shield">✓</span> Medical Excellence
          </div>
          <h1 className="section-title" style={{ fontSize: "3.2rem", fontFamily: "var(--font-playfair), serif", color: "var(--navy)" }}>
            Who We Are
          </h1>
          <p className="section-desc" style={{ margin: "20px auto 0", maxWidth: "700px" }}>
            Premium, value-based medical concierge services connecting patients worldwide to elite healthcare in Switzerland and Spain.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="about-benefits-grid">
          <article className="glass-card" style={{ padding: "40px 30px", background: "#fff", border: "1px solid rgba(0, 0, 0, 0.04)", borderRadius: "16px" }}>
            <div className="icon-circle" style={{ fontSize: "2rem", marginBottom: "20px", display: "inline-flex", color: "var(--accent)" }}>
              ✈
            </div>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy)", fontSize: "1.6rem", marginBottom: "15px" }}>
              Optimized Logistics
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Concierge travel, luxury accommodations, and seamless transit coordination to ensure a stress-free journey.
            </p>
          </article>

          <article className="glass-card" style={{ padding: "40px 30px", background: "#fff", border: "1px solid rgba(0, 0, 0, 0.04)", borderRadius: "16px" }}>
            <div className="icon-circle" style={{ fontSize: "2rem", marginBottom: "20px", display: "inline-flex", color: "var(--accent)" }}>
              ☊
            </div>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy)", fontSize: "1.6rem", marginBottom: "15px" }}>
              Liaison & Translation
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Dedicated bilingual interpreters eliminating communication barriers with medical boards and specialists.
            </p>
          </article>

          <article className="glass-card" style={{ padding: "40px 30px", background: "#fff", border: "1px solid rgba(0, 0, 0, 0.04)", borderRadius: "16px" }}>
            <div className="icon-circle" style={{ fontSize: "2rem", marginBottom: "20px", display: "inline-flex", color: "var(--accent)" }}>
              ✦
            </div>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy)", fontSize: "1.6rem", marginBottom: "15px" }}>
              Swiss Excellence
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Accredited specialist network adhering to the absolute highest clinical protocols and safety guidelines.
            </p>
          </article>

          <article className="glass-card" style={{ padding: "40px 30px", background: "#fff", border: "1px solid rgba(0, 0, 0, 0.04)", borderRadius: "16px" }}>
            <div className="icon-circle" style={{ fontSize: "2rem", marginBottom: "20px", display: "inline-flex", color: "var(--accent)" }}>
              ♥
            </div>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy)", fontSize: "1.6rem", marginBottom: "15px" }}>
              Bespoke Care
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Empathy-driven timelines tailored to your personal comfort, specific diagnosis, and recovery preferences.
            </p>
          </article>
        </div>

        {/* Dynamic CTA Block */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <div className="glass-card" style={{ maxWidth: "600px", margin: "0 auto", padding: "40px", background: "#fff", border: "1px solid rgba(0, 0, 0, 0.04)", borderRadius: "16px" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy)", fontSize: "2rem", marginBottom: "15px" }}>
              Ready to Begin Your Journey?
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "30px", fontSize: "1rem", lineHeight: "1.6" }}>
              Meet our team of distinguished coordinators or schedule an assessment.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/doctors" className="hero-btn primary">
                <span>Meet Coordinators</span>
                <span className="btn-arrow">→</span>
              </Link>
              <Link href="/appointment" className="hero-btn secondary">
                <span>Book Consultation</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
