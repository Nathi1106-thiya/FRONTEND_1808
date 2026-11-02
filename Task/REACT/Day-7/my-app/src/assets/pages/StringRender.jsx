import React from 'react'
import { Link } from 'react-router-dom'

const StringRender = () => {

  let title ="Nathiya"
  let number=2030

  return (
   
    
      
   <>
   <div className='bg-fuchsia-200 p-3 flex '>
      <div className='bg-amber-300 w-60 h-20 flex rounded-2xl font-bold justify-end items-center p-2' >
      <h1 >String Rendering</h1>
      <Link className='flex bg-black p-4 w-20 text-white rounded-2xl h-10 items-center justify-center top-507' to={"/"}>Back</Link>
      </div>
      
      <div className='mx-4'>
      <p>
        The Chief Minister of Tamil Nadu in 2026 is {title} (Thalapathy Vijay), president of the Tamilaga Vettri Kazhagam (TVK). and the {title} is cutest cm and he is the more kind hearted person.he is a peak in cinema and {title} a good dancer.C. Joseph Vijay called as thalapathy vijay.
      </p>
      <p>The Chief Minister of Tamil Nadu in 2026 is {title}, founder and leader of the Tamilaga Vettri Kazhagam (TVK).</p>
    <p>
  • Party: Tamilaga Vettri Kazhagam (TVK)
  • Assumed Office: May 10, {number}</p>
    </div>
    </div>
    </>
  )
}

export default StringRender
