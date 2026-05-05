import { useState } from 'react';
import InputField from '../InputField/InputField';
import SubmitButton from '../SubmitButton/SubmitButton';
import './LoginForm.css';
import {useContext} from "react"
import {AlertContext} from "../../Context/AlertContext"
import { useNavigate } from "react-router";
import {CurrentUserContext}  from "../../Context/CurrentUserContext"
import axios from "axios";
import Cookies from "universal-cookie";

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

export default function LoginForm() {
  const cookies = new Cookies();
     const {currentuser,setCurrentuser} = useContext(CurrentUserContext)
   const handelAlert = useContext(AlertContext)
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ userName: '', password: '' });
  const [loading, setLoading] = useState(false);

const handleChange = (field, value) => {
  setCredentials((prev) => ({ ...prev, [field]: value }));
};

  const handleSubmit = (e) => {
    setLoading(true);

     axios.post("https://aminaminamin.runasp.net/api/Account/login",{
      "identifier": credentials.userName.trim(),
      "password": credentials.password.trim(),
      "rememberMe": true
      }).then((data) => {
        console.log(data.data.data.role)
        handelAlert("success",data.data.message)
  
        // set data to cookies 
        cookies.set("userToken",data.data.data.token,{ path: "/" })
        // set data to localstorage 
        
            localStorage.setItem("userInfo", JSON.stringify({type:data.data.data.role,
               name:data.data.data.displayName,
               role:data.data.data.role,
               id:data.data.data.id,
               clinicName:"اسم العياده غير موجود"}));
                  setLoading(false);
               if(data.data.data.role == "nurse")
                      window.location.pathname = "/nurse"
                else if(data.data.data.role == "Doctor")
                    window.location.pathname = "/"
               else if(data.data.data.role == "Admin" || data.data.data.role == "Reception" )
                    window.location.pathname =   "/dashboard"  
                else 
                  handelAlert("error", "ليس لديك اي صلحيات في الوصول")

          })
          .catch((err) => {
            console.log(err.response)
        handelAlert("error", "اليوزر أو كلمة المرور غير متطابقين");
         setLoading(false);
          });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <div className="login-form__fields">
        <InputField
          id="identifier"
          label=" او رقم الهاتف أسم المستخدم"
          type="text"
          placeholder="اكتب بياناتك هنا"
          value={credentials.userName}
        onChange={(value) => handleChange('userName', value)}
          icon={<UserIcon />}
        />
        <InputField
          id="password"
          label="كلمة السر"
          type="password"
          placeholder="••••••••"
          value={credentials.password}
          onChange={(value) => handleChange('password', value)}
          icon={<LockIcon />}
        />
      </div>

      <div className="login-form__forgot">
        <a href="#" className="login-form__forgot-link">نسيت كلمة السر؟</a>
      </div>

      <SubmitButton label={"تسجيل ألدخول"}onClick={handleSubmit} loading={loading} /> 
    </form>
  );
}
