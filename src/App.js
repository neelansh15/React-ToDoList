import React, {useState} from 'react'
import ToDo from './ToDo'

import './App.css'

function App(){

  // eslint-disable-next-line
  const [todos, setTodos] = useState([])
  
  return (
    <div className="app">
      <div className="card">
        <h1>Hello, Neelansh!</h1>
        <h2>Here are your ToDos</h2>
        <div className="todos">
          <ToDo />
        </div>
      </div>
    </div>
  )
}

export default App;
