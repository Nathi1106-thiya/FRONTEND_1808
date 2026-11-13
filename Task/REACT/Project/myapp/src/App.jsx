
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Diwali23 from './pages/Diwali23'
import Diwali26 from './pages/Diwali26'
import Register from './components/Register'

const App = () => {
  return (
    
   <>
   
  
    <div>
      
         <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/DiwaliB" element={<Diwali23/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/DiwaliN" element={<Diwali26/>} />
        
      </Routes>

    </div>
   
   </>
  )
}

export default App
