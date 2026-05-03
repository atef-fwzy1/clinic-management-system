import React, { useState } from "react";
import "./InputField.css";

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="#b0bac8" strokeWidth="1.8"/>
      <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="#b0bac8" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="3" stroke="#b0bac8" strokeWidth="1.8"/>
      <circle cx="12" cy="18" r="1" fill="#b0bac8"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="3" stroke="#b0bac8" strokeWidth="1.8"/>
      <path d="M2 8l10 7 10-7" stroke="#b0bac8" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20C5 20 1 12 1 12a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="#b0bac8" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="1" y1="1" x2="23" y2="23" stroke="#b0bac8" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#b0bac8" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="3" stroke="#b0bac8" strokeWidth="1.8"/>
    </svg>
  );
}

const ICONS = {
  user: <UserIcon />,
  phone: <PhoneIcon />,
  mail: <MailIcon />,
  password: null,
};

export default function InputField({
  label,
  labelSuffix,
  placeholder,
  type = "text",
  iconType = "user",
  value,
  onChange,
  hasErr
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="input-field" dir="rtl">
      <div className="input-label-row" >
        <span className="input-label">{label}</span>
        {labelSuffix && <span className="input-label-suffix">{labelSuffix}</span>}
      </div>
      <div className={"input-wrap "+ hasErr}>
        <div className="input-icon-left">
          {isPassword ? (showPassword ? <EyeIcon /> : <EyeOffIcon />) : ICONS[iconType]}
        </div>
        <input
          className="input-el"
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          dir="rtl"
        />
        {isPassword && (
          <button
            type="button"
            className="input-toggle" 
            onClick={() => setShowPassword((p) => !p)}
            tabIndex={-1}
          />
        )}
      </div>
    </div>
  );
}
