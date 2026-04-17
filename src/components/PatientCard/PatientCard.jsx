import React from 'react';
import './PatientCard.css';
import "../PatientList/PatientList.jsx"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import {Link} from "react-router"

const PatientCard = ({ name, time, type, status, actionButt,id ,page , quee}) => {
 
  return  page =="allpatient" ?
     <Link to={`/patientdetails/${id}`}>
    <div className={`patient-item ${status === 'done' ? 'completed' : ''}`}>
      <div className="item-options">...</div>
      <div className="item-content">
        <div className="item-text">
          <h5>{name}</h5>
          <p>{type} • {time}</p>
        </div>
        <div className={`status-icon ${status === 1 ? 'pending' : status === 2?'delayed':'done' }`}>

                   {status === 3 ? '✓' : status === 1 ? <EmojiEmotionsIcon sx={{color:"#03a9f4"}}/> : <AccessAlarmIcon/>}
        </div>
      </div>
    </div>
  </Link>:page =="home" && quee !== 0 ? <Link to={`/patientdetails/${id}`}>
    <div className={`patient-item ${status === 'done' ? 'completed' : ''}`}>
      <div className="item-options">...</div>
      <div className="item-content">
        <div className="item-text">
          <h5>{name}</h5>
          <p>{type} • {time}</p>
        </div>
        <div className={`status-icon ${status === 1 ? 'pending' : status === 2?'delayed':'done' }`}>

                   {status === 3 ? '✓' : status === 1 ? <EmojiEmotionsIcon sx={{color:"#03a9f4"}}/> : <AccessAlarmIcon/>}
        </div>
      </div>
    </div>
  </Link>:

  
   <div className="current-patient-card ">
      <div className="card-header">
        <span className="status-badge">الحالة الحالية</span>
        <div className="patient-main-info">
          <div className="text-right">
            <h4>أحمد محمود ابراهيم</h4>
            <p>كشف جديد • ١٠:٣٠ صباحاً</p>
          </div>
          <div className="patient-icon">👤</div>
        </div>
      </div>

      <div className="details-grid">
        <div className="detail-item">
          <label>السن</label>
          <p>٣٤ سنة</p>
        </div>
        <div className="detail-item">
          <label>فصيلة الدم</label>
          <p className="blood-type">O+</p>
        </div>
      </div>

      <div className="card-actions">
        <button className="start-btn" >ابدأ الكشف ▶</button>
        <button className="file-btn" onClick={()=>actionButt()} >
          تأجيل 
        </button>
      </div>
    </div>
    
};

export default PatientCard;