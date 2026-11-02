
import React from 'react'

const Arrobj = ({ arrob }) => {
  return (
   <div>
    {arrob.map((e,i)=>(
      <div key={i}>
        <p>{e.name}</p>
        <p>{e.salary}</p>
        <p>{e.Department}</p>
      </div>

    ))}
   </div>
  )
}

export default Arrobj

