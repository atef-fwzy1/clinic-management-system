import React from "react";
import {Link} from "react-router"
import "./LoginLink.css";

export default function LoginLink({ onLogin , from}) {
  return (
    <div className="login-link-row" dir="rtl">
      <span className="login-text">{from == "register"?"عندك حساب؟":"ليس لديك حساب؟"}</span>
    {from == "register"? <Link to={"/login"}>
      <button className="login-link-btn" onClick={onLogin} type="button">
        سجل دخول
      </button>
     </Link>: <Link to={"/register"}>
      <button className="login-link-btn" onClick={onLogin} type="button">
         إنشاء حساب
      </button>
     </Link>}

    </div>
  );
}
