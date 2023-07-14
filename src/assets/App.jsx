import {useState} from 'react';
import {useEffect} from 'react';
import React from 'react'




const App = () => {
  const storedTodos = JSON.parse(localStorage.getItem('todos'));

  const [todos, setTodos] = useState(storedTodos);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  console.log(localStorage);

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  /*useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos){
      setTodos(loadedTodos);
    } 
  }, []);*/

  

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <h2>To Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <div className="containerBtn">
        <button className="btn btnCheck" type="submit"><i className="fa-solid fa-check" ></i></button>
        </div>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button className='btn btnEdits' onClick={() => submitEdits(todo.id)}><i className="fa-solid fa-check-to-slot"></i></button>
            ) : (
              <button className='btn btnUpdate' onClick={() => setTodoEditing(todo.id)}><i className="fa-solid fa-pen-to-square"></i></button>
            )}

            <button className='btn btnDelete' onClick={() => deleteTodo(todo.id)}><i className="fa-solid fa-trash"></i></button>
          </div>
        </div>
      ))}
    </div>
  
  );
};




export default App;

/*function App1(){
return  (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Ajouter
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Montrer </span>
          <span>Toutes</span>
          <span className="visually-hidden"> les tâches</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Montrer </span>
          <span className="visually-hidden">les tâches </span>
          <span>Actives</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Montrer </span>
          <span className="visually-hidden">les tâches </span>
          <span>Terminées</span>
        </button>
      </div>
      <h2 id="list-heading">3 tâches restantes</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Manger
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Éditer <span className="visually-hidden">Manger</span>
            </button>
            <button type="button" className="btn btn__danger">
              Supprimer <span className="visually-hidden">Manger</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Dormir
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Éditer <span className="visually-hidden">Dormir</span>
            </button>
            <button type="button" className="btn btn__danger">
              Supprimer <span className="visually-hidden">Dormir</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Recommencer
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Éditer <span className="visually-hidden">Recommencer</span>
            </button>
            <button type="button" className="btn btn__danger">
              Supprimer <span className="visually-hidden">Recommencer</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );}

*/