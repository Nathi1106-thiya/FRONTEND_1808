import Img from "../assets/1.jpg"

const Navbar=()=>{

return(<>

<div className="head">
    <div className="nav">
    <img src={Img} alt="" />
</div>

<div className="move">
   <a href="">HOME</a>
   <a href="">ABOUT</a>
   <a href="">CONTACT</a>
</div>

</div>

</>)

}
export default Navbar