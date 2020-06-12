import React from 'react'

function ToDo({title, completed}){
    return(
        <div className="todo">
            <h1>{ title }</h1>
            <span>{ completed ? "Yay" : "Nay"}</span>
        </div>
    )
}

export default ToDo
