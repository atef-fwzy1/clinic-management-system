import "./NotFoundPage.css"
import { Link } from "react-router";
export default function NotFound() {
  return (
    <div className="page-wrapper">

      
    

     
      <div className="grid-overlay" />

   
   

     
      <main className="main-content">
        <div className="card">

         
          <div className="heartbeat-strip">
            <svg className="ecg-svg" viewBox="0 0 600 60" preserveAspectRatio="none">
              <polyline
                className="ecg-line"
                points="
                  0,30 60,30 80,30 90,5 100,55 110,15 120,30
                  180,30 200,30 210,5 220,55 230,15 240,30
                  300,30 320,30 330,5 340,55 350,15 360,30
                  420,30 440,30 450,5 460,55 470,15 480,30
                  540,30 560,30 570,5 580,55 590,15 600,30
                "
              />
            </svg>
          </div>

          <div className="card-body">
            
            <div className="icon-zone">
              <div className="pulse-ring pulse-ring-1" />
              <div className="pulse-ring pulse-ring-2" />
              <div className="pulse-ring pulse-ring-3" />
              <div className="medical-icon">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                 
                  <rect x="28" y="10" width="24" height="60" rx="6" fill="url(#crossGrad)" />
                  <rect x="10" y="28" width="60" height="24" rx="6" fill="url(#crossGrad)" />
                
                  <rect x="34" y="14" width="8" height="20" rx="3" fill="white" opacity="0.25" />
                  <defs>
                    <linearGradient id="crossGrad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

         
            <div className="error-number">
              <span className="digit">4</span>
              <span className="digit digit-zero">0</span>
              <span className="digit">4</span>
            </div>

          
            <div className="divider">
              <span className="divider-dot" />
              <span className="divider-line" />
              <span className="divider-icon">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="divider-line" />
              <span className="divider-dot" />
            </div>

            
            <h1 className="error-title">Page Not Found</h1>
            <p className="error-message">
              This page seems to be missing,<br />
              but <em>your care is still our priority.</em>
            </p>

            
            <div className="info-pills">
              <div className="pill">
                <span className="pill-icon">🕐</span>
                <span>24/7 Support</span>
              </div>
              <div className="pill">
                <span className="pill-icon">📍</span>
                <span>All Systems Operational</span>
              </div>
              <div className="pill">
                <span className="pill-icon">🔒</span>
                <span>Secure Connection</span>
              </div>
            </div>

         
            <div className="actions">
              <a href="/" className="btn btn-primary">
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none">
                  <path d="M3 10l7-7 7 7M5 8v9a1 1 0 0 0 1 1h3v-5h2v5h3a1 1 0 0 0 1-1V8"
                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Link to="/">Back to Home</Link>
              </a>
              <a href="/help" className="btn btn-secondary">
                Contact Support
              </a>
            </div>
          </div>
        </div>

       
        <p className="footer-note">
          If you believe this is a system error, please{' '}
          <a href="/report" className="footer-link">report it to Team</a>.
        </p>
      </main>
    </div>
  );
}
