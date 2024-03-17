import About from "./pages/About"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Choose from "./pages/Choose"
import Topbar from "./components/Topbar"
import Team from "./pages/Team"
import Contact from "./pages/Contact"

function App() {


  return (
    <div>
      {/* <Topbar/> */}
      <Home/>
      <Services/>
      <About/>
      <Choose/>
      {/* <Team/> */}
      <Contact/>
    </div>
  )
}

export default App
