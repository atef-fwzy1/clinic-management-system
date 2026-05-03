import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import {AlertContext} from "../Context/AlertContext"
export const ProtectedRouteNurse = ({ allowedRoles }) => {
   const handelAlert = useContext(AlertContext)
  const {currentuser}= useContext(CurrentUserContext);
    console.log(allowedRoles.includes(currentuser.role))
    console.log(allowedRoles,currentuser.role)
  if (!currentuser) {
    handelAlert("error", " برجاء تسجلا الدخول اولا");
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles.includes(currentuser.role)) {
    return <Outlet />;
  }
  handelAlert("error", "ليس لديك اي صلحيات في الوصول")
  return <Navigate to="/login" replace />;
};


export const ProtectedRouteDoctor = ({ allowedRoles }) => {
  const {currentuser} = useContext(CurrentUserContext);
     const handelAlert = useContext(AlertContext)
     
     
     if (!currentuser) {
    handelAlert("error", " برجاء تسجلا الدخول اولا");
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles.includes(currentuser.role)) {
    return <Outlet />;
  }
handelAlert("error", "ليس لديك اي صلحيات في الوصول")
  return <Navigate to="/login" replace />;
};


export const ProtectedRouteAdminAndreception = ({ allowedRoles }) => {
  const {currentuser} = useContext(CurrentUserContext);
     const handelAlert = useContext(AlertContext)
     if (!currentuser) {
    handelAlert("error", " برجاء تسجلا الدخول اولا");
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles.includes(currentuser.role) || allowedRoles.includes(currentuser.role)) {
    return <Outlet />;
  }
handelAlert("error", "ليس لديك اي صلحيات في الوصول")
  return <Navigate to="/login" replace />;
};


