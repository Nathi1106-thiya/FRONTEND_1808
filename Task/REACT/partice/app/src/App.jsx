import {useState} from "react"



const App = () => {

  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [mobile,setMobile] = useState("")
  const [data,setData] = useState([])

  const handlechangename =(e)=>{
    setName(e.target.value)
  }
  const handlechangeage =(e)=>{
    setAge(e.target.value)
  }
  const handlechangemobile =(e)=>{
    setMobile(e.target.value)
  }
  const handleclick =(e)=>{

    e.preventDefault();

    if(!name || !age || !mobile){
      
      alert("Please fill all the data")
    }

    

    const datas = {id:Date.now(),name:name,age:age,mobile:mobile};
    let copy=[...data];
    copy.push(datas);
    setData(copy);

    setName("");
    setAge("");
    setMobile("");
  };
  


  return (

    <>

    <div>
      <input type="text"  value={name} onChange={handlechangename}/>
      <input type="text"  value={age} onChange={handlechangeage}/>
      <input type="text"  value={mobile}  onChange={handlechangemobile}/>
      <button onClick={handleclick}>submit</button>
    </div>
    <div>
      <table>
        <thead>
          <tr>

            <td>
              S.No
            </td>
            <td>
              Name
            </td>
            <td>
              Age
            </td>
            <td>
              Mobile
            </td>
          </tr>
        </thead>

        <tbody>
          {data.map((e,i)=>(
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.mobile}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
    </>

  )





}

export default App
