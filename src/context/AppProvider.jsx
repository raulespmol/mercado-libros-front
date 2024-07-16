import { SearchProvider } from "./SearchContext"
import UserProvider from "./UserContext"

const AppProvider = ({children}) => {
  return (
    <UserProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </UserProvider>
  )
}

export default AppProvider