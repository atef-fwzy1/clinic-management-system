import { useState } from "react";
import axios from "axios";
import "./SetSchedule.css";
import { useContext } from "react";
import {scheduleDateContext} from "../../Context/scheduleDateContext"
// import {CurrentUserContext} from "../"
// ─── Constants ────────────────────────────────────────────────────────────────
const API_URL = "https://api.example.com/doctor/schedule"; // replace with real endpoint

const INITIAL_FORM = {
  scheduleDate: "",
  startTime: "",
  endTime: "",
  slotDuration: "",
};

const INITIAL_ERRORS = {
  scheduleDate: "",
  startTime: "",
  endTime: "",
  slotDuration: "",
};

// ─── Validation Logic ─────────────────────────────────────────────────────────
function validate(form) {
  const errors = { ...INITIAL_ERRORS };
  let valid = true;

  if (!form.scheduleDate) {
    errors.scheduleDate = "Schedule date is required.";
    valid = false;
  }

  if (!form.startTime) {
    errors.startTime = "Start time is required.";
    valid = false;
  }

  if (!form.endTime) {
    errors.endTime = "End time is required.";
    valid = false;
  } else if (form.startTime && form.endTime <= form.startTime) {
    errors.endTime = "End time must be later than start time.";
    valid = false;
  }

  const slot = Number(form.slotDuration);
  if (!form.slotDuration) {
    errors.slotDuration = "Slot duration is required.";
    valid = false;
  } else if (isNaN(slot) || slot <= 0) {
    errors.slotDuration = "Slot duration must be greater than 0.";
    valid = false;
  }

  return { errors, valid };
}

// ─── Field Component ──────────────────────────────────────────────────────────
function Field({ label, hint, error, children }) {
  return (
    <div className={`us-field ${error ? "us-field--error" : ""}`}>
      <div className="us-field__top">
        <label className="us-field__label">{label}</label>
        {hint && <span className="us-field__hint">{hint}</span>}
      </div>
      {children}
      {error && (
        <p className="us-field__error" role="alert">
          <span className="us-field__error-icon">!</span>
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SetSchedule() {
  const [form, setForm]         = useState(INITIAL_FORM);
  const [errors, setErrors]     = useState(INITIAL_ERRORS);
  const [loading, setLoading]   = useState(false);
  const [status, setStatus]     = useState(null); // "success" | "error"
  const [apiError, setApiError] = useState("");
 const showschedule = useContext(scheduleDateContext)

  // Controlled input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    // Clear global status
    if (status) setStatus(null);
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors: newErrors, valid } = validate(form);
    setErrors(newErrors);
    if (!valid) return;

    setLoading(true);
    setStatus(null);
    setApiError("");

    try {
      await axios.post("https://aminaminamin.runasp.net/api/DoctorSchedules", {
            "DoctorId":2,
            "ScheduleDate":form.scheduleDate,
            "StartTime": form.startTime,
            "EndTime":form.endTime,
            "SlotDuration":+form.slotDuration,
            "IsActive": true
      }).then(()=>{
        showschedule.setShowAddate(false)
      })
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setApiError(
        err?.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors(INITIAL_ERRORS);
    setStatus(null);
    setApiError("");
  };

  // Derive slot count preview
  const slotPreview = (() => {
    if (!form.startTime || !form.endTime || !form.slotDuration) return null;
    const [sh, sm] = form.startTime.split(":").map(Number);
    const [eh, em] = form.endTime.split(":").map(Number);
    const totalMins = (eh * 60 + em) - (sh * 60 + sm);
    const slots = Math.floor(totalMins / Number(form.slotDuration));
    if (slots <= 0) return null;
    return slots;
  })();

  return (
    <div className="us-page" >
      {/* Decorative background blobs */}
      <div className="us-bg-blob us-bg-blob--1" aria-hidden="true" />
      <div className="us-bg-blob us-bg-blob--2" aria-hidden="true" />

      <div className="us-card">
        {/* Header */}
        <div className="us-card__header">
          <div className="us-card__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="4" width="18" height="18" rx="3" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8"  y1="2" x2="8"  y2="6" />
              <line x1="3"  y1="10" x2="21" y2="10" />
              <line x1="8"  y1="14" x2="8"  y2="18" />
              <line x1="12" y1="14" x2="12" y2="18" />
            </svg>
          </div>
          <div>
            <h1 className="us-card__title">Update Schedule</h1>
            <p className="us-card__subtitle">Set availability slots for the doctor</p>
          </div>
        </div>

        {/* Success Banner */}
        {status === "success" && (
          <div className="us-banner us-banner--success" role="status">
            <span className="us-banner__icon">✓</span>
            <div>
              <strong>Schedule updated!</strong>
              <p>The doctor's availability has been saved successfully.</p>
            </div>
            <button className="us-banner__close" onClick={handleReset} aria-label="Dismiss">✕</button>
          </div>
        )}

        {/* Error Banner */}
        {status === "error" && (
          <div className="us-banner us-banner--error" role="alert">
            <span className="us-banner__icon">!</span>
            <div>
              <strong>Create failed</strong>
              <p>{apiError}</p>
            </div>
            <button className="us-banner__close" onClick={() => setStatus(null)} aria-label="Dismiss">✕</button>
          </div>
        )}

        {/* Form */}
        <form className="us-form" onSubmit={handleSubmit} noValidate>
          {/* Row 1: Date alone */}
          <Field
            label="Schedule Date"
            hint="Required"
            error={errors.scheduleDate}
          >
            <input
              className="us-input"
              type="date"
              name="scheduleDate"
              value={form.scheduleDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              aria-describedby={errors.scheduleDate ? "err-date" : undefined}
            />
          </Field>

          {/* Row 2: Start + End times side by side */}
          <div className="us-row">
            <Field label="Start Time" hint="Required" error={errors.startTime}>
              <input
                className="us-input"
                type="time"
                name="startTime"
                value={form.startTime}
                onChange={handleChange}
              />
            </Field>

            <Field label="End Time" hint="Required" error={errors.endTime}>
              <input
                className="us-input"
                type="time"
                name="endTime"
                value={form.endTime}
                onChange={handleChange}
              />
            </Field>
          </div>

          {/* Row 3: Slot duration */}
          <Field
            label="Slot Duration"
            hint="In minutes"
            error={errors.slotDuration}
          >
            <div className="us-input-suffix-wrap">
              <input
                className="us-input us-input--with-suffix"
                type="number"
                name="slotDuration"
                value={form.slotDuration}
                onChange={handleChange}
                min="1"
                placeholder="e.g. 30"
              />
              <span className="us-input-suffix">min</span>
            </div>
            {slotPreview !== null && !errors.endTime && (
              <p className="us-field__preview">
                ≈ <strong>{slotPreview}</strong> appointment slot{slotPreview !== 1 ? "s" : ""} generated
              </p>
            )}
          </Field>

          {/* Actions */}
          <div className="us-actions">
            <button
              type="button"
              className="us-btn us-btn--ghost"
              onClick={handleReset}
              disabled={loading}
               onClick={()=>showschedule.setShowAddate(false)}
            >
              close
            </button>
            <button
              type="submit"
              className={`us-btn us-btn--primary ${loading ? "us-btn--loading" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="us-spinner" aria-hidden="true" />
                  Saving…
                </>
              ) : (
                <>
                  <svg className="us-btn__icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Save Schedule
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
