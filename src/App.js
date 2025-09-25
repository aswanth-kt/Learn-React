import Counter from "./components/Counter";
// import Header from "./components/Header";
import { useState } from "react";
import Employee from "./components/Employee";
import DescriptionHide from "./components/DescriptionHide";

function App() {
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
    // console.log(count)
  }

  const emp = [
    { name: "Aswanth", age: 25 },
    { name: "Pranav", age: 26 },
    { name: "Rahul", age: 29 },
  ]

  // // For hiding and showing function
  let [state, setState] = useState(false);
  // function hideOrShow() {
  //   setState(state ? false : true)
  // }

  return (
    <div>
      <Counter count={count} />
      <button onClick={addCount} >+</button>
      
      {
        state && emp.map((obj, index) => <Employee key={index} {...obj} />)
      }

      <button onClick={() => setState(!state)} >Show/Hide</button>
      {state && <DescriptionHide/>}
      
    </div>
  );
}

export default App;
