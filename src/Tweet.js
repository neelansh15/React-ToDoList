import React from 'react'

import './App.css'

function Tweet({name, message}){
    return(
        <div className="tweet">
            <h3>{ name }</h3>
            <p>{ message }</p>
            <h4>Likes: </h4>
        </div>
    )
}

export default Tweet
