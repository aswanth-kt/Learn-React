import './App.css';
import { useState } from 'react';

function App() {
  let [toDo, setToDo] = useState("");
  let [toDos, setToDos] = useState([]);
  let [status, setStatus] = useState(false);

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayIndex = new Date().getDay();

  const deleteTodo = (id) =>{
    // console.log("id", id)
    // setToDos(toDos.filter((obj)=> obj.id !== id))

  }

  const editTodo = (id, value) => {
    console.log(value)
    setToDos(toDos.filter((obj) => obj.id === id ? setToDos(value) : null))
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {days[dayIndex]} 🌝 ☕ </h2>
        
      </div>
      <div className="input">
        <input value={toDo} onChange={((e) => {setToDo(toDo = e.target.value)})} type="text" placeholder="🖊️ Add item..." />

        {/* Add Btn */}
        <i className="fas fa-plus" 
          onClick={(() =>{
            setToDos([...toDos,{id: Date.now(), text: toDo, status: false}]);
            setToDo("")
          // console.log(toDos)
          })
          }>
        </i>
      </div>

      {/* Disply todos */}
      { toDos.map((todoList, i) => {
        return (
          <div key={i} className="todos">
            <div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  // console.log(e.target.checked)
                  setStatus(e.target.checked)
                  // console.log(todoList)
                  setToDos(toDos.filter(obj => {
                    if (obj.id === todoList.id) {
                      obj.status = e.target.checked
                    }
                    return obj
                  }))

                }} type="checkbox" name="" id="" />
                <p>{todoList.text}</p>
              </div>
              <div className="right">
                <i onClick={(e) => editTodo(todoList.id, todoList.text)} class="fa-solid fa-pen-to-square"></i>
                <i onClick={()=>deleteTodo(todoList.id)} className="fas fa-times"></i>
              </div>
            </div>
          </div>
        )
      }) }

      {/* Showing the done task */}\
      <h3 className='subHeading'>Task Done ✅</h3>
      {!status ? <div className='subHeading' >Not Found</div> : null}
    

      {toDos.map((todoList , i) => (
        // console.log("status", todoList.status)
        
        todoList.status ? <div key={i} className='subHeading'>
                <h5>{todoList.text}</h5>
              </div> 
              : null
      ))}
      
    </div>

  );
}

export default App;
