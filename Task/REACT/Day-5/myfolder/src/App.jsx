import { Routes , Route} from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Service from "./Pages/Service"


const App = () => {
  return (

    <>

    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/service" element={<Service/>} />
    </Routes>



    
    
    </>

  )
}

export default App
