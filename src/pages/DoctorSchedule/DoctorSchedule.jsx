
import Header from "../../components/ScheduleHeader/Header"
import CalendarWidget from "../../components/CalendarWidget/CalendarWidget"
import WeekSummary from "../../components/WeekSummary/WeekSummary"
import TimePeriods from "../../components/TimePeriods/TimePeriods"
import EmergencySection from "../../components/EmergencySection/EmergencySection"
import BottomNav from "../../components/BottonNav/BottomNav"
import { Outlet } from "react-router";
import { useContext } from "react";
import {scheduleDateContext} from "../../Context/scheduleDateContext"
function DoctorSchedule(){
 const showschedule = useContext(scheduleDateContext)
 console.log(showschedule)
    return(
       <div className="schedule container">
                <Header/>
                <CalendarWidget/>
                <WeekSummary/>
                <TimePeriods/>
                <EmergencySection/>
                <BottomNav/>
                <div className="addschdule">
                  {showschedule.ShowaddDate &&<Outlet />} 
                </div>
       </div>
    )
}

export default  DoctorSchedule