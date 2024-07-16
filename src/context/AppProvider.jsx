import { LibrosProvider } from "./LibrosContext"
import { SearchProvider } from "./SearchContext"
import UserProvider from "./UserContext"

const AppProvider = ({children}) => {
  return (
    <UserProvider>
      <LibrosProvider>
        <SearchProvider>

          {children}

        </SearchProvider>
      </LibrosProvider>
    </UserProvider>
  )
}

export default AppProvider