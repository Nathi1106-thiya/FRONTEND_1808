import { useState } from "react"

const String1=()=>{

     
    const [name,setName]=useState("Arun")

    const handleClick=()=>{
      
        setName("Kumar")

    }
    return(


<>

<div>
    <h1>TASK1</h1>

    <h3>{name}</h3>

    <button onClick={handleClick}>Change</button>
</div>

<br /><br />
<div>
  
</div>

</>


    )
}

export default String1