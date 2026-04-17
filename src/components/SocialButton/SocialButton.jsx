import './SocialButton.css';

export default function SocialButton({ provider, icon, onClick }) {
  return (
    <button
      type="button"
      className="social-btn"
      onClick={onClick}
      aria-label={`تسجيل الدخول بـ ${provider}`}
    >
      <span className="social-btn__label">{provider}</span>
      <span className="social-btn__icon">{icon}</span>
    </button>
  );
}
