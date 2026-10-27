import { Link } from "react-router-dom"


const Navbar = () => {
  return (

    <>
    <div className="bg-gray-400 p-4 flex justify-between ">
        <div className="bg-black text-amber-50 p-3 w-20 flex justify-center font-bold rounded-b-3xl">
            logo
        </div>

        <div className="flex items-center gap-5 font-bold">
            <Link className="bg-fuchsia-300 p-2 rounded-2xl" to="/">Home</Link>
            <Link className="bg-fuchsia-300 p-2 rounded-2xl" to="/about">About</Link>
            <Link className="bg-fuchsia-300 p-2 rounded-2xl" to="/contact">Contact</Link>
             <Link className="bg-fuchsia-300 p-2 rounded-2xl" to="/service">service</Link>
        
        </div>
    </div>
    
    
    </>

  )
}

export default Navbar
