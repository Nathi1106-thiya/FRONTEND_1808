
const ProductCard =(props) =>{
  return (
    <div>
      <h3>Product Name: {props.name}</h3>
      <p>Price: {props.price}</p>
      <p>Category: {props.category}</p>
      <p>Availability: {props.availability}</p>
      <hr />
    </div>
  );
}

export default ProductCard;
