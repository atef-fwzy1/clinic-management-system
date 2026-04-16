import './QuickActions.css';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const QuickActions = () => {
  return (
    <div className="quick-actions">
      <div className="action-card">
        <div className="action-icon"><CalendarMonthIcon sx={{color:"#03a9f4"}}/></div>
        <span className="action-label">جدول الأسبوع</span>
      </div>
      <div className="action-card">
        <div className="action-icon"><AssessmentIcon sx={{color:"#03a9f4"}}/></div>
        <span className="action-label">التقارير</span>
      </div>
    </div>
  );
};

export default QuickActions;
