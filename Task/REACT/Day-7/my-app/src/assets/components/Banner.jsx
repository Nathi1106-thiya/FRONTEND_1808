import React from 'react'
import { Link } from "react-router-dom"
const Banner = () => {
  return (
    <>
    <div className='bg-amber-400 p-2 flex gap-3'>
        <Link  className='bg-white w-35 h-10 text-center flex rounded-2xl items-center justify-center' to={"/String"}>StringRender</Link>
        <Link className='bg-white w-35 h-10 text-center flex rounded-2xl items-center justify-center' to={"/number"}>NumberRender</Link>
        <Link className='bg-white w-35 h-10 text-center flex rounded-2xl items-center justify-center' to={"/boolean"}>Boolean</Link>
        <Link className='bg-white w-35 h-10 text-center flex rounded-2xl items-center justify-center' to={"/false"}>Falshy</Link>
    </div>
    </>
  )
}

export default Banner
