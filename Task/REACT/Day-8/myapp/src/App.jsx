
import Student from './components/Student';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';

const App = () => {
const name = "Kumar";
const age = 22;
const course = "React JS";


const products = [
  { id: 1, name: "Laptop", price: 45000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 1500 },
  { id: 4, name: "Keyboard", price: 800 }
];

  return (
   <>
   <div>
    <Student Name={name} Age={age} Course={course}/>
   </div>

   <ProductCard card={products}/>
   <ProductList list={products}/>
    


   </>
  )
}

export default App
