import React from 'react'
import Navbar from './assets/components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import StringRender from './assets/pages/StringRender'
import NumberRender from './assets/pages/NumberRender'
import Falshy from './assets/pages/Falshy'
import Boolean from './assets/pages/Boolean'
import About from './assets/pages/About'


const App = () => {
  return (
   <>
      <Navbar/>
      <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/String' element={<StringRender/>}/>
<Route path='/number' element={<NumberRender/>}/>
<Route path='/boolean' element={<Boolean/>}/>
<Route path='/false' element={<Falshy/>}/>
<Route path='/about' element={<About/>}/>





      </Routes>
   </>

  )
}

export default App

