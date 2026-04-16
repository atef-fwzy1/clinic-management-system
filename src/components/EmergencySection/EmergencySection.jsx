import React, { useState } from "react";
import "./EmergencySection.css";

export default function EmergencySection() {
  const [cancelled, setCancelled] = useState(false);

  return (
    <div className="emergency-section">
      <div className="emergency-header">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="#e53e3e" stroke="#e53e3e" strokeWidth="0.5"/>
          <path d="M12 9v4M12 17h.01" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
        <span className="emergency-title">حالة طوارئ</span>
      </div>
      <p className="emergency-desc">
        هل تحتاج لإلغاء جميع مواعيد العيادة لليوم بسبب ظرف طارئ؟
      </p>
      <button
        className={`cancel-btn ${cancelled ? "cancelled" : ""}`}
        onClick={() => setCancelled(!cancelled)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
          <path d="M15 9l-6 6M9 9l6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
        <span>{cancelled ? "تم الإلغاء" : "إلغاء العيادة النهاردة"}</span>
      </button>
    </div>
  );
}
