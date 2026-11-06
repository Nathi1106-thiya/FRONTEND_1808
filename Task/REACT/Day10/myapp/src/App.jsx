import Task1 from "./components/Task1"
import Task2 from "./components/Task2"

const App=()=>{

return(<>

<Task1/>


</>)

}

export default App



// const App = () => {


//   const [name,setName]=useState("")
//   const [age,setAge]=useState("")
//   const [number,setNumber]=useState("")
//   const [btn,setBtn]=useState([])


//   const handleName=(e)=>{

//     setName(e.target.value)
    
//   }

//   const handleAge=(e)=>{

//     setAge(e.target.value)

    

//   }
//   const handleNum=(e)=>{

//     setNumber(e.target.value)

//   }

//   const handleBtn=(e)=>{
//     e.preventDefault()
//     if(!name || !age || !number){
//       alert("This is not fill")
//       return
//     }
//     setBtn([name,age,number])

   
    

//   }
//   return (
//     <>
//     <div>
//       <form >
//     <input type="text" onChange={handleName} />
//     <input type="number" onChange={handleAge} />
//     <input type="number" onChange={handleNum} />

//     <button type='submit' onClick={handleBtn}>Submit</button>
    


//       </form>

//       <div>
//       {btn.map((e,i)=>(

//         <div key={i}>

          
//        <h1>{e}</h1>
//         </div>
        

//       ))}
//       </div>
//     </div>
//     </>
//   )
// }

// export default App
