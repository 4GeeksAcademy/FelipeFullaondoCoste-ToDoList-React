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
    <div className="container d-flex justify-content-center mt-5">
      <div className="card" style={{ width: '25rem' }}>
        <div className="card-body">

          <div className="container d-flex justify-content-center">
            <h1 className='card-title my-5'>To Do List</h1>
          </div>

          <div className="container d-flex justify-content-center mb-3">
            <input
              type="text"
              placeholder="Escribe una tarea y presiona Enter"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={addNewTask}
            />
          </div>

          <div className="container d-flex justify-content-center">
            <ul className='list-group'>
              {tasksList.map((task) => (
                <li
                  className='d-flex justify-content-between list-group-item p-3 '
                  key={task.id}
                >
                  {task.task}
                  <button onClick={() => deleteTask(task.id)}>Eliminar</button>
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