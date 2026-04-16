import './PatientCard.css';

export default function PatientCardDetails() {
  return (
    <div className="patient-card">
      <div className="patient-top">
        <div className="patient-info">
          <h2 className="patient-name">أحمد محمد السيد</h2>
          <div className="patient-tags">
            <span className="tag">السن: ٣٤ سنة</span>
            <span className="tag">الوزن: ٨٥ كجم</span>
          </div>
        </div>
        <div className="patient-avatar">
          <div className="avatar-inner">
            <svg width="42" height="42" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="22" r="11" fill="#c8e6c9"/>
              <path d="M10 52c0-11 8.95-20 20-20s20 8.95 20 20" fill="#a5d6a7"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="patient-stats">
        <div className="stat-item">
          <span className="stat-label">فصيلة الدم</span>
          <span className="stat-value">O+</span>
        </div>
        <div className="stat-divider"/>
        <div className="stat-item">
          <span className="stat-label">آخر زيارة</span>
          <span className="stat-value">١٢ أكتوبر</span>
        </div>
        <div className="stat-divider"/>
        <div className="stat-item">
          <span className="stat-label">الحساسية</span>
          <span className="stat-value">لا يوجد</span>
        </div>
      </div>
    </div>
  );
}
