import React from 'react'

function ToDo({title, completed}){
    
    if(completed){
        return(
            <div className="todo">
                <h1>{ title }</h1>
                <i className="fas fa-check-circle" aria-hidden="true"></i>
            </div>
        )
    }
    else{
        return(
            <div className="todo">
                <h1>{ title }</h1>
                <i className="far fa-circle" aria-hidden="true"></i>
            </div>
        )
    }
    
}

export default ToDo
