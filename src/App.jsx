
import './App.css'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Home from './pages/Home/Home'
import DoctorSchedule from './pages/DoctorSchedule/DoctorSchedule'
import SettingProfile from './pages/SettingProfile/SettingProfile'
import NotFound from './pages/NotFoundPage/NotFoundPage'
import Register from './pages/Register/Register'
import PatientDetails from './pages/PatientDetails/PatientDetails'
import AllPatients from './pages/AllPatients/AllPatients'
import LoginPage  from './pages/Login/LoginPage'
import ContactUs from './pages/ContactUs/ContactUs'
import Nurse from './pages/Nurse/Nurse'
import {useState} from "react"
import { CurrentUserContext } from './Context/CurrentUserContext'
import {ProtectedRouteNurse , ProtectedRouteDoctor} from './ProtectedRoute/ProtectedRoute '
 function App() {
      // get current user info 
      const currnetUserdata = [
            {type:"nurse" , name:"عبدالحميدعطيه" , clinicName :"عيادة الباطنة",role:"nurse"},
            {type:"doctor" , name:"ياسمين علي" , clinicName :"استشاري جراحة العظام",role:"doctor"}
      ]
      const [currentuser ,setCurrentuser ] = useState(currnetUserdata[0])

      return (
   <CurrentUserContext.Provider value={currentuser }>
            <Routes>
             <Route path='register' element={<Register/>}/>
             <Route path='/login' element={<LoginPage/>}/>
             <Route path='/settings' element={<SettingProfile/>}/>
             <Route path='/patientdetails/:pationtId' element={<PatientDetails/>}/>
            <Route element={<ProtectedRouteNurse allowedRoles={"nurse"}/>}>
             <Route path='/nurse' element={<Nurse/>}/>
            </Route>


             <Route element={<ProtectedRouteDoctor allowedRoles={"doctor"}/> }>
             <Route path='/' element={<Home/>}/>
             <Route path='/DoctorSchedule' element={<DoctorSchedule/>}/>
             <Route path='/allnatients' element={<AllPatients/>}/>
             <Route path='/contactus' element={<ContactUs/>}/>
             </Route>

             <Route path='*' element={<NotFound/>}/>
            </Routes>
                  </CurrentUserContext.Provider>
      )
   
}
export default App
