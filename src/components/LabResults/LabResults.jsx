import LabItem from '../LabItem/LabItem';
import './LabResults.css';

const labs = [
  {
    id: 1,
    title: 'صورة دم كاملة (CBC)',
    date: '١٢ أكتوبر ٢٠٢٣',
    icon: 'doc',
  },
  {
    id: 2,
    title: 'أشعة سينية على الصدر',
    date: '١٠ سبتمبر ٢٠٢٣',
    icon: 'xray',
  },{
    id: 2,
    title: 'أشعة سينية على الصدر',
    date: '١٠ سبتمبر ٢٠٢٣',
    icon: 'xray',
  },
];

export default function LabResults() {
  return (
    <div className="section labs-section">
      <h2 className="section-title">التحاليل والأشعة</h2>
      <div className="labs-list">
        {labs.map(lab => (
          <LabItem key={lab.id} lab={lab} />
        ))}
      </div>
    </div>
  );
}
