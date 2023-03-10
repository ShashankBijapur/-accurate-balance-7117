import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/Auth";


function PrivateRoute({children}) {
const {authState} = useContext(AuthContext);

   if(authState){
    return <Navigate to="/Login" />
   }
   
   return children;
}

export default PrivateRoute;