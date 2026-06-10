"use client";

import React from "react";

export default function Footer() {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="footer-video-bg"
        poster="/assets/hero-bg.png"
        preload="none"
      >
        <source src="/assets/ambulance.mp4" type="video/mp4" />
      </video>
      <div className="footer-video-overlay"></div>

      <div className="container">
        <div className="footer-glass-card">
          {/* Left Column: Brand Info */}
          <div className="footer-column footer-col-left">
            <div className="footer-logo-wrap">
              <a className="footer-brand" href="#home" onClick={handleLogoClick} aria-label="MedHcare Swiss home">
                <span className="brand-mark" aria-hidden="true"></span>
                <span className="brand-text">
                  MEDHCARE <span>SWISS</span>
                </span>
              </a>
            </div>
            
            {/* Divider with gold cross */}
            <div className="footer-divider-cross">
              <span className="divider-line"></span>
              <span className="divider-cross">+</span>
              <span className="divider-line"></span>
            </div>

            <p className="footer-desc">
              Premier medical healthcare tourism across Switzerland and Spain. 
              Exceptional care, seamless experiences, and unparalleled standards — 
              defined by Swiss precision.
            </p>
          </div>

          {/* Middle Column: Emergency Contact */}
          <div className="footer-column footer-col-middle">
            <h4 className="footer-col-title">Emergency Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <a href="tel:+41775039088" className="contact-link">CH: +41 77 503 9088</a>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <a href="tel:+34652361449" className="contact-link">ES: +34 652 361 449</a>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                <a href="mailto:info@medhcareswiss.com" className="contact-link">info@medhcareswiss.com</a>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                  </svg>
                </span>
                <span className="hotline-text">24/7 Hotline Available</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Shield, Copyright & Bottom Links */}
          <div className="footer-column footer-col-right">
            <div className="footer-shield-wrap">
              <div className="footer-gold-shield" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span className="shield-plus">+</span>
              </div>
            </div>

            <p className="footer-copyright">
              © {new Date().getFullYear()} MedHcareSwiss SNC. All rights reserved.<br />
              Registered in Switzerland.
            </p>

            {/* Divider with gold cross */}
            <div className="footer-divider-cross">
              <span className="divider-line"></span>
              <span className="divider-cross">+</span>
              <span className="divider-line"></span>
            </div>

            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span className="link-separator">|</span>
              <a href="#">Terms of Service</a>
              <span className="link-separator">|</span>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
