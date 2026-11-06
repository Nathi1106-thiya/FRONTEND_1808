import React, { useState } from 'react'

const Register = () => {

    const[name,SetName]=useState("")
    const[age,SetAge]=useState("")
    const[email,SetEmail]=useState("")



  return (
    <div>
      <form>
        <input type="text" placeholder='Enter the Name' onChange={handleName}/>
        <input type="text" placeholder='Enter the Age' onChange={handleage}/>
        <input type="text" placeholder='Enter the Email' onChange={handleEmail}/>
        
      </form>
    </div>
  )
}

export default Register
