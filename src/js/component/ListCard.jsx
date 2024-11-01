import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const addNewTask = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      const newTask = {
        id: uuidv4(),
        task: inputValue  // usar inputValueen vez de e.target.value
      };
      setTasksList([...tasksList, newTask]);  // agregar nueva tarea
      setInputValue('');  // limpiar input
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);  //actualizar input value
  };

  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id)); // borrar task por id
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="card" style={{ width: '40rem', marginTop: '10rem'}}>
        <div className="card-body">

          <div className="container d-flex justify-content-center">
            <h1 className='card-title my-4'>To Do List</h1>
          </div>

          <div className="container d-flex justify-content-center mb-3">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Escribe una tarea y presiona Enter"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={addNewTask}
            />
          </div>

          <div className="container d-flex justify-content-center">
            <ul className='list-group' style={{ width: "100%" }}>
              <p>{tasksList.length} tareas pendientes</p>
              {tasksList.length === 0 ?
                <li
                  className='d-flex justify-content-between list-group-item p-3 list-items'
                >No hay tareas pendientes</li>
                
                :

                tasksList.map((task) => (
                  <li
                    className='d-flex justify-content-between list-group-item p-3 list-items'
                    key={task.id}
                  >
                    {task.task}
                    <button type="button" className="btn-close delete-button" onClick={() => deleteTask(task.id)}></button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;