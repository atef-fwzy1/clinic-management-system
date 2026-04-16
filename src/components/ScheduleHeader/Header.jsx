import React from "react";
import "./Header.css";
import { Link } from 'react-router';
export default function Header() {
  return (
    <header className="header" style={{flexDirection: "row"}}>
      <button className="header-icon-btn">
     
      </button>
      <h1 className="header-title">تنظيم مواعيدي</h1>
      <Link to={"/"}>
         <button className="header-arrow-btn">
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
          <path d="M9 1L1 9L9 17" stroke="#1a1a2e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      </Link>
    </header>
  );
}
