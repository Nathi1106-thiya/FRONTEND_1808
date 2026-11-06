import { useEffect, useState } from "react"


const Todo=()=>{

  const[uname,SetUname]=useState("")
     const[uage,SetUage]=useState("")
      const[umob,SetUmob]=useState("")
      const[udata,setUdata]=useState([])


      const handleName=(e)=>{
        
        SetUname(e.target.value)

      }

      const handleAge=(e)=>{

        SetUage(e.target.value)
        
      }

      const handleMobile=(e)=>{

        SetUmob(e.target.value)
      }

      const handleClick=(e)=>{

        e.preventDefault()

        // object making ethu vara eruka data store panna
        const obj={id:Date.now(),uname,uage,umob}

        // Local storage eruka mari oru simulation process
        let copy=JSON.parse(localStorage.getItem("data")) || []

        // Copy la obj va push pandrom
        copy.push(obj)

        // again local stroage la copy ah set pandrom string ah
        localStorage.setItem("data",JSON.stringify(copy))
        alert("Succesfully added")

        SetUname("")
        SetUage("")
        SetUmob("")

      }

      useEffect(()=>{

        const show=localStorage.getItem("data")
        const final=JSON.parse(show)
        setUdata(final)
      },[handleClick])



  return (

    <>
    
    <form>
        <input type="text" value={uname} placeholder='Enter the name' onChange={handleName}/>
        <input type="text" value={uage} placeholder='Enter the age' onChange={handleAge}/>
        <input type="text" value={umob} placeholder='Enter the mobile' onChange={handleMobile}/>
        <button onClick={handleClick}>Submit</button>

    </form>

    <div>
      {udata.map((e)=>(
        <div key={e.id}>
          <h1>{e.uname}</h1>
          <p>{e.uage}</p>
          <p>{e.umob}</p>
        </div>
      ))}
    </div>
    </>
  )
}
export default Todo
