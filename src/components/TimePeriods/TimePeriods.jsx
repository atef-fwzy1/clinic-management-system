import React from "react";
import "./TimePeriods.css";

function PeriodRow({ icon, title, time, badge, badgeType }) {
  return (
    <div className="period-row">
      <button className="period-arrow">
        <svg width="7" height="13" viewBox="0 0 7 13" fill="none">
          <path d="M6 1L1 6.5L6 12" stroke="#9aa5b4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <span className={`period-badge ${badgeType}`}>{badge}</span>
      <div className="period-info">
        <span className="period-title">{title}</span>
        <span className="period-time">{time}</span>
      </div>
      <div className={`period-icon-wrap ${badgeType === "complete" ? "morning" : "evening"}`}>
        {icon}
      </div>
    </div>
  );
}

export default function TimePeriods() {
  return (
    <div className="time-periods-section">
      <div className="periods-header">
        <button className="edit-hours-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="#1a56db" strokeWidth="2" strokeLinecap="round"/>
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>تعديل الساعات</span>
        </button>
        <h2 className="section-title">إدارة الفترات</h2>
      </div>

      <div className="periods-list">
        <PeriodRow
          icon={
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="5" fill="#f6c843" stroke="#f6c843" strokeWidth="1"/>
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M17.66 6.34l-1.41 1.41M6.34 17.66l-1.41 1.41" stroke="#f6c843" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          }
          title="الفترة الصباحية"
          time="٩:٠٠ ص - ٠١:٠٠ م"
          badge="مكتملة"
          badgeType="complete"
        />
        <PeriodRow
          icon={
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="#7b8ec8" stroke="#7b8ec8" strokeWidth="1"/>
            </svg>
          }
          title="الفترة المسائية"
          time="٠٥:٠٠ م - ٩:٠٠ م"
          badge="متاحة (٥)"
          badgeType="available"
        />
      </div>
    </div>
  );
}
