import About from "./Container/About"
import Sales from "./Container/Sales"
// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

function App() {
  // const [state, setState] = useState();

  return (
    <Router>
    <div>
      


      {/* <button onClick={() => setState("about")} >About</button>
      <button onClick={() => setState("sales")} >Sales</button> */}
      {/* <a href="/about">About</a> */}

      <Link to="/" >Home</Link> <br />
      <Link to="/about" >About Page</Link> <br />
      <Link to="/sales" >Sales Page</Link> <br />
      
      <Routes>

        <Route element={ <h1>Home Page</h1> } path="/" />
        <Route element={<About/>} path="/about" />
        <Route element={<Sales/>} path="/sales" />
        
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;
