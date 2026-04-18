import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { CurrentUserContext } from "../Context/CurrentUserContext";

export const ProtectedRouteNurse = ({ allowedRoles }) => {
const currentUser = useContext(CurrentUserContext);
  console.log(allowedRoles , currentUser.role)

  
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles == currentUser.role) {
      return <Outlet />;
    }
    return <Navigate to="/" replace />;
};


export const ProtectedRouteDoctor= ({ allowedRoles }) => {
const currentUser = useContext(CurrentUserContext);
  console.log(allowedRoles , currentUser.role)

  
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles == currentUser.role) {
      return <Outlet />;
    }
    return <Navigate to="/nurse" replace />;
};


