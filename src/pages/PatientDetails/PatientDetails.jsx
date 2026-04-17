import "./PatientDetails.css"
import HeaderPatint from "../../components/pathiontdetaielsHeader/HeaderPatint"
import PatientCardDetails from "../../components/PatientCardDetails/PatientCard"
import MedicalHistory from "../../components/MedicalHistory/MedicalHistory"
import CurrentMedications from "../../components/CurrentMedications/CurrentMedications"
import LabResults from "../../components/LabResults/LabResults"
import BottomNav from "../../components/BottonNav/BottomNav"
export default function PatientDetails(){
    return(
            <div className="container" style={{marginBottom:"20px"}}>
        <div className="patientdetails" >

              <HeaderPatint title={"الملف الطبي"}/>
              <PatientCardDetails/>
              <MedicalHistory/>
              <CurrentMedications/>
              <LabResults/>
              <BottomNav/>
            </div>
        </div>
    )
}