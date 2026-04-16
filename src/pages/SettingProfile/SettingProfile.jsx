import HeaderSeeting from "../../components/Headersetting/Header"
import "./SettingProfile.css"
import DoctorCard from "../../components/DoctorCard/DoctorCard"
import Profilsetting from "../../components/profilsetting/profilsetting"
import SettingsList from "../../components/SettingRow/SettingRow"
import BottomNav from "../../components/BottonNav/BottomNav"
import ButtLogout from "../../components/buttLogout/buttLogout"
export default function SettingProfile(){
    return(
          <div className="headerseeting container">
            <HeaderSeeting title={"إعدادات الحساب"}/>
            <DoctorCard  name={"د. ياسمين علي"} specialty={" استشاري جراحة العظام"} />
            <Profilsetting/>
            <SettingsList/>
            <BottomNav/>
            <ButtLogout/>
          </div>
    )
}