import React from "react";
import "./DoctorCard.css";

export default function DoctorCard({ name, specialty }) {
  return (
    <div className="doctor-card-wrap">
      <div className="doctor-card">
        <button className="doctor-arrow">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M7 1L1 7L7 13" stroke="#b0bcc8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="doctor-info doctor-info-cloumn" >
          <span className="doctor-name">{name}</span>
          <span className="doctor-specialty">{specialty}</span>
        </div>
        <div className="doctor-avatar">
          <svg width="62" height="62" viewBox="0 0 62 62" fill="none">
            <circle cx="31" cy="31" r="31" fill="#2a9d8f"/>
            <circle cx="31" cy="23" r="11" fill="#b8d4d0"/>
            <ellipse cx="31" cy="46" rx="16" ry="11" fill="#b8d4d0"/>
            <circle cx="31" cy="23" r="9" fill="#f4c7a0"/>
            <rect x="25" y="32" width="12" height="18" rx="2.5" fill="white"/>
            <rect x="27" y="32" width="8" height="4" fill="#1a6fd4"/>
            <line x1="31" y1="32" x2="31" y2="50" stroke="#1a6fd4" strokeWidth="1.8"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
