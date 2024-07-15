import { useContext } from "react"
import { Navigate } from "react-router-dom" 
import { UserContext } from "../context/UserProvider"

const ProtectRoutes = ({children}) => {
  const {token} = useContext(UserContext)

  if(token){
    return children
  } else {
    return <Navigate to="/login" />
  }
}

export default ProtectRoutes