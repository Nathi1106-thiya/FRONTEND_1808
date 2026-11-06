import {useState} from "react"



const Task1 = () => {

    const[name,setName]=useState("")
    const[sub,SetSub]=useState([])

    const handleText=(e)=>{

       setName(e.target.value)

    }

    const handleClick=(e)=>{
     e.preventDefault()
    

     if(!name){
        alert("Please enter the name")
     }
      SetSub(name)


    }


  return (
    <>
    
    <form>
        <input type="text" onChange={handleText} placeholder='Student Name'/>
        <h2>Student Name</h2>
         <button onClick={handleClick}>Submit</button>
    </form>


    <div>
      
     <p>{sub}</p>

    </div>
  
</>
 
)
}
export default Task1
