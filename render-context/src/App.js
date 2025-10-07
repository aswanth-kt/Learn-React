import About from "./Container/About";
import Sales from "./Container/Sales"
import { useState } from "react";

function App() {
  const [state, setState] = useState();

  let component;
  if (state === "about") component = <About/>
  if (state === "sales") component = <Sales/>

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setState("about")} >About</button>
      <button onClick={() => setState("sales")} >Sales</button>
      {component}
      </div>
  );
}

export default App;
