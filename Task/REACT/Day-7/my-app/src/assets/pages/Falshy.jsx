import React from 'react'

const Falshy = () => {

  // Nullish Coalescing
  // left side value null or undefined ah erutha right side value show agum.
  // ila melayum value kudutha athu show agum like 10 kudtha 10 show agum.
  // value true natha screen la show agum ilati yethum show agathu
  let falsy="False"
  return (
    <>
    
    
    <div>
      <div>
        <h1>
          {falsy??"True"}
        </h1>
      </div>
    </div>
    
    </>
  )
}

export default Falshy
