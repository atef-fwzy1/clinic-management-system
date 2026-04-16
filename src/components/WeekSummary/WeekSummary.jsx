import React from "react";
import "./WeekSummary.css";

function SummaryCard({ label, count, type }) {
  return (
    <div className={`summary-card ${type}`}>
      <div className="summary-top">
        <div className="summary-icon-wrap">
          {type === "booked" ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="3" stroke="#1a56db" strokeWidth="1.8"/>
              <path d="M8 2v4M16 2v4M3 10h18" stroke="#1a56db" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M8 15l2.5 2.5L16 12" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="3" stroke="#4a5568" strokeWidth="1.8"/>
              <path d="M8 2v4M16 2v4M3 10h18" stroke="#4a5568" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </div>
        <span className="summary-label">{label}</span>
      </div>
      <div className="summary-count">{count}</div>
    </div>
  );
}

export default function WeekSummary() {
  return (
    <div className="week-summary-section">
      <h2 className="section-title">ملخص الأسبوع</h2>
      <div className="summary-cards">
        <SummaryCard label="المواعيد المحجوزة" count="١٥" type="booked" />
        <SummaryCard label="المواعيد المتاحة" count="٥" type="available" />
      </div>
    </div>
  );
}
