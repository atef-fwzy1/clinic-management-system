import PageHeader from "../../components/RegisterHead/PageHeader"
import RoleSelector from "../../components/RoleSelector/RoleSelector"
import InputField from "../../components/InputField/InputField"
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import LoginLink from "../../components/LoginLink/LoginLink";
import React, { useState } from "react";
import "./Register.css"
export default function Register(){
      const [role, setRole] = useState("patient");
      const [name, setName] = useState("");
      const [phone, setPhone] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [loading, setLoading] = useState(false);
    
      const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
      };
    return(
          <div className ="register">
            <div className="box">

            <PageHeader/>
                 <RoleSelector selected={role} onChange={setRole} />
              <InputField
                      label="الاسم بالكامل"
                      placeholder="اكتب اسمك هنا"
                      iconType="user"
                      value={name}
                      onChange={setName}
                    />
                    <InputField
                      label="رقم الموبايل"
                      placeholder="01X XXXX XXXX"
                      iconType="phone"
                      type="tel"
                      value={phone}
                      onChange={setPhone}
                    />
                    <InputField
                      label="البريد الإلكتروني"
                      labelSuffix="(اختياري)"
                      placeholder="example@mail.com"
                      iconType="mail"
                      type="email"
                      value={email}
                      onChange={setEmail}
                    />
                    <InputField
                      label="كلمة السر"
                      placeholder="••••••••"
                      iconType="password"
                      type="password"
                      value={password}
                      onChange={setPassword}
                    />
                   <SubmitButton label="إنشاء حساب" onClick={handleSubmit} loading={loading} />
                   <SocialLogin/>
                   <LoginLink/>
                  
            </div>
          </div>
    )
}