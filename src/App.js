import React, {useState} from 'react'
import ToDo from './ToDo'

import './App.css'

function App(){

  // eslint-disable-next-line
  const [todos, setTodos] = useState([
    {
      title: "Learn Vue",
      completed: false
    },
    {
      title: "Learn React",
      completed: false
    },
    {
      title: "Learn Nuxt",
      completed: false
    },
    {
      title: "Rule",
      completed: false
    },
  ])
  
  return (
    <div className="app">
      <div className="card">
        <h1>Hello, Neelansh!</h1>
        <h2>Here are your ToDos</h2>
        <div className="todos">
          {
            todos.map(todo => (
              <ToDo title={todo.title} completed={todo.completed} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App;
