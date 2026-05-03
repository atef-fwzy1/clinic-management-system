import React from 'react';
import './NotificationItem.css';

const NotificationItem = ({ icon, title, time, body, readed }) => {
  return (
    <div className={`notification-item ${!readed ? 'highlighted' : ''}`}>
      <div className="icon-circle">{icon}</div>
      <div className="content">
        <div className="content-header">
          <span className="title">{title}</span>
          <span className="timestamp">{time}</span>
        </div>
        <p className="body-text">{body}</p>
      </div>
    </div>
  );
};

export default NotificationItem;