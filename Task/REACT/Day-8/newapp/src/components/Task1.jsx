const Task1=()=>{

  const languages = ["HTML", "CSS", "JavaScript", "React", "Python"];

    return(<>
    <h1 className="bg-amber-200 p-3">TASK1</h1>
    
    {languages.map((e,i)=>(


  <div key={i}>
    
    <li>
        <ol>{e}</ol>
    </li>
  </div>

    ))}
    
    </>)
}

export default Task1