"use client";

import Image from "next/image";
import Link from "next/link";

export default function DoctorsPage() {
  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "100vh", background: "#f0f6fa" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap" style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="shield">✓</span> Leadership Team
          </div>
          <h1 className="section-title" style={{ fontSize: "3.2rem", fontFamily: "var(--font-playfair), serif" }}>
            Our Distinguished Coordinators
          </h1>
          <p className="section-desc" style={{ margin: "20px auto 0", maxWidth: "700px" }}>
            Led by internationally recognized public healthcare specialists, committed to arranging
            seamless European treatment programs with absolute precision.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", maxWidth: "1000px", margin: "0 auto" }}>
          <article className="glass-card doctor-card" style={{ display: "flex", background: "#fff", border: "1px solid rgba(0, 0, 0, 0.04)", overflow: "hidden", borderRadius: "16px" }}>
            <div className="doctor-info-wrap" style={{ padding: "40px", flex: "1" }}>
              <div className="doctor-header-flat" style={{ marginBottom: "20px" }}>
                <span className="doctor-role" style={{ display: "block", color: "var(--accent)", textTransform: "uppercase", fontSize: "0.85rem", fontWeight: "600", letterSpacing: "1.5px" }}>
                  European Coordinator & VP
                </span>
                <h2 className="doctor-name" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy)", fontSize: "2rem", margin: "5px 0" }}>
                  Dr. Therese Diane Bikye
                </h2>
                <span className="doctor-credentials" style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
                  Swiss-Trained Medical Practitioner
                </span>
              </div>
              <p className="doctor-bio" style={{ color: "var(--muted)", lineHeight: "1.7", fontSize: "0.98rem" }}>
                Dr. Bikye brings elite Swiss clinical standards and empathy-driven coordination to international healthcare programs.
                Specializing in designing custom medical roadmaps, she orchestrates pre-consultation assessments and clinic selections.
              </p>
            </div>
            <div className="doctor-image-wrap" style={{ flexShrink: 0, width: "300px", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
              <Image
                src="/assets/therese_bikye.png"
                alt="Dr. Therese Diane Bikye"
                className="doctor-image"
                width={300}
                height={300}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </article>

          <article className="glass-card doctor-card" style={{ display: "flex", background: "#fff", border: "1px solid rgba(0, 0, 0, 0.04)", overflow: "hidden", borderRadius: "16px" }}>
            <div className="doctor-info-wrap" style={{ padding: "40px", flex: "1" }}>
              <div className="doctor-header-flat" style={{ marginBottom: "20px" }}>
                <span className="doctor-role" style={{ display: "block", color: "var(--accent)", textTransform: "uppercase", fontSize: "0.85rem", fontWeight: "600", letterSpacing: "1.5px" }}>
                  Managing Director & COO
                </span>
                <h2 className="doctor-name" style={{ fontFamily: "var(--font-playfair), serif", color: "var(--navy)", fontSize: "2rem", margin: "5px 0" }}>
                  Emmanuel I. Nebeolisa
                </h2>
                <span className="doctor-credentials" style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
                  Spanish-Trained Public Healthcare Consultant
                </span>
              </div>
              <p className="doctor-bio" style={{ color: "var(--muted)", lineHeight: "1.7", fontSize: "0.98rem" }}>
                An expert in European healthcare systems, concierge travel networks, and treatment scheduling.
                Emmanuel manages client relations, luxury accommodation logistics, translation services, and post-operative support.
              </p>
            </div>
            <div className="doctor-image-wrap" style={{ flexShrink: 0, width: "300px", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
              <Image
                src="/assets/emmanuel_nebeolisa.png"
                alt="Emmanuel I. Nebeolisa"
                className="doctor-image"
                width={300}
                height={300}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </article>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <Link href="/appointment" className="pill-btn">
            <span>Book Consultation with Team</span>
            <span className="arrow">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
