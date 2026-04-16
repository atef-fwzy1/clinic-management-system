import "./SettingRow.css"


import './SettingRow.css';

const SettingsItem = ({ icon, label, subValue, hasBorder }) => (
  <div className={`settings-item ${hasBorder ? 'border-bottom' : ''}`}>
    <div className="item-content">
      <div className="icon-wrapper">{icon}</div>
      <span className="item-label">{label}</span>
    </div>
    <span className="arrow-left">‹</span>
    {subValue && <span className="sub-value">{subValue}</span>}
  </div>
);

const SettingsList = () => {
  return (
    <div className="settings-container">
      <div className="settings-group">
        <SettingsItem label="تعديل الملف الشخصي" icon="👤" hasBorder />
        <SettingsItem label="تغيير كلمة السر" icon="🔒" hasBorder />
        <SettingsItem label="إعدادات الإشعارات" icon="🔔" hasBorder />
        <SettingsItem label="اللغة" subValue="العربية" icon="🌐" />
      </div>

      <div className="settings-group">
        <SettingsItem label="مركز المساعدة" icon="❓" hasBorder />
        <SettingsItem label="الشروط والأحكام" icon="📄" />
      </div>
    </div>
  );
};

export default SettingsList;