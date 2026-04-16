
import './Header.css';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const Header = () => {
  return (
    <header className="main-header">
      <div className="top-row">
      
        <div className="doctor-profile">
         
          <div className="doctor-info">
            <div>
              <h3>د. ياسمين علي</h3>
            <p>استشاري جراحة العظام</p>
            </div>
          <img src="./public/avatar.jpg" alt="Doctor" className="avatar" />
          </div>
        </div>
            <div className="notification-bell"><NotificationsActiveIcon/></div>
      </div>
      
      <div className="stats-row">
        <div className="stats-main">
          <p>مواعيد النهاردة</p>
          <h1>١٢ حالة</h1>
        </div>
        <div className="stats-pills">
          <div className="pill">تم ٤</div>
          <div className="pill">باقي ٨</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

