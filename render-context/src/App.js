import About from "./Container/About"
import Sales from "./Container/Sales"
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom"

function App() {
  const [state, setState] = useState("This is state value : 100");
  const navigate = useNavigate();
  // console.log("Navigate:", navigate)

  return (
    // <Router>
    <div>

      {/* <button onClick={() => setState("about")} >About</button>
      <button onClick={() => setState("sales")} >Sales</button> */}
      {/* <a href="/about">About</a> */}

      {/* Using Link */}
      {/* <Link to="/" >Home</Link> <br />
      <Link to="/about" >About Page</Link> <br />
      <Link to="/sales" >Sales Page</Link> <br /> */}

      {/* using Button */}
        <button onClick={() => navigate('/')} > Home </button>
        <button onClick={() => navigate('/about')} > About </button>
        <button onClick={() => navigate('/sales')} > Sales </button>
      
      <Routes>

        <Route element={ <h1>Home Page</h1> } path="/" />
        <Route element={<About data={state} />} path="/about" />
        <Route element={<Sales/>} path="/sales" />
        
      </Routes>
    
    </div>
    // </Router>
  );
}

export default App;
