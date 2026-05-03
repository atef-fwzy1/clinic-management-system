import HeaderSeeting from "../../components/Headersetting/Header"
import "./SettingProfile.css"
import DoctorCard from "../../components/DoctorCard/DoctorCard"
import Profilsetting from "../../components/profilsetting/profilsetting"
import SettingsList from "../../components/SettingRow/SettingRow"
import BottomNav from "../../components/BottonNav/BottomNav"
import ButtLogout from "../../components/buttLogout/buttLogout"
import { useContext } from "react";
import { CurrentUserContext } from "../../Context/CurrentUserContext"
export default function SettingProfile({page}){
  const {currentuser} = useContext(CurrentUserContext)
    return(
          <div className="headerseeting container">
            <HeaderSeeting title={"إعدادات الحساب"} page={page}/>
            <DoctorCard  name={currentuser.name} specialty={currentuser.clinicName} type={currentuser.type} />
            <Profilsetting/>
            <SettingsList/>
           {page !="nurse"&& <BottomNav/>}
            <ButtLogout/>
          </div>
    )
}