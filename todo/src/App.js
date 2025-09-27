import './App.css';
import { useState } from 'react';

function App() {
  let [toDo, setToDo] = useState("");
  let [toDos, setToDos] = useState([]);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={((e) => {setToDo(e.target.value); console.log(toDo)})} type="text" placeholder="🖊️ Add item..." />

        {/* Add Btn */}
        <i className="fas fa-plus" 
          onClick={(() =>{
            setToDos([...toDos,toDo]);
           console.log(toDos)})
          }>
        </i>
      </div>

      {/* Disply todos */}
      { toDos.map((todoList, i) => {
        return (
          <div className="todos">
            <div className="todo">
              <div className="left">
                <input type="checkbox" name="" id="" />
                <p>{todoList}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>
        )
      }) }
    </div>

  );
}

export default App;
