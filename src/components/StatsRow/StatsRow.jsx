import React from "react";
import "./StatsRow.css";

export default function StatsRow({ nextNumber, totalWaiting }) {
  return (
    <div className="stats-row" dir="rtl">
      <div className="stats-card next-card">
        <p className="next-label">المريض القادم</p>
        <div className="next-number-row">
          <button className="next-nav-btn">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path d="M8 1L1 8L8 15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="next-number">رقم {nextNumber}</span>
        </div>
      </div>

      <div className="stats-card total-card">
        <p className="total-label">إجمالي الانتظار</p>
        <div className="total-body">
          <svg width="32" height="24" viewBox="0 0 40 28" fill="none">
            <circle cx="12" cy="12" r="7" fill="#c8d4f0"/>
            <circle cx="28" cy="12" r="7" fill="#b0c0e8"/>
            <ellipse cx="12" cy="26" rx="10" ry="6" fill="#c8d4f0"/>
            <ellipse cx="28" cy="26" rx="10" ry="6" fill="#b0c0e8"/>
          </svg>
          <span className="total-number">{totalWaiting}</span>
        </div>
      </div>
    </div>
  );
}
