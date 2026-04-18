import React from "react";
import "./EmptyState.css";

export default function EmptyState({ message }) {
  return (
    <div className="empty-state">
      <svg width="56" height="52" viewBox="0 0 56 52" fill="none">
        <rect x="4" y="8" width="48" height="36" rx="6" fill="#e4e9f5"/>
        <rect x="10" y="14" width="36" height="4" rx="2" fill="#c8d2e4"/>
        <rect x="10" y="22" width="28" height="4" rx="2" fill="#d4dcec"/>
        <rect x="10" y="30" width="20" height="4" rx="2" fill="#dce4f0"/>
        <rect x="16" y="2" width="6" height="12" rx="3" fill="#b8c4d8"/>
        <rect x="34" y="2" width="6" height="12" rx="3" fill="#b8c4d8"/>
      </svg>
      <p className="empty-text">{message}</p>
    </div>
  );
}
