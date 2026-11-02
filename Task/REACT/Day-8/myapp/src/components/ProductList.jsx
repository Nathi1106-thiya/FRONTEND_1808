
const ProductList = ({list}) => {
  return (
    <>
    <div>
      {list.map((e,i)=>(

  <div key={i}>
     <h2>{e.price}</h2>
    
  </div>

      ))}
    </div>
    
    </>
  )
}


export default ProductList
