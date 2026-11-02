import React from 'react'

const Student = ({Name,Age,Course}) => {
  return (
   <>
   
    <div>
      <h2>Name:{Name}</h2>
      <h2>Age:{Age}</h2>
      <h2>Course:{Course}</h2>
    </div>
   </>
  )
}

export default Student
