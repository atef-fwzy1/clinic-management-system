import "./PatientDetails.css"
import HeaderPatint from "../../components/pathiontdetaielsHeader/HeaderPatint"
import PatientCardDetails from "../../components/PatientCardDetails/PatientCard"
export default function PatientDetails(){
    return(
            <div className="container">
        <div className="patientdetails">

              <HeaderPatint/>
              <PatientCardDetails/>
            </div>
        </div>
    )
}