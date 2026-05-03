import TopBarNurse from "../../components/TopBarNurse/TopBar"
import "./Nurse.css"
import PatientCard from "../../components/PatientCardNurse/PatientCard"
import EmptyState from "../../components/EmptyState/EmptyState";
import StatsRow from "../../components/StatsRow/StatsRow";
import {useState} from "react"
import { useContext } from "react";
import { CurrentUserContext } from "../../Context/CurrentUserContext";
import BottomNav from "../../components/BottonNav/BottomNav";
export default function Nurse(){ 
    const {currentuser} = useContext(CurrentUserContext)

    const INITIAL_PATIENTS = [
        { id: 1, number: "٢٤", name: "أحمد محمد علي",       time: "١٠:٣٠", type: "كشف جديد",  status: "ready"   },
        { id: 2, number: "٢٥", name: "محمود إبراهيم حسين",  time: "١٠:٤٥", type: "استشارة",   status: "waiting" },
        { id: 3, number: "٢٦", name: "منى عبد الرحمن",      time: "١١:٠٠", type: "كشف جديد",  status: "waiting" },
        { id: 4, number: "٢٧", name: " رابعه عبدالقادر  ",      time: "١١:٠٠", type: "كشف جديد",  status: "waiting" },
    ];
    const [patients, setPatients]   = useState(INITIAL_PATIENTS);
//   const [activeNav, setActiveNav] = useState("home");

  const handleAdmit = (id) => {
    setPatients((prev) => prev.filter((p) => p.id !== id));
  };


  const handleDelay = (id) => {
    setPatients((prev) => {
      const idx = prev.findIndex((p) => p.id === id);
      if (idx < 0) return prev;
      const next = [...prev];
      const [item] = next.splice(idx, 1);
      next.push(item);
      return next;
    });
  };
    return(
        <div className="container">
              <div className="nurse">
                     <TopBarNurse  nurseName={currentuser.name} clinicName={currentuser.clinicName}/>
                   <StatsRow nextNumber="٢٤" totalWaiting={patients.length} />
                         {patients.length > 0 ? (
                              patients.map((p, i) => (
                                <PatientCard
                                  key={p.id}
                                  id={p.id}
                                  number={p.number}
                                  name={p.name}
                                  time={p.time}
                                  type={p.type}
                                  status={p.status}
                                  isFirst={i === 0}
                                  onAdmit={() => handleAdmit(p.id)}
                                  onDelay={() => handleDelay(p.id)}
                                />
                              ))
                            ) : (
                              <EmptyState message="مفيش مرضى تانيين في الانتظار" />
                            )}
                             <EmptyState message="مفيش مرضى تانيين في الانتظار" />
                             {/* <BottomNav/> */}
              </div>
        </div>
    )
}