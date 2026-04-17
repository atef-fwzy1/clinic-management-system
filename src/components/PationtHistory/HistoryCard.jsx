import './HistoryCard.css';

export default function PationtHistoryCard({ record }) {
  return (
    <div className="history-card">
      <div className="history-dot" style={{ background: record.dotColor }} />
      <div className="history-content">
        <div className="history-meta">
          <span className={`badge badge-${record.badgeColor}`}>{record.badge}</span>
          <span className="history-date">{record.date}</span>
        </div>
        <h3 className="history-title">{record.title}</h3>
        <p className="history-desc">{record.description}</p>
        {record.doctor && (
          <div className="doctor-row">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="doctor-name">{record.doctor}</span>
          </div>
        )}
      </div>
    </div>
  );
}
