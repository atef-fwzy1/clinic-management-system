import React from "react";
import "./SubmitButton.css";

export default function SubmitButton({ label, onClick, loading = false }) {
  return (
    <button
      className={`submit-btn ${loading ? "loading" : ""}`}
      onClick={onClick}
      type="button"
    >
      {loading ? <span className="btn-spinner" /> : <span className="btn-label">{label}</span>}
    </button>
  );
}
