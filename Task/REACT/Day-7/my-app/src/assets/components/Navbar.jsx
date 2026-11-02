import { Link } from "react-router-dom"


const Navbar=()=>{


    return(<>
    
    
    <div className="bg-fuchsia-600 flex h-15 items-center gap-3 justify-between">
        <div className="mx-5 font-bold bg-amber-500 p-3 rounded-bl-3xl">Logo</div>
        <div className="flex items-center gap-4 mx-7">
            <Link className="bg-mauve-700 p-2 rounded-2xl text-white"  to={"/"}>Home</Link>
            <Link className="bg-mauve-700 p-2 rounded-2xl text-white" to={"/about"}>About</Link>
        </div>
    </div>
    
    </>)
}
export default Navbar