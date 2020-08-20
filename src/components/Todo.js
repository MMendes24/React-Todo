import React from "react";

const Todo = props => {
    return (
        <li
        
        onClick={() => props.toggleItem(props.todo.id)}
        className={`list-item ${props.todo.cleared === true ? "cleared" : ""}`}
        >
         {props.todo.name}
        </li>
    )
}

export default Todo