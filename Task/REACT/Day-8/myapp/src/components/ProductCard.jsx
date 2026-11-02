import React from 'react'

const ProductCard = ({card}) => {
    
  return (
    <>
    <div>
        <h1 className="bg-blue-500 text-white p-3">Task 5</h1>
      {card.map((e,i)=>(

  <div key={i}>
     <h2>{e.name}</h2>
    
  </div>

      ))}
    </div>
    
    </>
  )
}

export default ProductCard
