"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "120px", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Background Video */}
      <div className="combined-video-wrapper" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="about-video-bg"
          preload="metadata"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        >
          <source src="/assets/Medical_team_transports_patient_202606141908.mp4" type="video/mp4" />
        </video>
        <div className="about-video-overlay" style={{ background: "rgba(10, 25, 47, 0.85)" }}></div>
      </div>

      <div className="container relative-z" style={{ paddingBottom: "80px" }}>
        {/* Section Header */}
        <div className="section-title-wrap" style={{ textAlign: "center", marginBottom: "50px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="shield">✓</span> Medical Excellence
          </div>
          <h1 className="section-title" style={{ color: "#fff", fontSize: "3.5rem", fontFamily: "var(--font-playfair), serif" }}>
            Who We Are
          </h1>
          <p className="section-desc" style={{ color: "#a0aec0", margin: "20px auto 0", maxWidth: "700px" }}>
            Premium, value-based medical concierge services connecting patients worldwide to elite healthcare in Switzerland and Spain.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="about-benefits-strip" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", margin: "40px 0" }}>
          <article className="glass-card" style={{ padding: "40px 30px", border: "1px solid rgba(255, 255, 255, 0.08)", height: "100%" }}>
            <div className="icon-circle" style={{ fontSize: "2rem", marginBottom: "20px", display: "inline-flex" }}>
              ✈
            </div>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.6rem", marginBottom: "15px" }}>
              Optimized Logistics
            </h3>
            <p style={{ color: "#cbd5e0", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Concierge travel, luxury accommodations, and seamless transit coordination to ensure a stress-free journey.
            </p>
          </article>

          <article className="glass-card" style={{ padding: "40px 30px", border: "1px solid rgba(255, 255, 255, 0.08)", height: "100%" }}>
            <div className="icon-circle" style={{ fontSize: "2rem", marginBottom: "20px", display: "inline-flex" }}>
              ☊
            </div>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.6rem", marginBottom: "15px" }}>
              Liaison & Translation
            </h3>
            <p style={{ color: "#cbd5e0", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Dedicated bilingual interpreters eliminating communication barriers with medical boards and specialists.
            </p>
          </article>

          <article className="glass-card" style={{ padding: "40px 30px", border: "1px solid rgba(255, 255, 255, 0.08)", height: "100%" }}>
            <div className="icon-circle" style={{ fontSize: "2rem", marginBottom: "20px", display: "inline-flex" }}>
              ✦
            </div>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.6rem", marginBottom: "15px" }}>
              Swiss Excellence
            </h3>
            <p style={{ color: "#cbd5e0", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Accredited specialist network adhering to the absolute highest clinical protocols and safety guidelines.
            </p>
          </article>

          <article className="glass-card" style={{ padding: "40px 30px", border: "1px solid rgba(255, 255, 255, 0.08)", height: "100%" }}>
            <div className="icon-circle" style={{ fontSize: "2rem", marginBottom: "20px", display: "inline-flex" }}>
              ♥
            </div>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.6rem", marginBottom: "15px" }}>
              Bespoke Care
            </h3>
            <p style={{ color: "#cbd5e0", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Empathy-driven timelines tailored to your personal comfort, specific diagnosis, and recovery preferences.
            </p>
          </article>
        </div>

        {/* Dynamic CTA Block */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <div className="glass-card" style={{ maxWidth: "600px", margin: "0 auto", padding: "40px", border: "1px solid rgba(255,255,255,0.12)" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "2rem", marginBottom: "15px" }}>
              Ready to Begin Your Journey?
            </h2>
            <p style={{ color: "#cbd5e0", marginBottom: "30px", fontSize: "1rem", lineHeight: "1.6" }}>
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
