import { CarritoProvider } from "./Carrito"
import { LibrosProvider } from "./LibrosContext"
import UserProvider from "./UserContext"

const AppProvider = ({children}) => {
  return (
    <UserProvider>
      <CarritoProvider>
        <LibrosProvider>  
          
          {children}

        </LibrosProvider>
      </CarritoProvider>
    </UserProvider>
  )
}

export default AppProvider