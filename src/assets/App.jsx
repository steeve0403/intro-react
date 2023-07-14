
import React from 'react'
import Title from './title';
import ToDoList from './ToDoList';






const App = () => {
  return (
    <div>
    <Title/>
    <ToDoList/>
    </div>
  )
}




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