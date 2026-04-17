import './LabItem.css';

export default function LabItem({ lab }) {
  return (
    <div className="lab-item">
      <button className="pdf-btn">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7,10 12,15 17,10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        تحميل PDF
      </button>

      <div className="lab-info">
        <span className="lab-title">{lab.title}</span>
        <span className="lab-date">{lab.date}</span>
      </div>

      <div className={`lab-icon lab-icon-${lab.icon}`}>
        {lab.icon === 'doc' ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="8" y1="13" x2="16" y2="13"/>
            <line x1="8" y1="17" x2="16" y2="17"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="12" cy="10" r="3"/>
            <path d="M6 18c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
          </svg>
        )}
      </div>
    </div>
  );
}
