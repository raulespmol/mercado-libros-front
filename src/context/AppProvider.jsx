import { LibrosProvider } from "./LibrosContext"
import UserProvider from "./UserContext"

const AppProvider = ({children}) => {
  return (
    <UserProvider>
      <LibrosProvider>

        {children}

      </LibrosProvider>
    </UserProvider>
  )
}

export default AppProvider