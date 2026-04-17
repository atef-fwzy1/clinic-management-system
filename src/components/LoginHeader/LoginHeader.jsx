import './LoginHeader.css';

export default function LoginHeader({ title, subtitle }) {
  return (
    <header className="login-header">
      <h1 className="login-header__title">{title}</h1>
      <p className="login-header__subtitle">{subtitle}</p>
    </header>
  );
}
