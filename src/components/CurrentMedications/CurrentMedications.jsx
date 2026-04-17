import MedItem from "../MedItem/MedItem"
import './CurrentMedications.css';
import { Link } from 'react-router';

const medications = [
  {
    id: 1,
    name: 'بانتولوك ٤٠ مجم',
    dose: 'قرص واحد',
    timing: 'قبل الأكل',
    timingLabel: 'صباحاً',
    taken: true,
    color: '#1a7ae8',
    icon: '💊',
  },
  {
    id: 2,
    name: 'أوجمنتين ١ جم',
    dose: 'قرص كل ١٢ ساعة',
    timing: 'بعد الأكل',
    timingLabel: 'مرتين',
    taken: false,
    color: '#e85c1a',
    icon: '💊',
  },
];

export default function CurrentMedications() {
  return (
    <div className="section meds-section">
      <div className="section-header">
        <Link to={"addmeditem"}><button className="link-btn">اضافه</button></Link>
        <h2 className="section-title">الأدوية الحالية</h2>
      </div>
      <div className="meds-list">
        {medications.map(med => (
          <MedItem key={med.id} med={med} />
        ))}
      </div>
    </div>
  );
}
