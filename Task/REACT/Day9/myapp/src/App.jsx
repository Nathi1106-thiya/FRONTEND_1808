import Counter2 from "./components/Counter2"
import Props from "./components/Props"
import String1 from "./components/String1"



const App=()=>{


  return(<>
  
  <String1/>
  <Counter2/>


  <h1>TASK3</h1>

        <Props name="Arun" age={20} course="React" />
        <Props name="Priya" age={21} course="Java" />
        <Props name="Kumar" age={19} course="Python" />

  
  </>)
}
export default App