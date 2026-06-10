"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active section based on scroll position using Intersection Observer
  useEffect(() => {
    const sections = ["home", "about", "doctors", "appointment"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies the main view area
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Offset for sticky navigation bar
      const navOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
      
      // Update browser history hash
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <header className={`nav-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={(e) => handleLinkClick(e, "home")} aria-label="MedHcare Swiss home">
          <span className="brand-mark" aria-hidden="true"></span>
          <span className="brand-text">
            MEDHCARE <span>SWISS</span>
          </span>
        </a>

        <nav className="menu" aria-label="Main menu">
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => handleLinkClick(e, "home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={(e) => handleLinkClick(e, "about")}
          >
            About Us
          </a>
          <a
            href="#doctors"
            className={activeSection === "doctors" ? "active" : ""}
            onClick={(e) => handleLinkClick(e, "doctors")}
          >
            Doctors
          </a>
          <a
            href="#appointment"
            className={activeSection === "appointment" ? "active" : ""}
            onClick={(e) => handleLinkClick(e, "appointment")}
          >
            Appointment
          </a>

        </nav>

        <div className="nav-cta">
          <a
            className="pill-btn"
            href="#appointment"
            onClick={(e) => handleLinkClick(e, "appointment")}
          >
            <span>Book Consultation</span>
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        <button
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-links">
          <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
            Home
          </a>
          <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
            About Us
          </a>
          <a href="#doctors" onClick={(e) => handleLinkClick(e, "doctors")}>
            Doctors
          </a>
          <a href="#appointment" onClick={(e) => handleLinkClick(e, "appointment")}>
            Appointment
          </a>

          <a
            className="pill-btn"
            style={{ marginTop: "20px" }}
            href="#appointment"
            onClick={(e) => handleLinkClick(e, "appointment")}
          >
            <span>Book Consultation</span>
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
