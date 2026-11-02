import React from 'react'

const Boolean = () => {


  // Conditional rendering-terneary operator

  let isActive=""
  isActive=false
  isActive=0
  // these all are false otherwise all true

  // Optional rendering

// the true value only show, false value dont show the screen
let value=true

  return (
    <>
    <div className='bg-amber-200 p-10 font-bold'>
        <div>
          {/* Condition?"true":"false" */}
          {isActive?"This is truee":"This is false"}
        </div>
        <div>
          {value&&"This is react"}
        </div>
    </div>
    
    </>
  )
}

export default Boolean
