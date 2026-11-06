import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <>
    <div className='bg-amber-200'>
        <div>
            logo
        </div>
        <Link to={"/Login"}>Login</Link>
        <Link to={"/Register"}>Register</Link>
        <Link to={"/"}>Dashboard</Link>
    </div>
    </>
  )
}

export default Navbar
