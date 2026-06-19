"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main id="home">
      {/* ---------------------------------------------------- */}
      {/* Hero Section */}
      {/* ---------------------------------------------------- */}
      <section className="hero" aria-labelledby="hero-title" style={{ position: "relative" }}>
        {/* Background Video with PNG fallback via CSS wrapper background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video-bg"
          poster="/assets/hero-bg.png"
          preload="auto"
        >
          <source src="/assets/heroA.mp4" type="video/mp4" />
        </video>

        <div className="content">
          <h1 id="hero-title">Care Without Borders</h1>
          <div className="hero-underline"></div>
          <p className="subhead">
            Personalized medical concierge support connecting patients to trusted specialists, coordinated treatment, and compassionate care across Switzerland and Spain.
          </p>
          
          <div className="hero-actions">
            <Link className="hero-btn primary" href="/appointment">
              <span>Book Appointment</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <Link className="hero-btn secondary" href="/about">
              <span>Our Services</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Floating Stat Aside */}
        <aside className="stat-card" aria-label="Patient trust statistic">
          <div className="stat-icon" aria-hidden="true">☤</div>
          <div className="stat-number">15K+</div>
          <div className="stat-label">Patients Trust Us</div>
          <Link className="stat-link" href="/about">
            Care journeys completed successfully
          </Link>
        </aside>

        {/* Benefits Strip */}
        <section className="benefits" id="services" aria-label="Key service benefits">
          <article className="benefit">
            <div className="icon-circle" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="benefit-svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>
            <div className="benefit-content">
              <strong>Specialist Network</strong>
              <span>Access to leading European specialists and clinics</span>
            </div>
            <span className="benefit-chevron" aria-hidden="true">›</span>
          </article>

          <article className="benefit">
            <div className="icon-circle" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="benefit-svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375C2.754 3.75 2.25 4.254 2.25 4.875v1.5c0 .621.504 1.125 1.125 1.125ZM9 3.75h6v-1.5H9v1.5Z" />
              </svg>
            </div>
            <div className="benefit-content">
              <strong>Travel Support</strong>
              <span>Seamless travel & stay arrangements</span>
            </div>
            <span className="benefit-chevron" aria-hidden="true">›</span>
          </article>

          <article className="benefit">
            <div className="icon-circle" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="benefit-svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <div className="benefit-content">
              <strong>Personalized Care</strong>
              <span>Tailored treatment plans just for you</span>
            </div>
            <span className="benefit-chevron" aria-hidden="true">›</span>
          </article>

          <article className="benefit">
            <div className="icon-circle" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="benefit-svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12-3.75c0 5.592-3.824 10.29-9 11.623-5.176-1.332-9-6.03-9-11.622 0-1.31.21-2.571.598-3.751A11.959 11.959 0 0 1 12 2.714c4.326 0 8.243 2.296 10.402 5.736Z" />
              </svg>
            </div>
            <div className="benefit-content">
              <strong>Post-Treatment Guidance</strong>
              <span>Ongoing support for your recovery</span>
            </div>
            <span className="benefit-chevron" aria-hidden="true">›</span>
          </article>
        </section>
      </section>

      {/* ---------------------------------------------------- */}
      {/* About Us Teaser Section */}
      {/* ---------------------------------------------------- */}
      <section className="section about-section" style={{ position: "relative", overflow: "hidden", background: "#f8fafc" }}>
        <div className="container teaser-grid">
          <div>
            <div className="eyebrow">
              <span className="shield">✓</span> Medical Excellence
            </div>
            <h2 className="section-title" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy)", fontSize: "2.6rem" }}>
              Who We Are
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.8", margin: "20px 0 30px" }}>
              MedHcare Swiss is a premium medical concierge service connecting patients worldwide to elite clinical healthcare networks in Switzerland and Spain. We organize custom logistics, translations, and bespoke care pathways with absolute Swiss precision.
            </p>
            <Link href="/about" className="hero-btn primary">
              <span>Read Our Story</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
          <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", height: "300px" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            >
              <source src="/assets/Medical_team_transports_patient_202606141908.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* Team / Coordinators Teaser Section */}
      {/* ---------------------------------------------------- */}
      <section className="section" style={{ background: "#f0f6fa" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-title-wrap">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="shield">✓</span> Leadership Team
            </div>
            <h2 className="section-title" style={{ fontFamily: "var(--font-playfair), serif" }}>
              Our Distinguished Coordinators
            </h2>
            <p className="section-desc" style={{ margin: "20px auto 30px", maxWidth: "650px" }}>
              Our medical programs are led by public health experts dedicated to arranging seamless treatment programs.
            </p>
          </div>

          <div style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
            <div className="glass-card" style={{ padding: "30px", background: "#fff", border: "1px solid rgba(0,0,0,0.03)", borderRadius: "12px", width: "320px", textAlign: "left" }}>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy)", fontSize: "1.4rem", marginBottom: "5px" }}>
                Dr. Therese Diane Bikye
              </h3>
              <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600", textTransform: "uppercase", marginBottom: "15px" }}>
                European Coordinator & VP
              </p>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Swiss-trained practitioner specializing in custom medical assessments.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "30px", background: "#fff", border: "1px solid rgba(0,0,0,0.03)", borderRadius: "12px", width: "320px", textAlign: "left" }}>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy)", fontSize: "1.4rem", marginBottom: "5px" }}>
                Emmanuel I. Nebeolisa
              </h3>
              <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: "600", textTransform: "uppercase", marginBottom: "15px" }}>
                Managing Director & COO
              </p>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Spanish-trained consultant managing European healthcare logistics.
              </p>
            </div>
          </div>

          <Link href="/doctors" className="hero-btn secondary">
            <span>Meet Our Team</span>
            <span className="btn-arrow">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
