import './HeaderPatint.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {Link} from "react-router"
export default function HeaderPatint() {
  return (
    <div className="header">
      <Link to="/">
      <button className="header-arrow">
         <NavigateBeforeIcon/>
      </button>
      </Link>
      <h1 className="header-title">الملف الطبي</h1>
      <button className="header-menu">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="1.5"/>
          <circle cx="12" cy="12" r="1.5"/>
          <circle cx="12" cy="19" r="1.5"/>
        </svg>
      </button>
    </div>
  );
}
