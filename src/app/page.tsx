"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    if (formData.firstName && formData.email) {
      setFormSubmitted(true);
    }
  };

  const handleScrollToSection = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main id="home">
      {/* ---------------------------------------------------- */}
      {/* Hero Section */}
      {/* ---------------------------------------------------- */}
      <section className="hero" aria-labelledby="hero-title">
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
            <a
              className="hero-btn primary"
              href="#appointment"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("appointment");
              }}
            >
              <span>Book Appointment</span>
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a
              className="hero-btn secondary"
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("services");
              }}
            >
              <span>Our Services</span>
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Floating Stat Aside */}
        <aside className="stat-card" aria-label="Patient trust statistic">
          <div className="stat-icon" aria-hidden="true">
            ☤
          </div>
          <div className="stat-number">15K+</div>
          <div className="stat-label">Patients Trust Us</div>
          <a
            className="stat-link"
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("about");
            }}
          >
            Care journeys completed successfully
          </a>
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

      {/* Combined Wrapper for About Us and Consultation Scheduling */}
      <div className="combined-video-wrapper">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="about-video-bg"
          preload="metadata"
        >
          <source src="/assets/Medical_team_transports_patient_202606141908.mp4" type="video/mp4" />
        </video>
        <div className="about-video-overlay"></div>

        {/* About Us Section */}
        <section className="section about-section" id="about">
          <div className="container relative-z">
            <div className="section-title-wrap">
              <div className="eyebrow">
                <span className="shield">✓</span> Who We Are
              </div>
              <h2 className="section-title">About Us</h2>
              <p className="section-desc">
                Premium, value-based medical concierge services connecting patients worldwide to elite healthcare in Switzerland and Spain.
              </p>
            </div>

            <div className="about-benefits-strip">
              <article className="about-benefit-item">
                <div className="icon-circle" aria-hidden="true">
                  ✈
                </div>
                <div>
                  <strong>Optimized Logistics</strong>
                  <span>Concierge travel, luxury accommodations, and seamless transit coordination.</span>
                </div>
              </article>

              <article className="about-benefit-item">
                <div className="icon-circle" aria-hidden="true">
                  ☊
                </div>
                <div>
                  <strong>Liaison & Translation</strong>
                  <span>Dedicated bilingual interpreters eliminating communication barriers.</span>
                </div>
              </article>

              <article className="about-benefit-item">
                <div className="icon-circle" aria-hidden="true">
                  ✦
                </div>
                <div>
                  <strong>Swiss Excellence</strong>
                  <span>Accredited specialist network adhering to the highest clinical protocols.</span>
                </div>
              </article>

              <article className="about-benefit-item">
                <div className="icon-circle" aria-hidden="true">
                  ♥
                </div>
                <div>
                  <strong>Bespoke Care</strong>
                  <span>Empathy-driven timelines tailored to your personal comfort and recovery.</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Appointment Section */}
        <section className="section container appointment-section relative-z" id="appointment">
          <div className="section-title-wrap">
            <div className="eyebrow">
              <span className="shield">✓</span> Consultation Scheduling
            </div>
            <h2 className="section-title">Schedule a Consultation</h2>
            <p className="section-desc">
              Provide your details below to connect with Dr. Bikye or Emmanuel Nebeolisa.
              Our care coordination desk will respond to your request within 24 hours.
            </p>
          </div>

          <div className="appointment-container">
            <div className="glass-card">
              {formSubmitted ? (
                <div className="form-success" role="alert">
                  <div className="form-success-icon" aria-hidden="true">
                    ✓
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.8rem", color: "var(--navy)" }}>
                    Consultation Request Received
                  </h3>
                  <p style={{ color: "var(--muted)", maxWidth: "500px", lineHeight: "1.6" }}>
                    Thank you for reaching out, {formData.firstName}. One of our senior coordinators will contact you via email ({formData.email}) or phone shortly to discuss your healthcare goals.
                  </p>
                  <button
                    className="pill-btn"
                    style={{ marginTop: "20px", border: "none" }}
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        service: "",
                        message: "",
                      });
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form className="appointment-form" onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+00 000 000 000"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="consultation">Consultation & Case Assessment</option>
                      <option value="logistics">Medical Travel & Logistics</option>
                      <option value="translation">Translation & Liaison</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">How can we assist you?</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Describe your medical inquiries, target timelines, or specific clinical goals..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="form-submit-wrap">
                    <button type="submit" className="pill-btn">
                      <span>Submit Inquiry</span>
                      <span className="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* ---------------------------------------------------- */}
      {/* Doctors / Specialists Section */}
      {/* ---------------------------------------------------- */}
      <section className="section" style={{ background: "#f0f6fa" }} id="doctors">
        <div className="container">
          <div className="section-title-wrap">
            <div className="eyebrow">
              <span className="shield">✓</span> Leadership Team
            </div>
            <h2 className="section-title">Our Distinguished Coordinators</h2>
            <p className="section-desc">
              Led by internationally recognized public healthcare specialists, committed to arranging
              seamless European treatment programs with absolute precision.
            </p>
          </div>

          <div className="doctors-grid">
            <article className="glass-card doctor-card">
              <div className="doctor-info-wrap">
                <div className="doctor-header-flat">
                  <span className="doctor-role">European Coordinator & VP</span>
                  <h3 className="doctor-name">Dr. Therese Diane Bikye</h3>
                  <span className="doctor-credentials">Swiss-Trained Medical Practitioner</span>
                </div>
                <p className="doctor-bio">
                  Bringing elite Swiss clinical standards and empathy-driven coordination to international healthcare programs.
                  Dr. Bikye specializes in designing custom medical roadmaps and orchestrating pre-consultation assessments.
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
                  <h3 className="doctor-name">Emmanuel I. Nebeolisa</h3>
                  <span className="doctor-credentials">Spanish-Trained Public Healthcare Consultant</span>
                </div>
                <p className="doctor-bio">
                  Expert in European healthcare systems, concierge travel networks, and treatment scheduling.
                  Emmanuel manages client relations, luxury accommodation logistics, and post-operative support in Switzerland and Spain.
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
        </div>
      </section>

    </main>
  );
}
