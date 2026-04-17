import PationtHistoryCard from '../PationtHistory/HistoryCard';
import './MedicalHistory.css';
import { Link } from 'react-router';
const records = [
  {
    id: 1,
    date: '١٢ أكتوبر ٢٠٢٣',
    badge: 'كشف دوري',
    badgeColor: 'green',
    title: 'التهاب الجيوب الأنفية',
    description: 'شكوى من صداع مستمر وضيق في التنفس. تم صرف بخاخ أنفي ومسكن آلام.',
    doctor: 'د. خالد عبدالرحمن',
    dotColor: '#1a7ae8',
  },
  {
    id: 2,
    date: '١٥ سبتمبر ٢٠٢٣',
    badge: 'متابعة',
    badgeColor: 'orange',
    title: 'التهاب في الحلق',
    description: 'تحسن ملحوظ في الحالة الصحية واستقرار درجة الحرارة.',
     doctor: 'د. خالد عبدالرحمن',
    dotColor: '#ccc',
  },
];

export default function MedicalHistory() {
  return (
    <div className="section">
      <div className="section-header">
        <Link to={"medicalhistory"}><button className="link-btn">عرض الكل</button></Link>
        <h2 className="section-title">التاريخ المرضي الأخير</h2>
      </div>
      <div className="history-list">
        {records.map(record => (
          <PationtHistoryCard key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
}
