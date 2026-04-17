import './MedItem.css';

export default function MedItem({ med }) {
  return (
    <div className="med-item">
      <div className="med-check">
        
        
      
      </div>

      <div className="med-details">
        <span className="med-name">{med.name}</span>
        <div className="med-meta">
          <span className="med-dose">{med.dose}</span>
          <span className="med-dot-sep">•</span>
          <span className="med-timing">{med.timing}</span>
        </div>
      </div>

      <div className="med-icon" style={{ background: med.color + '18', color: med.color }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill={med.color} opacity="0.15"/>
          <path d="M8 12h8M12 8v8" stroke={med.color} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}
