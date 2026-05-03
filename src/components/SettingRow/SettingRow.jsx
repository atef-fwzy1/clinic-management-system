import "./SettingRow.css"
import {Link} from "react-router"

import './SettingRow.css';

const SettingsItem = ({ icon, label, subValue, hasBorder ,page}) => (
  <Link to={"/"+page}>

  <div className={`settings-item ${hasBorder ? 'border-bottom' : ''}`}>
    <div className="item-content">
      <div className="icon-wrapper">{icon}</div>
      <span className="item-label">{label}</span>
    </div>
    <span className="arrow-left">‹</span>
    {subValue && <span className="sub-value">{subValue}</span>}
  </div>
    </Link>
);

const SettingsList = () => {
  return (
    <div className="settings-container">
      <div className="settings-group">
        <SettingsItem label="تعديل الملف الشخصي" icon="👤" hasBorder  page="pagename"/>
        <SettingsItem label="تغيير كلمة السر" icon="🔒" hasBorder  page="pagename"/>
        <SettingsItem label="إعدادات الإشعارات" icon="🔔" hasBorder  page="pagename"/>
        {/* <SettingsItem label="اللغة" subValue="العربية" icon="🌐" /> */}
      </div>

      <div className="settings-group">
        <SettingsItem label="مركز المساعدة" icon="❓" hasBorder page="contactus"/>
        <SettingsItem label="الشروط والأحكام" icon="📄"  page="contactus"/>
      </div>
    </div>
  );
};

export default SettingsList;