import { Link } from "react-router-dom"


const NumberRender = () => {
  let data=1234567890
  let num=11062006
  return (
   <>
    <div className='bg-pink-200  p-2'>
        <h2>098{data}123{num}</h2>
        <Link className='flex bg-black p-2 w-20 font-bold text-white rounded-2xl h-10 items-center justify-center top-507' to={"/"}>BACK</Link>
    </div>
     
   
   </>
  )
}

export default NumberRender
