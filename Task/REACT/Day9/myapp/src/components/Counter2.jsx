import{useState} from "react"

const Counter2=()=>{

    const [num,setNum]=useState(0)
   
    const handleIncre=()=>{

      setNum(num+1)

    }


    const handleDecre=()=>{

      setNum(num-1)

    }


    const handleReset=()=>{


        setNum(0)
    }

    return(<>
    
    <div>

        <h1>TASK2</h1>
        <h2>{num}</h2>

        <button onClick={handleIncre}>Increment</button>

        <br /><br />
        <button onClick={handleDecre}>Decrement</button>

        <br /><br />
        <button onClick={handleReset}>Reset</button>
    </div>
    
    </>)
}

export default Counter2