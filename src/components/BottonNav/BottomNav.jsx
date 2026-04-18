import { useState } from 'react';
import './BottomNav.css';
import { Link } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SettingsIcon from '@mui/icons-material/Settings';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
const navItems = [
  { id: '', label: 'الرئيسية', icon: <HomeIcon/> },
  { id: 'DoctorSchedule', label: 'المواعيد', icon: <CalendarMonthIcon/>},
  { id: 'allnatients', label: 'المرضى', icon: <Diversity3Icon/> },
  { id: 'settings', label: 'الإعدادات', icon: <SettingsIcon/> },
];

const BottomNav = () => {
  const activeUrl =  window.location.pathname.split("/")
  const [active, setActive] = useState(activeUrl[activeUrl.length -1]);
  return (
    <div>

    <nav className="bottom-nav">
      {navItems.map((item) => (
        <Link  to={item.id==""?"/":item.id =="DoctorSchedule"?"/DoctorSchedule":item.id=="settings"?"/settings":"/allnatients"}>
        <button  
          key={item.id}
          className={`nav-btn ${active === item.id ? 'active' : ''}`}
          onClick={() =>{
            
            setActive(activeUrl[activeUrl.length -1])}
          } 
          >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
          </Link>
      ))}
    </nav>
      <Link to="/contactus">
      <button className="fab-btn"><PhoneEnabledIcon/></button>
      </Link>
    </div>
  );
};

export default BottomNav;
