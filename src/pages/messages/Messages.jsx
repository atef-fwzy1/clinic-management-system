
import NotificationHeader from "../../components/NotificationHeader/NotificationHeader"
import NotificationItem from "../../components/NotificationItem/NotificationItem";
;
export default function Messages(){

  const notifications =   [
  {
    id: 1,
    icon: '🏠',
    title: 'Maintenance request update',
    time: '5h ago',
    body: <>The maintenance request for <strong>John Doe</strong> in <strong>Apartment 301</strong> has been <span className="text-green">Completed</span>. The issue was a leaking faucet in the kitchen.</>,
    readed: false
  },
  {
    id: 2,
    icon: '💲',
    title: 'Rent Payment Confirmation',
    time: '7h ago',
    body: <>We have received the rent payment of <strong>$1,200</strong> for <strong>Jane Smith</strong> in <strong>Apartment 102</strong>. The payment was processed <span className="text-green">successfully</span>.</>,
    readed: true
  },
  {
    id: 3,
    icon: '⏰',
    title: 'Lease Renewal Reminder',
    time: '7h ago',
    body: <>The lease for <strong>Esther Howard</strong> in <strong>Apartment 308</strong> is set to <span className="text-red">expire on October 15, 2023</span>. Please take appropriate action to initiate lease renewal discussions.</>,
    readed: true
  }
];


    return(<>
            <NotificationHeader page="nurse"/>
        <div className="container">
        <div className="notification-panel">
      <div className="notification-list">
        <h3 className="list-group-title">Today</h3>
        {notifications.map((n) => (
          <NotificationItem key={n.id} {...n} />
        ))}
      </div>
    </div>
        </div>
        
    </>
    )
}