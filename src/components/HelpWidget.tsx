"use client";

import React from "react";

export default function HelpWidget() {
  return (
    <div className="help-widget-container">
      <div className="help-widget-header">
        <div className="help-widget-logo">
          {/* Circular cyan/blue windmill geometric SVG logo */}
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="48" fill="#13d2e9" />
            <path d="M50 50 L50 2 A48 48 0 0 1 98 50 Z" fill="#00bcd4" opacity="0.8" />
            <path d="M50 50 L98 50 A48 48 0 0 1 50 98 Z" fill="#00e5ff" opacity="0.9" />
            <path d="M50 50 L50 98 A48 48 0 0 1 2 50 Z" fill="#00b8d4" opacity="0.75" />
            <path d="M50 50 L2 50 A48 48 0 0 1 50 2 Z" fill="#80deea" opacity="0.85" />
          </svg>
        </div>
        <h5 className="help-widget-title">Need help?</h5>
      </div>
      
      <div className="help-widget-actions">
        <a href="tel:+41775039088" className="help-call-btn" aria-label="Start a call">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>Start a call</span>
        </a>
        
        <a href="https://wa.me/41775039088" target="_blank" rel="noopener noreferrer" className="help-chat-btn" aria-label="Start a WhatsApp chat">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffd300" stroke="#ffd300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
