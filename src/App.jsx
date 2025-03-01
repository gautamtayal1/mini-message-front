import Homepage from "./components/Homepage"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router"

function App() {
 return(
  <>
    <Navbar />
    <Outlet />
  </>
 )
}

export default App
