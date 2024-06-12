import { Navigate } from "react-router-dom";
import { getCurrentUser } from "./utils/auth"
export default function AuthRoute ({children}) {
    const currentUser = getCurrentUser()
    if (currentUser !== null && currentUser !== undefined){
        return (children)
    }else{
        return <Navigate to='/login' replace/>
    }
}
