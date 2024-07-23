import { CarritoProvider } from "./Carrito"
import { FavoritosProvider } from "./FavoritosContext"
import { LibrosProvider } from "./LibrosContext"
import UserProvider from "./UserContext"

const AppProvider = ({children}) => {
  return (
    <UserProvider>
      <CarritoProvider>
        <LibrosProvider>  
          <FavoritosProvider>

            {children}

          </FavoritosProvider>
        </LibrosProvider>
      </CarritoProvider>
    </UserProvider>
  )
}

export default AppProvider