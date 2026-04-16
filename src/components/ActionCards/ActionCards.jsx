import React from 'react';
import './ActionCards.css';

const ActionCards = () => {
  return (
    <div className="action-grid">
      <div className="action-card">
        <div className="icon-box blue">📅</div>
        <p>الرئيسية</p>
      </div>
      <div className="action-card">
        <div className="icon-box light-blue">📊</div>
        <p>المواعيد</p>
      </div>
      <div className="action-card">
        <div className="icon-box light-blue">📊</div>
        <p>الملفات</p>
      </div>
      <div className="action-card">
        <div className="icon-box light-blue">📊</div>
        <p>الأعدادات</p>
      </div>
    </div>
  );
};

export default ActionCards;