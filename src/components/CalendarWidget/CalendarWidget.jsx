import React, { useState } from "react";
import "./CalendarWidget.css";

const DAYS_AR = ["س", "ج", "خ", "أ", "ث", "ن", "ح"];

const OCTOBER_2023 = [
  [null, null, null, null, null, null, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30, 31, null, null, null, null, null],
];

// Selected: 5 (active blue), 9,10,11 (light blue), 12 (light blue)
const SELECTED = [5];
const RANGE = [9, 10, 11, 12];

export default function CalendarWidget() {
  const [selectedDay, setSelectedDay] = useState(5);

  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <button className="cal-nav-btn">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M7 1L1 7L7 13" stroke="#9aa5b4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="calendar-month">أكتوبر ٢٠٢٣</span>
        <button className="cal-nav-btn">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M1 1L7 7L1 13" stroke="#9aa5b4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="calendar-weekdays">
        {DAYS_AR.map((d, i) => (
          <span key={i} className="weekday-label">{d}</span>
        ))}
      </div>

      <div className="calendar-grid">
        {OCTOBER_2023.map((week, wi) =>
          week.map((day, di) => {
            if (!day) return <span key={`${wi}-${di}`} className="cal-day empty" />;
            const isSelected = day === selectedDay;
            const isRange = RANGE.includes(day);
            return (
              <button
                key={`${wi}-${di}`}
                className={`cal-day ${isSelected ? "selected" : ""} ${isRange ? "in-range" : ""}`}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
