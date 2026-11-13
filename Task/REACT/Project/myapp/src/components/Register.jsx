// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'



// const Register = () => {

//    const navigate = useNavigate()

//     const[name,userName]=useState("")
//     const[pass,userPassword]=useState("")
//     const[alert,setAlert]=useState("")

//     const handleName=(e)=>{

//       userName(e.target.value)

//     }

//     const handlePass=(e)=>{

//       userPassword(e.target.value)
//     }
   
//     const btnClick=(e)=>{

//       e.preventDefault()

//       if(userName=="Nathiya" && userPassword==1106){
//         setAlert("That's great we are going to next page")
//         navigate("/")
//         return

        

//       }
//       else{
//         setAlert("Wrong again better luck next time")
//         return
//       }



//     }

    
//   return (
//     <>

//     <div>
//       <p>{setAlert}</p>
//     </div>
//     <form >
//         <input type="text" onChange={handleName} placeholder='Type her name...😎'/>
//         <input type="number" onChange={handlePass} placeholder='Type her BirthDay date and month..🤭'/>
//         <button onClick={btnClick}>I'am Ready</button>
//     </form>
//     </>
//   )
// }
// export default Register



import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

   const navigate = useNavigate()

   const [name, userName] = useState("")
   const [pass, userPassword] = useState("")
   const [alert, setAlert] = useState("")

   const handleName = (e) => {
      userName(e.target.value)
        
   }

   const handlePass = (e) => {
      userPassword(e.target.value)
      
   }

   const btnClick = (e) => {

      e.preventDefault()

      if(!name||!pass){
        setAlert("First fill in the blanks😅")
        return
      }

      if (name === "Nathiya" && pass === "1106") {
         setAlert("That's great we are going to next page 🌸")
         navigate("/home")
         return
      }
      else {
         setAlert("Nope dude! better luck next time")
           userName("")
   userPassword("")
      }
      userName("")
   userPassword("")
      
   }

  

   return (
      <>

         <div className="min-h-screen bg-gradient-to-br from-[#FFF1E8] via-[#FCEAF0] to-[#EDEBFA] flex justify-center items-center px-4 relative overflow-hidden">

            {/* Background decorations */}
            <div className="absolute top-10 left-10 text-4xl opacity-50">💫</div>
            <div className="absolute top-20 right-12 text-4xl opacity-50">✨</div>
            <div className="absolute bottom-16 left-16 text-4xl opacity-50">🌟</div>
            <div className="absolute bottom-10 right-10 text-4xl opacity-50">⚡️</div>


            <div className="w-full max-w-md bg-white/75 backdrop-blur-md border border-white rounded-3xl shadow-xl p-8 md:p-10 relative">

               <div className="text-center mb-8">

                  <div className="text-5xl mb-4"></div>

                  <h1 className="text-4xl font-bold text-[#9D647A]">
                     Hi! WelCome
                  </h1>

                  <p className="text-[#9B8790] mt-3 text-sm">
                     A little happiness, a lot of memories ✨
                  </p>

                  <p className="text-[#B17C91] mt-2 text-lg font-medium">
                     Happy Diwali 🌸
                  </p>

               </div>

               <form onSubmit={btnClick} className="space-y-5">

                  <div>
                     <label className="block text-[#8E6176] mb-2 text-sm font-semibold">
                        UserName🌷
                     </label>

                     <input
                        type="text"
                        onChange={handleName}
                        value={name}
                        placeholder="Type her name... 😎"
                        className="w-full bg-[#FFF8F5] border border-[#EBD5DF] rounded-xl px-4 py-3 text-[#80566B] placeholder-[#BBA5AE] outline-none focus:border-[#D69BB5] focus:ring-2 focus:ring-[#F5DCE8] transition duration-300"
                     />
                  </div>

                  <div>
                     <label className="block text-[#8E6176] mb-2 text-sm font-semibold">
                        User Code 🎀
                     </label>

                     <input
                        type="password"
                        onChange={handlePass}
                        value={pass}
                        placeholder="Type her birthday date... 🤭"
                        className="w-full bg-[#FFF8F5] border border-[#EBD5DF] rounded-xl px-4 py-3 text-[#80566B] placeholder-[#BBA5AE] outline-none focus:border-[#D69BB5] focus:ring-2 focus:ring-[#F5DCE8] transition duration-300"
                     />
                  </div>

                  <button
                     type="submit"
                     className="w-full bg-gradient-to-r from-[#da86a5] to-[#c69adb] text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-95 transition duration-300"
                  >
                     I'am ready✨
                  </button>

               </form>

               <div>
                  <p className="text-center text-[#B16F8B] mt-5 text-sm font-medium">
                     {alert}
                  </p>
               </div>

               <p className="text-center text-[#B5A0A9] text-xs mt-7">
                  Made with love ♡ A Journey of Lights & Memories
               </p>

            </div>

         </div>

      </>
   )
}

export default Register
