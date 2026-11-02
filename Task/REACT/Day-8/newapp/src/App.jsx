import Task1 from "./components/Task1"
import Task2 from "./components/Task2"
import Task3 from "./components/Task3"



const App=()=>{
  let table=[
    {name:"Nathi",salary:50000,Department:"Java"},
    {name:"Nathiya",salary:60000,Department:"python"},
    {name:"Thiya",salary:30000,Department:".net"},
    {name:"Sudha",salary:20000,Department:"Mern"}
  ]
  return(

<>

<Task1/>
<br />
<Task2/>
<br />
<Task3 arrob={table}/>


</>

  )
}
export default App
