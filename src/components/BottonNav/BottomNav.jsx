import { useState } from 'react';
import './BottomNav.css';
import { Link } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SettingsIcon from '@mui/icons-material/Settings';
const navItems = [
  { id: '', label: 'الرئيسية', icon: <HomeIcon/> },
  { id: 'DoctorSchedule', label: 'المواعيد', icon: <CalendarMonthIcon/>},
  { id: 'patients', label: 'المرضى', icon: <Diversity3Icon/> },
  { id: 'settings', label: 'الإعدادات', icon: <SettingsIcon/> },
];

const BottomNav = () => {
  const activeUrl =  window.location.pathname.split("/")
  const [active, setActive] = useState(activeUrl[activeUrl.length -1]);
    console.log(active)
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <Link  to={item.id==""?"/":item.id =="DoctorSchedule"?"/DoctorSchedule":item.id=="settings"?"/settings":"/notfound"}>
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
      <button className="fab-btn">+</button>
    </nav>
  );
};

export default BottomNav;
