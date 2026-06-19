"use client";

import Image from "next/image";
import Link from "next/link";

export default function DoctorsPage() {
  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "100vh" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap" style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="shield">✓</span> Leadership Team
          </div>
          <h1 className="section-title" style={{ fontSize: "3.2rem", fontFamily: "var(--font-playfair), serif", color: "var(--navy)" }}>
            Our Distinguished Coordinators
          </h1>
          <p className="section-desc" style={{ margin: "20px auto 0", maxWidth: "700px" }}>
            Led by internationally recognized public healthcare specialists, committed to arranging
            seamless European treatment programs with absolute precision.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid" style={{ maxWidth: "860px", margin: "0 auto" }}>
          <article className="glass-card doctor-card">
            <div className="doctor-info-wrap">
              <div className="doctor-header-flat">
                <span className="doctor-role">European Coordinator & VP</span>
                <h2 className="doctor-name">Dr. Therese Diane Bikye</h2>
                <span className="doctor-credentials">Swiss-Trained Medical Practitioner</span>
              </div>
              <p className="doctor-bio">
                Dr. Bikye brings elite Swiss clinical standards and empathy-driven coordination to international healthcare programs.
                <span className="mobile-hide"> Specializing in designing custom medical roadmaps, she orchestrates pre-consultation assessments and clinic selections.</span>
              </p>
            </div>
            <div className="doctor-image-wrap">
              <Image
                src="/assets/therese_bikye.png"
                alt="Dr. Therese Diane Bikye"
                className="doctor-image"
                width={220}
                height={220}
              />
            </div>
          </article>

          <article className="glass-card doctor-card">
            <div className="doctor-info-wrap">
              <div className="doctor-header-flat">
                <span className="doctor-role">Managing Director & COO</span>
                <h2 className="doctor-name">Emmanuel I. Nebeolisa</h2>
                <span className="doctor-credentials">Spanish-Trained Public Healthcare Consultant</span>
              </div>
              <p className="doctor-bio">
                An expert in European healthcare systems, concierge travel networks, and treatment scheduling.
                <span className="mobile-hide"> Emmanuel manages client relations, luxury accommodation logistics, translation services, and post-operative support.</span>
              </p>
            </div>
            <div className="doctor-image-wrap">
              <Image
                src="/assets/emmanuel_nebeolisa.png"
                alt="Emmanuel I. Nebeolisa"
                className="doctor-image"
                width={220}
                height={220}
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
