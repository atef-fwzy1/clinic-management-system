import "./NotificationHeader.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import {Link} from "react-router"
const DoubleCheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2 12 7 17 22 7"/>
    <polyline points="7 12 12 17"/>
  </svg>
);

export default function NotificationHeader({ onMarkAllRead , page}) {
  return (
    <div className="notification-header">
      <button className="notification-header__action" onClick={onMarkAllRead}>
        <span>Mark all as read</span>
        <ChecklistRtlIcon />
      </button>
      <div className="not-ico">
      <h1 className="notification-header__title">Notifications</h1>
      <Link to={page === "nurse"?"/nurse":"/"}>
        <KeyboardArrowLeftIcon/>
      </Link>
      </div>
    </div>
  );
}
