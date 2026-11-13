// import React from 'react'
// import snc1 from "../assets/Food1.jpeg"
// import snc2 from "../assets/food2.jpeg"
// import snc3 from "../assets/Food3.jpeg"
// import snc4 from "../assets/food4.jpeg"
// import acti1 from "../assets/activity2.jpeg"
// import acti2 from "../assets/activity3.jpeg"
// import acti3 from "../assets/activity23.jpeg"
// import me1 from "../assets/2.jpeg"
// import me2 from "../assets/1.jpeg"
// import me3 from "../assets/3.jpeg"
// import me4 from "../assets/4.jpeg"
// import pur1 from "../assets/juice.jpeg"
// import patas from "../assets/pattas.jpeg"





// const Diwali23 = () => {

//   return (
    
//     <>
//     <div>
//       <div>
//         <h1>First Best Diwali</h1>
//         <p>The day i feel very happy and enjoying moments with my family.</p>
//       </div>
//       <div>
//         <h1>Diwali Snacks</h1>
//         <img src={snc1} alt="rava" />
//         <img src={snc2} alt="bhathusa" />
//         <img src={snc3} alt="muruku" />
//         <img src={snc4} alt="rail" />
        
//         <p>Me and my love prepare the snacks for diwali.My mom also join to us thats very memorable one</p>
//       </div>
//       <div>
//         <h1>Pattas</h1>
//         <img src={patas} alt="pts" />
//         <p>That year 1st time i saw this much of pattas so i am very excited to use the products.</p>
//       </div>
//       <div>
//         <h1>Mehandhi Art</h1>
//         <img src={acti1} alt="myhand" />
//         <img src={acti2} alt="sishand" />
//         <img src={acti3} alt="brohand" />
//       </div>

//       <div>
//         <h1>My Celebration</h1>
//          <img src={me1} alt="" />
//          <img src={me2} alt="" />
//          <img src={me3} alt="" />
//          <img src={me4} alt="" />
//          <p>I am very happy that day and my favorite people are there so i feel very comfortable and unconditional enjoyment with my family</p>
//       </div>

//       <div>
//         <h1>Purchas</h1>
//         <img src={pur1} alt="" />
//       </div>
//       <div>

//       </div>
//     </div>
//     </>
//   )
// }

// export default Diwali23


import React from 'react'
import snc1 from "../assets/Food1.jpeg"
import snc2 from "../assets/food2.jpeg"
import snc3 from "../assets/Food3.jpeg"
import snc4 from "../assets/food4.jpeg"
import acti1 from "../assets/activity2.jpeg"
import acti2 from "../assets/activity3.jpeg"
import acti3 from "../assets/activity23.jpeg"
import me1 from "../assets/2.jpeg"
import me2 from "../assets/1.jpeg"
import me3 from "../assets/3.jpeg"
import me4 from "../assets/4.jpeg"
import pur1 from "../assets/juice.jpeg"
import patas from "../assets/pattas.jpeg"

const Diwali23 = () => {

  return (
    <>
      <div className="min-h-screen bg-[#F8F4EE] px-5 py-10 md:px-16">

        <div className="text-center py-20 px-5 mb-16 rounded-[35px] bg-gradient-to-br from-[#F1E3DC] via-[#F8EEE8] to-[#E9DCE8] shadow-xl border border-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#59364D] tracking-wide mb-5">
            First Best Diwali
          </h1>
          <p className="text-[#806B75] text-lg tracking-wide">
            The day i feel very happy and enjoying moments with my family.
          </p>
        </div>

        <div className="mb-20">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#59364D] text-center mb-10 tracking-wide">
            Diwali Snacks
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img src={snc1} alt="rava" className="w-full h-56 md:h-72 object-cover rounded-[22px] border-4 border-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer" />
            <img src={snc2} alt="bhathusa" className="w-full h-56 md:h-72 object-cover rounded-[22px] border-4 border-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer" />
            <img src={snc3} alt="muruku" className="w-full h-56 md:h-72 object-cover rounded-[22px] border-4 border-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer" />
            <img src={snc4} alt="rail" className="w-full h-56 md:h-72 object-cover rounded-[22px] border-4 border-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer" />
          </div>

          <p className="text-center text-[#786B72] text-base md:text-lg leading-9 max-w-3xl mx-auto mt-8">
            Me and my love prepare the snacks for diwali.My mom also join to us thats very memorable one
          </p>
        </div>

        <div className="mb-20 bg-white/80 backdrop-blur-sm p-7 md:p-12 rounded-[30px] shadow-xl border border-[#E9DCCB]">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#59364D] text-center mb-10">
            Pattas
          </h1>

          <img src={patas} alt="pts"
            className="w-full md:w-2/3 h-80 md:h-[420px] object-cover rounded-[25px] border-4 border-white shadow-xl mx-auto hover:scale-[1.02] transition-all duration-500" />

          <p className="text-center text-[#786B72] text-base md:text-lg leading-9 max-w-3xl mx-auto mt-8">
            That year 1st time i saw this much of pattas so i am very excited to use the products.
          </p>
        </div>

        <div className="mb-20">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#59364D] text-center mb-10 tracking-wide">
            Mehandhi Art
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            <img src={acti1} alt="myhand" className="w-full h-80 object-cover rounded-[25px] border-4 border-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500" />
            <img src={acti2} alt="sishand" className="w-full h-80 object-cover rounded-[25px] border-4 border-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500" />
            <img src={acti3} alt="brohand" className="w-full h-80 object-cover rounded-[25px] border-4 border-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500" />
          </div>
        </div>

        <div className="mb-20 bg-gradient-to-br from-[#F0E2EA] via-[#F9EDE8] to-[#EDE5F0] p-7 md:p-12 rounded-[35px] shadow-md border border-white">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#59364D] text-center mb-10">
            Let's see the angel🐣
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img src={me1} alt="" className="w-full h-64 md:h-80 object-cover rounded-[22px] border-4 border-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500" />
            <img src={me2} alt="" className="w-full h-64 md:h-80 object-cover rounded-[22px] border-4 border-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500" />
            <img src={me3} alt="" className="w-full h-64 md:h-80 object-cover rounded-[22px] border-4 border-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500" />
            <img src={me4} alt="" className="w-full h-64 md:h-80 object-cover rounded-[22px] border-4 border-white shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500" />
          </div>

          <p className="text-center text-[#786B72] text-base md:text-lg leading-9 max-w-3xl mx-auto mt-8">
            I am very happy that day and my favorite people are there so i feel very comfortable and unconditional enjoyment with my family
          </p>
        </div>

        <div className="mb-20">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#59364D] text-center mb-10">
            Juice Time 
          </h1>

          <img src={pur1} alt=""
            className="w-full  sm:w-2/3 md:w-1/2 h-80 object-cover rounded-[28px] border-4 border-white shadow-xl mx-auto hover:scale-105 hover:shadow-2xl transition-all duration-500" />
        </div>

        <div className="text-center py-4 border-t  border-[#DCCAB8]">
          <h2 className="text-4xl font-serif font-bold text-[#59364D] tracking-wider">
            Happy Diwali
          </h2>
          <p className="text-[#897783] mt-4 tracking-wide">
            Beautiful memories, endless happiness and family love.
          </p>
        </div>

      </div>
    </>
  )
}

export default Diwali23
