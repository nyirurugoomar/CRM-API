import { Outlet,Navigate } from "react-router-dom";

export default function PrivateRoute(){
    return(
        <Navigate to="/sign-in"/>
    )
}