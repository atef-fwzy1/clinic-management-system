import { useState } from "react";
import axios from "axios";
import "./AddAppointment.css";
import CloseIcon from '@mui/icons-material/Close';
import {addappointmentContext} from "../../Context/addappointmentContext"
import {useContext} from "react"
import { useEffect,useMemo } from "react";
import { AlertContext } from "../../Context/AlertContext";
// ─── Mock Doctors ─────────────────────────────────────────────────────────────



const API_URL = "/api/Employee/RegisterAndBook"; // replace with real endpoint

// ─── Initial State ────────────────────────────────────────────────────────────
const INIT_FORM = {
  fullName:        "",
  phoneNumber:     "",
  doctorId:        "",
  appointmentDate: "",
  time:            "",
};

const INIT_ERRORS = {
  fullName:        "",
  phoneNumber:     "",
  doctorId:        "",
  appointmentDate: "",
  time:            "",
};

// ─── Validation ───────────────────────────────────────────────────────────────
const PHONE_RE = /^[+]?[\d\s\-().]{7,20}$/;

function validate(form) {
  const e = { ...INIT_ERRORS };
  let ok = true;

  if (!form.fullName.trim()) {
    e.fullName = "Full name is required.";
    ok = false;
  } else if (form.fullName.trim().length < 3) {
    e.fullName = "Name must be at least 3 characters.";
    ok = false;
  }

  if (!form.phoneNumber.trim()) {
    e.phoneNumber = "Phone number is required.";
    ok = false;
  } else if (!PHONE_RE.test(form.phoneNumber.trim())) {
    e.phoneNumber = "Enter a valid phone number.";
    ok = false;
  }

  if (!form.doctorId) {
    e.doctorId = "Please select a doctor.";
    ok = false;
  }

  if (!form.appointmentDate) {
    e.appointmentDate = "Appointment date is required.";
    ok = false;
  } else if (new Date(form.appointmentDate) < new Date(new Date().toDateString())) {
    e.appointmentDate = "Date cannot be in the past.";
    ok = false;
  }

  if (!form.time) {
    e.time = "Appointment time is required.";
    ok = false;
  }

  return { errors: e, valid: ok };
}

// ─── InputField ───────────────────────────────────────────────────────────────
function InputField({ label, icon, error, touched, ...inputProps }) {
  return (
    <div className={`aa-field ${error && touched ? "aa-field--error" : ""} ${!error && touched ? "aa-field--valid" : ""}`}>
      <label className="aa-label">
        <span className="aa-label__icon">{icon}</span>
        {label}
      </label>
      <div className="aa-input-wrap">
        <input className="aa-input" {...inputProps} />
        {!error && touched && <span className="aa-input-check">✓</span>}
      </div>
      {error && touched && (
        <p className="aa-error" role="alert">
          <svg className="aa-error__icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm-.75 3.75a.75.75 0 011.5 0v3.5a.75.75 0 01-1.5 0v-3.5zm.75 7a.875.875 0 110-1.75.875.875 0 010 1.75z"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

// ─── SelectField ──────────────────────────────────────────────────────────────
function SelectField({ label, icon, error, touched, options, placeholder, ...selectProps }) {
  return (
    <div className={`aa-field ${error && touched ? "aa-field--error" : ""} ${!error && touched ? "aa-field--valid" : ""}`}>
      <label className="aa-label">
        <span className="aa-label__icon">{icon}</span>
        {label}
      </label>
      <div className="aa-input-wrap aa-select-wrap">
        <select className="aa-input aa-select" {...selectProps}>
          <option value="">{placeholder}</option>
          {options.map(o => (
            <option key={o.id} value={o.id}>
              {o.name} — {o.specialty}
            </option>
          ))}
        </select>
        <span className="aa-select-arrow" aria-hidden="true">
          <svg viewBox="0 0 12 12" fill="currentColor">
            <path d="M6 8.5L1.5 4h9L6 8.5z"/>
          </svg>
        </span>
        {!error && touched && <span className="aa-input-check">✓</span>}
      </div>
      {error && touched && (
        <p className="aa-error" role="alert">
          <svg className="aa-error__icon" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm-.75 3.75a.75.75 0 011.5 0v3.5a.75.75 0 01-1.5 0v-3.5zm.75 7a.875.875 0 110-1.75.875.875 0 010 1.75z"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

// ─── SubmitButton ─────────────────────────────────────────────────────────────
function SubmitButton({ loading }) {
  return (
    <button type="submit" className={`aa-btn ${loading ? "aa-btn--loading" : ""}`} disabled={loading}>
      {loading ? (
        <>
          <span className="aa-spinner" />
          Booking…
        </>
      ) : (
        <>
          <svg className="aa-btn__icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          Confirm Appointment
        </>
      )}
    </button>
  );
}

// ─── AddAppointment ───────────────────────────────────────────────────────────
export default function AddAppointment() {
  const [form, setForm]       = useState(INIT_FORM);
  const [errors, setErrors]   = useState(INIT_ERRORS);
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus]   = useState(null); // "success" | "error"
  const [apiMsg, setApiMsg]   = useState("");
  const [SelectedDoctor, setSelectedDoctor]   = useState({schedules:[]});
  const [doctorId, setdoctorId]   = useState("");
  const [DOCTORS, setDOCTORS]   = useState( [
  { id: 1,  name: "Dr. Omar Nasser",   specialty: "Cardiology"    },
  { id: 2,  name: "Dr. Nada Youssef",  specialty: "Neurology"     },
  { id: 3,  name: "Dr. Rania Fouad",   specialty: "Pediatrics"    },
  { id: 4,  name: "Dr. Tarek Mansour", specialty: "Orthopedics"   },
  { id: 5,  name: "Dr. Sara El-Badawi",specialty: "Dermatology"   },
]);


const showAppoinment = useContext(addappointmentContext)
const showAlert = useContext(AlertContext)
console.log(showAlert)
// const [alert,SetAlert] = useState({show:false,type:"success" , mess :"This is a success Alert."})
  const today = new Date().toISOString().split("T")[0];
    // get all doctors

  useEffect(()=>{
  

axios.get("/api/Doctor/GetAllDoctors")
  .then((res) => {
    setDOCTORS(res.data.data);
  })
  .catch((err) => {
    console.log(err.response);
  });

},[0])

useMemo(() => {
  // const item = DOCTORS.find((el) => el.id == form.doctorId);
//   setSelectedDoctor(item.schedules || null)
//   console.log(SelectedDoctor)
setdoctorId(form.doctorId)
console.log(form.doctorId)
// // console.log(SelectedDoctor.schedules || "");
}, [form.doctorId]);
  function handleChange(e) {
    const { name, value } = e.target;
    const next = { ...form, [name]: value };
    setForm(next);

    // Re-validate touched field on change
    if (touched[name]) {
      const { errors: newErrors } = validate(next);
      setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
    }
    if (status) setStatus(null);
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const { errors: newErrors } = validate(form);
    setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const allTouched = Object.keys(INIT_FORM).reduce((a, k) => ({ ...a, [k]: true }), {});
    setTouched(allTouched);

    const { errors: newErrors, valid } = validate(form);
    setErrors(newErrors);
    if (!valid) return;

    setLoading(true);
    setStatus(null);
    setApiMsg("");




  
axios.post("/api/Employee/RegisterAndBook", {
  FullName: form.fullName.trim(),
  PhoneNumber: form.phoneNumber.trim(),
  DoctorId: Number(form.doctorId),
  AppointmentDate: form.appointmentDate,
  Time: form.time,
  Notes: "no notes yet"
})
.then((res) => {
  
  showAlert(
   "success",
    res.data?.message || "تم الحجز بنجاح"
  );

})
.catch((err) => {
    console.log(err.response)
  const msg =
    err?.response?.data?.message ||
    err?.response?.data?.errors?.[0] ||
    "فشل الحجز، حاول تاني";

  showAlert("error",msg);

  setStatus("error");
  console.log("STATUS:", err?.response?.status);
  console.log("DATA:", err?.response?.data);
})
.finally(() => {
  setLoading(false);
});
    
    
    }
  
    
  

  // Find selected doctor for preview
  const selectedDoctor = DOCTORS.find(d => d.id === Number(form.doctorId));

  return (
    <div className="aa-page">
      {/* Ambient grid + glow */}
      <div className="aa-grid" aria-hidden="true" />
      <div className="aa-glow aa-glow--1" aria-hidden="true" />
      <div className="aa-glow aa-glow--2" aria-hidden="true" />

      <div className="aa-card">

        {/* ── Card Header ── */}
        <div className="aa-card__header">
          <div className="aa-header-left">
            <div className="aa-pulse-ring" aria-hidden="true">
              <div className="aa-pulse-core" />
            </div>
            <div>
              <h1 className="aa-title">Add Appointment</h1>
              <p className="aa-subtitle">Schedule a new patient visit</p>
            </div>
          </div>
          <div className="aa-header-badge" onClick={()=>showAppoinment.setShowaddAppoint(false)}>
           
             <CloseIcon/>
          </div>
        </div>

        {/* ── Status Banners ── */}
        {status === "success" && (
          <div className="aa-banner aa-banner--success" role="status">
            <div className="aa-banner__icon-wrap aa-banner__icon-wrap--success">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <strong>Appointment Booked!</strong>
              <p>The appointment has been scheduled successfully. A confirmation will be sent to the patient.</p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="aa-banner aa-banner--error" role="alert">
            <div className="aa-banner__icon-wrap aa-banner__icon-wrap--error">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
              </svg>
            </div>
            <div >
              <p>{apiMsg}</p>
            </div>
          </div>
        )}

        {/* ── Form ── */}
        <form className="aa-form" onSubmit={handleSubmit} noValidate>

          {/* Section: Patient */}
          <div className="aa-section">
       

            <div className="aa-row">
              <InputField
                label="Full Name"
                icon="👤"
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Layla Hassan"
                autoComplete="name"
                error={errors.fullName}
                touched={touched.fullName}
              />
              <InputField
                label="Phone Number"
                icon="📞"
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+20 100 000 0000"
                autoComplete="tel"
                error={errors.phoneNumber}
                touched={touched.phoneNumber}
              />
            </div>
          </div>

          {/* Section: Appointment */}
          <div className="aa-section">
          

            <SelectField
              label="Attending Doctor"
              icon="🩺"
              name="doctorId"
              value={form.doctorId}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="— Select a doctor —"
              options={DOCTORS}
              error={errors.doctorId}
              touched={touched.doctorId}
            />

            {/* Doctor info pill */}
            {selectedDoctor && (
              <div className="aa-doctor-pill">
                <span className="aa-doctor-pill__avatar">
                  {selectedDoctor.name.split(" ")[1]?.[0]}{selectedDoctor.name.split(" ")[2]?.[0]}
                </span>
                <div>
                  <span className="aa-doctor-pill__name">{selectedDoctor.name}</span>
                  <span className="aa-doctor-pill__spec">{selectedDoctor.specialty}</span>
                </div>
              </div>
            )}

            <div className="aa-row">
              <InputField
                label="Appointment Date"
                icon="📅"
                type="date"
                name="appointmentDate"
                value={form.appointmentDate}
                onChange={handleChange}
                onBlur={handleBlur}
                min={today}
                error={errors.appointmentDate}
                touched={touched.appointmentDate}
              />
              <InputField
                label="Time"
                icon="🕐"
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.time}
                touched={touched.time}
              />
            </div>
          </div>

          {/* ── Summary Preview ── */}
          {form.fullName && form.appointmentDate && form.time && selectedDoctor && (
            <div className="aa-preview">
              <div className="aa-preview__label">Appointment Summary</div>
              <div className="aa-preview__row">
                <span>Patient</span>
                <strong>{form.fullName}</strong>
              </div>
              <div className="aa-preview__row">
                <span>Doctor</span>
                <strong>{selectedDoctor.name}</strong>
              </div>
              <div className="aa-preview__row">
                <span>Date & Time</span>
                <strong>
                  {new Date(form.appointmentDate + "T00:00").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}
                  {" at "}
                  {form.time}
                </strong>
              </div>
            </div>
          )}

          <SubmitButton loading={loading} />
        </form>

        {/* Footer */}
        <div className="aa-card__footer">
          <span>MediHub Clinic Management</span>
          <span>·</span>
          <span>All data is encrypted</span>
        </div>
      </div>
    </div>
  );
}
