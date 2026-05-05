
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
import Messages from './pages/messages/Messages'
import Nurse from './pages/Nurse/Nurse'
import { AlertContext } from './Context/AlertContext'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Dashboard from './pages/Dashboard/Dashboard'
import SetSchedule from './components/SetSchedule/SetSchedule'
import {useState} from "react"
import { CurrentUserContext } from './Context/CurrentUserContext'
import {addappointmentContext} from './Context/addappointmentContext'
import { scheduleDateContext } from './Context/scheduleDateContext'
import AddAppointment from './components/AddAppointment/AddAppointment'
import {ProtectedRouteNurse , ProtectedRouteDoctor ,ProtectedRouteAdminAndreception} from './ProtectedRoute/ProtectedRoute '
 function App() {
        const [ShowaddDate, setShowAddate]= useState(false);
        const [ShowaddAppoint, setShowaddAppoint]= useState(false);
      // get data from localstorage
      const userInfi = JSON.parse(localStorage.getItem("userInfo")); 
      const [currentuser ,setCurrentuser ] = useState(userInfi)

      const [alert,SetAlert] = useState({show:false,type:"success" , mess :"This is a success Alert."})
     
      const HandelAlert = function(type,mess){
        SetAlert({show:true , type , mess})
         clearTimeout(window.alertTimer);
        setTimeout(() => {
            SetAlert(prev => ({ ...prev, show: false }));
        }, 2500);
      }

      return (
        <addappointmentContext.Provider value={{ShowaddAppoint, setShowaddAppoint}}>

        
        <scheduleDateContext.Provider value ={{ShowaddDate, setShowAddate}}>
   <CurrentUserContext.Provider value={{currentuser,setCurrentuser}}>
      <AlertContext.Provider  value={HandelAlert}>
            
            <div className={ alert.show?"alert-div alert-div-show":"alert-div alert-div-hiden"}>
                  <Stack sx={{ width: '100%' }} spacing={2}>
                        {
                        alert.type=="success"?
                             <Alert severity="success">{alert.mess}</Alert>
                             : 
                          <Alert severity="error">{alert.mess}</Alert> 
                        }
                  </Stack>
            </div>
            

            <Routes>
             <Route path='register' element={<Register/>}/>
             <Route path='/login' element={<LoginPage/>}/>
             <Route path='/settings' element={<SettingProfile page={currentuser?.role}/>}/>
             <Route path='/messages/:userid' element={<Messages/>}/>
              <Route path='/contactus' element={<ContactUs/>}/>
             <Route path='/patientdetails/:pationtId' element={<PatientDetails/>}/>

               {/* brotected route for admin and reception  */}
             <Route element={<ProtectedRouteAdminAndreception allowedRoles={["Admin","Reception"]}/> }>
               <Route path='/dashboardd' element={<Dashboard />}>
                        <Route path='addappointment' element={<AddAppointment/>}/>
               </Route>
                    
               
             </Route>

              {/* brotected route for Nurse  */}
            <Route element={<ProtectedRouteNurse allowedRoles={["nurse"]}/>}>
             <Route path='/nurse' element={<Nurse/>}/>
            </Route>
                

                  {/* brotected route for doctor  */}
             <Route element={<ProtectedRouteDoctor allowedRoles={["Doctor"]}/> }>
             <Route path='/' element={<Home/>}/>
             <Route path='/DoctorSchedule' element={<DoctorSchedule/>}>
                 <Route path='setschedule' element={<SetSchedule/>}/>
             </Route>
             <Route path='/allnatients' element={<AllPatients/>}/>
             </Route>
             <Route path='*' element={<NotFound/>}/>
            </Routes>
      </AlertContext.Provider>
      </CurrentUserContext.Provider>
                </scheduleDateContext.Provider>
                </addappointmentContext.Provider>
      )
   
}
export default App
