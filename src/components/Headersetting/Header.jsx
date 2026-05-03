import React from "react";
import "./Header.css";
import {Link} from"react-router"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
export default function HeaderSeeting({title ,page}) {
  return (
    <div className="header" style={{direction: "ltr"}}>
      <div className="header-avatar">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="26" r="26" fill="#2a9d8f"/>
          <circle cx="26" cy="20" r="9" fill="#b8d4d0"/>
          <ellipse cx="26" cy="38" rx="13" ry="9" fill="#b8d4d0"/>
          <circle cx="26" cy="20" r="7" fill="#f4c7a0"/>
          <rect x="21" y="27" width="10" height="14" rx="2" fill="white"/>
          <rect x="23" y="27" width="6" height="3" fill="#1a6fd4"/>
          <line x1="26" y1="27" x2="26" y2="41" stroke="#1a6fd4" strokeWidth="1.5"/>
        </svg>
      </div>
      <h1 className="header-title">{title}</h1>
      <Link to={page == "nurse" ?"/nurse":"/"}>
      <NavigateBeforeIcon/>
      </Link>
    </div>
  );
}
