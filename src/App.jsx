
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
 function App() {
      return (
            <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/DoctorSchedule' element={<DoctorSchedule/>}/>
             <Route path='/settings' element={<SettingProfile/>}/>
             <Route path='register' element={<Register/>}/>
             <Route path='/patientdetails/:pationtId' element={<PatientDetails/>}/>
             <Route path='/allnatients' element={<AllPatients/>}/>
             <Route path='/login' element={<LoginPage/>}/>
             <Route path='/contactus' element={<ContactUs/>}/>
             <Route path='*' element={<NotFound/>}/>
            </Routes>
      )
   
}
export default App
