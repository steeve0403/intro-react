import {useState} from 'react';
import {useEffect} from 'react';


const ToDoList = () => {
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

  export default ToDoList;