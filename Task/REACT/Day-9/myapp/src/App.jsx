// import ArrayRendering from "./componets/ArrayRendering"

import Arrobj from "./componets/Arrobj"


// const App = () => {
//   let arr=[1,2,3,4,5]
//   return (
//    <>
//     <ArrayRendering New={arr}/>
//     </>
//   )
// }
// export default App


// const App=()=>{
//   let obj={name:"Nathiya",age:20,course:"Fullstack"}
//   return(

// <>
// <ObjectRendering newone={obj}/>
// </>
//   )
// }
// export default App


const App=()=>{
  let arob=[
    {name:"Nathi",salary:50000,Department:"Java"},
    {name:"Nathiya",salary:60000,Department:"python"},
    {name:"Thiya",salary:30000,Department:".net"},
    {name:"Sudha",salary:20000,Department:"Mern"}
  ]
  return(

<>
<Arrobj arrob={arob}/>
</>

  )
}
export default App




