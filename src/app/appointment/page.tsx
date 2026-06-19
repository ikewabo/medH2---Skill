"use client";

import { useState } from "react";

export default function AppointmentPage() {
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
    if (formData.firstName && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "100vh" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap" style={{ textAlign: "center", marginBottom: "50px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="shield">✓</span> Consultation Scheduling
          </div>
          <h1 className="section-title" style={{ fontSize: "3.2rem", fontFamily: "var(--font-playfair), serif", color: "var(--navy)" }}>
            Schedule a Consultation
          </h1>
          <p className="section-desc" style={{ margin: "20px auto 0", maxWidth: "700px" }}>
            Provide your details below to connect with Dr. Bikye or Emmanuel Nebeolisa.
            Our care coordination desk will respond to your request within 24 hours.
          </p>
        </div>

        <div className="appointment-container" style={{ maxWidth: "750px", margin: "0 auto" }}>
          <div className="glass-card">
            {formSubmitted ? (
              <div className="form-success" role="alert" style={{ textAlign: "center", padding: "20px 0" }}>
                <div className="form-success-icon" aria-hidden="true" style={{ width: "60px", height: "60px", background: "rgba(74, 222, 128, 0.1)", color: "#4ade80", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "2rem", fontWeight: "bold" }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "2rem", color: "var(--navy)", marginBottom: "15px" }}>
                  Consultation Request Received
                </h3>
                <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto 25px", lineHeight: "1.6", fontSize: "1rem" }}>
                  Thank you for reaching out, {formData.firstName}. One of our senior coordinators will contact you via email ({formData.email}) or phone shortly to discuss your healthcare goals.
                </p>
                <button
                  className="pill-btn"
                  style={{ border: "none", cursor: "pointer", display: "inline-flex", margin: "0 auto" }}
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
                  <button type="submit" className="pill-btn" style={{ border: "none", cursor: "pointer" }}>
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
      </div>
    </main>
  );
}
