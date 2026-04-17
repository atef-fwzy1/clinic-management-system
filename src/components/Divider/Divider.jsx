import './Divider.css';

export default function Divider({ label }) {
  return (
    <div className="divider" role="separator">
      <span className="divider__line" />
      <span className="divider__label">{label}</span>
      <span className="divider__line" />
    </div>
  );
}
