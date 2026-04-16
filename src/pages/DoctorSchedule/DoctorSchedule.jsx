
import Header from "../../components/ScheduleHeader/Header"
import CalendarWidget from "../../components/CalendarWidget/CalendarWidget"
import WeekSummary from "../../components/WeekSummary/WeekSummary"
import TimePeriods from "../../components/TimePeriods/TimePeriods"
import EmergencySection from "../../components/EmergencySection/EmergencySection"
import BottomNav from "../../components/BottonNav/BottomNav"
function DoctorSchedule(){
    return(
       <div className="schedule container">
                <Header/>
                <CalendarWidget/>
                <WeekSummary/>
                <TimePeriods/>
                <EmergencySection/>
                <BottomNav/>
       </div>
    )
}

export default  DoctorSchedule