import { useState } from 'react';
import InputField from '../InputField/InputField';
import SubmitButton from '../SubmitButton/SubmitButton';
import './LoginForm.css';

/* ── Icons ── */
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
  const [credentials, setCredentials] = useState({ gmail: '', password: '' });
  const [loading, setLoading] = useState(false);

const handleChange = (field, value) => {
  setCredentials((prev) => ({ ...prev, [field]: value }));
};
  console.log(credentials )
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <div className="login-form__fields">
        <InputField
          id="identifier"
          label="رقم الموبايل أو البريد الإلكتروني"
          type="text"
          placeholder="اكتب بياناتك هنا"
          value={credentials.gmail}
        onChange={(value) => handleChange('gmail', value)}
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
