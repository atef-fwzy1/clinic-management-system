import React from "react";
import "./RoleSelector.css";

function DoctorIcon({ active }) {
  const c = active ? "#2348e0" : "#9aa5b8";
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="6" y="4" width="16" height="18" rx="3" stroke={c} strokeWidth="2"/>
      <path d="M11 4V7H17V4" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 12v6M11 15h6" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function PatientIcon({ active }) {
  const c = active ? "#2348e0" : "#9aa5b8";
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="10" r="5" stroke={c} strokeWidth="2"/>
      <path d="M5 24c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export default function RoleSelector({ selected, onChange }) {
  return (
    <div className="role-section" dir="rtl">
      <span className="role-question">أنت مين؟</span>
      <div className="role-cards">
        <button
          className={`role-card ${selected === "patient" ? "active" : ""}`}
          onClick={() => onChange("patient")}
          type="button"
        >
          <PatientIcon active={selected === "patient"} />
          <span className="role-label">أستقبال</span>
        </button>
        <button
          className={`role-card ${selected === "doctor" ? "active" : ""}`}
          onClick={() => onChange("doctor")}
          type="button"
        >
          <DoctorIcon active={selected === "doctor"} />
          <span className="role-label">دكتور</span>
        </button>
      </div>
    </div>
  );
}
