import React from 'react'

const Todo = ({ todos }) => {
    let counter = 0;

    return (
        todos.map(t => <li key={counter += 1}>{t} </li>)
    )
}

export default Todo
