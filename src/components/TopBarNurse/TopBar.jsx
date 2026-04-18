import React from "react";
import "./TopBar.css";
import {Link} from "react-router"
export default function TopBarNurse({ nurseName, clinicName }) {
  return (
    <header className="topbar" dir="rtl">
      <div className="topbar-right">
        <p className="topbar-greeting">أهلاً، {"ممرض "+nurseName}</p>
        <h1 className="topbar-clinic">{clinicName}</h1>
      </div>
      <div className="topbar-icons">
        <Link to="/settings">
        <button className="topbar-icon-btn avatar-btn" aria-label="profile">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="#2348e0" strokeWidth="2"/>
            <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="#2348e0" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        </Link>
        <button className="topbar-icon-btn bell-btn" aria-label="notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#6b7a99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.73 21a2 2 0 01-3.46 0" stroke="#6b7a99" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
