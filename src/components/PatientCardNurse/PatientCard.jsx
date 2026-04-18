import React from "react";
import "./PatientCard.css";
import {Link} from "react-router"
const STATUS_CONFIG = {
  ready:   { label: "جاهز",       className: "badge-ready"   },
  waiting: { label: "في الانتظار", className: "badge-waiting" },
};

export default function PatientCard({ number, name, time, type, status, onAdmit, onDelay, isFirst ,id}) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.waiting;
  const admitActive = status === "ready";

  return (
    <Link to={"/patientdetails/"+id}>

    <div className={`patient-card ${isFirst ? "first-card" : ""}`} dir="rtl">
      {isFirst && <div className="first-accent" />}

      <div className="card-top">
        <div className="patient-number-col">
          <span className="number-label">رقم</span>
          <span className="number-value">{number}</span>
        </div>

        <div className="patient-info">
          <span className="patient-name">{name}</span>
          <span className="patient-meta">
            موعد: {time} ص &bull; {type}
          </span>
        </div>
        <span className={`status-badge ${cfg.className}`}>{cfg.label}</span>
      </div>
      <div className="card-actions">
        <button
          className={`action-btn admit-btn ${admitActive ? "admit-active" : "admit-inactive"}`}
          onClick={onAdmit}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" stroke={admitActive ? "white" : "#a0aec0"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="10 17 15 12 10 7" stroke={admitActive ? "white" : "#a0aec0"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="15" y1="12" x2="3" y2="12" stroke={admitActive ? "white" : "#a0aec0"} strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
          <span>دَخّل المريض</span>
        </button>

        <button className="action-btn delay-btn" onClick={onDelay}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#6b7a99" strokeWidth="2"/>
            <polyline points="12 6 12 12 16 14" stroke="#6b7a99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>تأخير</span>
        </button>
      </div>
    </div>
     </Link>
  );
}
