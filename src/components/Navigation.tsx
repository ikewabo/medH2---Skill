"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className={`nav-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="MedHcare Swiss home">
          <span className="brand-mark" aria-hidden="true"></span>
          <span className="brand-text">
            MEDHCARE <span>SWISS</span>
          </span>
        </Link>

        <nav className="menu" aria-label="Main menu">
          <Link
            href="/"
            className={isActive("/") ? "active" : ""}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={isActive("/about") ? "active" : ""}
          >
            About Us
          </Link>
          <Link
            href="/doctors"
            className={isActive("/doctors") ? "active" : ""}
          >
            Coordinators
          </Link>
          <Link
            href="/appointment"
            className={isActive("/appointment") ? "active" : ""}
          >
            Appointment
          </Link>
        </nav>

        <div className="nav-cta">
          <Link className="pill-btn" href="/appointment">
            <span>Book Consultation</span>
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
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
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About Us
          </Link>
          <Link href="/doctors">
            Coordinators
          </Link>
          <Link href="/appointment">
            Appointment
          </Link>

          <Link
            className="pill-btn"
            style={{ marginTop: "20px" }}
            href="/appointment"
          >
            <span>Book Consultation</span>
            <span className="arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
