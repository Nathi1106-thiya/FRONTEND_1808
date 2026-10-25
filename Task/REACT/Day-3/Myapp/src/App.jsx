import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import MenuPreview, { Footerfood } from "./Components/MenuPreview"
import Navbar from "./Components/Navbar"
import Navfood from "./Components/Navfood"
import RestaurantHero from "./Components/RestaurantHero"
import Dashboard from "./Pages/Dashboard"
import Home from "./Pages/Home"

const App=()=>{


    return(<>
    <div>
        <Navbar/>
    <Hero/>
    <Footer/>
    </div>

    <Home/>

    <div>
        <Navfood/>
        <RestaurantHero/>
        <MenuPreview/>
        <Footerfood/>
    </div>
    <Dashboard/>
    
    </>)
}

export default App
