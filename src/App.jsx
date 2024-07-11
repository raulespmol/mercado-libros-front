//Components
import RouterLinks from "./router/Router"
import './App.css'
import UserProvider from "./context/UserProvider"

function App() {

  return (
    <UserProvider>
      <RouterLinks />
    </UserProvider>
  )
}

export default App
