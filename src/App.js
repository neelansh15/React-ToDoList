import React, {useState} from 'react'
import ToDo from './ToDo'

import './App.css'

function App(){

  // eslint-disable-next-line
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn Vue",
      completed: true
    },
    {
      id: 2,
      title: "Learn React",
      completed: false
    },
    {
      id: 3,
      title: "Learn Nuxt",
      completed: false
    },
    {
      id: 4,
      title: "Rule",
      completed: false
    },
  ])

  const [value, setValue] = useState("")

  function updateValue(e){
    setValue(e.target.value)
  }

  function addTodo(e){
    e.preventDefault()
    if(value != "" || value != null){
      todos.push({
        id: Math.round(Math.random() * 1000),
        title: value,
        completed: false
      })
      setValue("")
    }
  }
  
  return (
    <div className="app">
      <div className="card">
        <h1>Hello, Neelansh!</h1>
        <h2>Here are your ToDos</h2>

        <form onSubmit={addTodo} className="todoinput">
          <input type="text" placeholder="Add new" value={value} onChange={updateValue} onInput={updateValue} />
          <button type="submit"><i className="fa fa-plus" aria-hidden="true"></i></button>
        </form>

        <div className="todos">
          {
            todos.map(todo => (
              <ToDo key={todo.id} title={todo.title} completed={todo.completed} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App;
