import './AppLogo.css';
import EmergencyIcon from '@mui/icons-material/Emergency';
export default function AppLogo() {
  return (
    <div className="app-logo">
      <div className="app-logo__ring">
        <div className="app-logo__icon">
          <EmergencyIcon/>
        </div>
      </div>
    </div>
  );
}
