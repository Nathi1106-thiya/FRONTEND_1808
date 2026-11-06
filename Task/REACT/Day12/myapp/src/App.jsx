import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Dasboard from './pages/Dasboard'
import Login from './pages/Login'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/' element={<Dasboard/>}/>
    </Routes>
    </>
  )
}

export default App
