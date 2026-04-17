import React, { useState } from 'react';
import './ContactUs.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Link} from "react-router"
const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    
    setTimeout(() => {
      setIsSending(false);
      setShowToast(true);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setShowToast(false), 4000);
    }, 1800);
  };

  return (
    
    
    <div className="novamed-container">
      {/* Navbar */}
      <nav className="navbar">
        <a href="/" className="nav-brand">
          <div className="nav-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7v5c0 5.25 4.2 10.17 10 11.36C17.8 22.17 22 17.25 22 12V7L12 2z" fill="white" opacity=".9" />
              <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="nav-name">Name<span>Here</span></span>
        </a>
        <ul className="nav-links">
         
          <li><Link  to="/"  className="nav-cta">Go To Home</Link></li>
        
        </ul>
      </nav>

    <div className='container'>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge fade-up">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.12 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 14.92v2z" fill="#0d9488" />
          </svg>
          We're always here for you
        </div>
        <h1 className="fade-up fade-up-1">
          Get in <em>Touch</em><br />with Our Team
        </h1>
        <p className="fade-up fade-up-2">We are here to help you anytime. Our medical team is ready to answer your questions and assist you with your healthcare needs.</p>
        
        <div className="hero-stats fade-up fade-up-3">
          <div className="stat-item">
            <span className="stat-num">24/7</span>
            <span className="stat-label">Support</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">5 min</span>
            <span className="stat-label">Avg. Response</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">12+</span>
            <span className="stat-label">Specialties</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">98%</span>
            <span className="stat-label">Satisfaction</span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="main-container">
        {/* Left Column */}
        <div className="left-col">
          <p className="section-label fade-up">Reach Us</p>


          <div className='conyact-box'>

          <h2 className="section-title fade-up fade-up-1">
            <span>Contact</span>
            <span>Information</span>
             </h2>
          </div>

          <div className="emergency-card fade-up fade-up-1">
            <div className="emergency-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7v5c0 5.25 4.2 10.17 10 11.36C17.8 22.17 22 17.25 22 12V7L12 2z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="emergency-label">Emergency Line</p>
              <p className="emergency-number">+20 100 000 0000</p>
              <p className="emergency-note">Available 24 hours · 7 days a week</p>
            </div>
          </div>

          <ContactInfoCard 
            icon="teal" 
            label="Main Line" 
            primary="+20 110 000 0001" 
            secondary="Sat – Thu, 8 AM – 10 PM" 
            badge="📞 Click to Call"
            link="tel:+201100000001"
            delay="fade-up-2"
          />

          <ContactInfoCard 
            icon="sky" 
            label="Appointments" 
            primary="+20 110 000 0002" 
            secondary="Book or reschedule visits" 
            badge="📱 WhatsApp Available"
            link="tel:+201100000002"
            delay="fade-up-3"
            badgeStyle={{background: '#e0f2fe', color: '#0284c7'}}
          />

          <ContactInfoCard 
            icon="green" 
            label="Email" 
            primary="hello@novamed.clinic" 
            secondary="We respond within 2–4 hours" 
            link="mailto:hello@novamed.clinic"
            delay="fade-up-4"
          />

       
        </div>

        {/* Right Column - Form */}
        <div className="right-col">
          <div className="form-card fade-up">
            <p className="section-label">Send a Message</p>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>We'd Love to<br />Hear from You</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input className="form-input" id="firstName" type="text" placeholder="Mohamed" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input className="form-input" id="lastName" type="text" placeholder="Ahmed" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" id="phone" type="tel" placeholder="+20 100 000 0000" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input className="form-input" id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group full">
                  <label className="form-label">Subject</label>
                  <select className="form-select form-input" id="subject" value={formData.subject} onChange={handleChange}>
                    <option value="">Select a topic...</option>
                    <option>Book an Appointment</option>
                    <option>Medical Inquiry</option>
                    <option>Lab Results</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label className="form-label">Your Message</label>
                  <textarea className="form-textarea" id="message" placeholder="Describe how we can help you..." value={formData.message} onChange={handleChange} required></textarea>
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? (
                  <span className="loader-inner">Sending...</span>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
      {/* Socials */}
      <section className="social-section">
        <h2>Follow Us</h2>
        <div className="social-grid">
          <SocialCard platform="Facebook" iconClass="icon-fb" icon ={<FacebookIcon/>} link="https://facebook.com" />
          <SocialCard platform="Instagram" iconClass="icon-ig" icon ={<InstagramIcon/>}link="https://instagram.com" />
          <SocialCard platform="WhatsApp" iconClass="icon-wa" icon ={<WhatsAppIcon/>} link="https://wa.me/201000000000" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 <strong>NameHere</strong> · All rights reserved</p>
      </footer>

      {/* Success Toast */}
      <div className={`toast ${showToast ? 'show' : ''}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#22c55e" />
          <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Message sent! We'll be in touch soon.
      </div>
    </div>
  );
};

/* Sub-components for cleaner code */
const ContactInfoCard = ({ icon, label, primary, secondary, badge, link, delay, badgeStyle }) => (
  <a href={link} className={`contact-card fade-up ${delay}`}>
    <div className={`card-icon icon-${icon}`}>
       {/* Icons can be passed as props or defined based on type */}
       <div className="dot-placeholder"></div>
    </div>
    <div className="card-body">
      <p className="card-label">{label}</p>
      <p className="card-primary">{primary}</p>
      <p className="card-secondary">{secondary}</p>
      {badge && <span className="card-badge" style={badgeStyle}>{badge}</span>}
    </div>
  </a>
);

const SocialCard = ({ platform, iconClass, link ,icon}) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="social-card">
    <div className={`social-icon-wrap ${iconClass}`}>

    {icon}
    </div>
    {platform}
  </a>
);

export default ContactUs;