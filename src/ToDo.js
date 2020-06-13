import React, {useState} from 'react'

function ToDo({title, completed}){

    const [complete, setComplete] = useState(completed)

    function toggleComplete(){
        setComplete(!complete)
    }

    if(complete){
        return(
            <div className="todo" onClick={toggleComplete}>
                <h1>{ title }</h1>
                <i className="fas fa-check-circle" aria-hidden="true"></i>
            </div>
        )
    }
    else{
        return(
            <div className="todo" onClick={toggleComplete}>
                <h1>{ title }</h1>
                <i className="far fa-circle" aria-hidden="true"></i>
            </div>
        )
    }
    
}

export default ToDo
