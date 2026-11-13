
// import { Link } from 'react-router-dom'


// const Navbar = () => {
//   return (
//     <>
    
//     <div className='bg-'>
//         <div>
//         logo
//     </div>
//     <div>
     
//     <Link to={"/home"}>Home</Link>
//     <Link to={"/DiwaliB"}>Previour Dewali</Link>
//     <Link to={"/diwaliN"}>This Dewali</Link>
//     </div>
//     </div>

//     </>
//   )
// }

// export default Navbar




// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100 px-6 md:px-12 py-4">

//       <div className="max-w-7xl mx-auto flex justify-between items-center">

//         {/* Logo */}
//         <div>
//           <h1 className="text-2xl font-bold text-[#B76E8A]">
//             Diwali<span className="text-[#C49AD9]">Diary ✨</span>
//           </h1>
//           <p className="text-xs text-gray-400">Little moments, beautiful memories</p>
//         </div>

//         {/* Navigation */}
//         <div className="flex gap-3 md:gap-8 items-center text-sm md:text-base font-medium">

//           <Link to="/home" className="text-[#9D647A] hover:text-[#D68EAD] transition">
//             Home
//           </Link>

//           <Link to="/DiwaliB" className="text-[#9D647A] hover:text-[#D68EAD] transition">
//             Previous Diwali
//           </Link>

//           <Link to="/DiwaliN" className="text-[#9D647A] hover:text-[#D68EAD] transition">
//             This Diwali
//           </Link>

//         </div>

//       </div>
//     </nav>
//   )
// }

// export default Navbar


import { Link } from 'react-router-dom'
import fam from "../assets/fam2.jpeg"


const Navbar = () => {
  return (
    <nav className="bg-[#f8c7e8]">

      <div className=" flex justify-between p-4 items-center">

        <h1 className="text-2xl font-serif font-bold text-[#a05d7e]">
          Diwali Diary
          <img className='w-20 rounded-2xl mx-4 ' src={fam} alt="" />
        </h1>

        <div className="flex items-center gap-4">

          <Link
            to="/home"
            className="text-[#0f0613] text-2xl hover:text-[#C0809F] transition duration-300"
          >
          🏡
          </Link>

          <Link
            to="/DiwaliB"
            className="text-[#0f0613] bg-pink-300 shadow shadow-mauve-400 font-bold hover:bg-[#ee8bbb] border p-2 rounded-3xl  border-none transition duration-400"
          >
            Previous Diwali⏪
          </Link>

          <Link
            to="/DiwaliN"
            className="text-[#0f0613] bg-pink-300 shadow shadow-mauve-400 font-bold hover:bg-[#ee8bbb] border p-2 rounded-3xl  border-none transition duration-400"
          >
            This Diwali🤍
          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar