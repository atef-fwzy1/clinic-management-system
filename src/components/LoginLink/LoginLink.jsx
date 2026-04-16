import React from "react";
import {Link} from "react-router"
import "./LoginLink.css";

export default function LoginLink({ onLogin }) {
  return (
    <div className="login-link-row" dir="rtl">
      <span className="login-text">عندك حساب؟ </span>
     <Link to={"/login"}>
      <button className="login-link-btn" onClick={onLogin} type="button">
        سجل دخول
      </button>
     </Link>

    </div>
  );
}
