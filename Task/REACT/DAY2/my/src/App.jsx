import Student from "./Componenets/Student"
import Header from "./Componenets/Header"
import Content from "./Componenets/Content"
import Footer from "./Componenets/Footer"
import ProductCard from "./Componenets/Productcard"

const App=() =>{

return (<>

<Student/>

<div>
<Header/>
<Content/>
<Footer/>
</div>


<div>
     <h1>TASK3</h1>
      <h2>Product Details</h2>

      <ProductCard
        name="Laptop"
        price={45000}
        category="Electronics"
        availability="Available"
      />

      <ProductCard
        name="Shirt"
        price={800}
        category="Clothing"
        availability="Available"
      />

      <ProductCard
        name="Book"
        price={300}
        category="Education"
        availability="Out of Stock"
      />
    </div>

</>)

}
export default App