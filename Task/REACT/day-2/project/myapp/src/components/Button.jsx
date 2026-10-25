const Button=()=>{

return(<>

<h2 className="head">This is my button page1</h2>
<button  className="btn">YES</button>
<button className="btn">NO</button>
<Buttonclick/>

</>)

}
export default Button


const Buttonclick=()=>{

return(<>

<h2 className="head">This is button page2 </h2>
<button  className="btn">YES</button>
<button className="btn">NO</button>


</>)

 }

 
export const Common=()=>{
    return(<>
    
    <h2 className="head">This is button page3</h2>
    <button  className="btn">YES</button>
<button className="btn">NO</button>
    
    </>)
}

export const Moonone=()=>{
    return(<>
    
   <div className="group">
     <h2>This is button page4</h2>
    <button  className="btn">YES</button>
<button className="btn">NO</button>
    </div>
    
    </>)
}