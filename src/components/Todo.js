import React from "react";

const Todo = props => {
    return (
        <div
        onClick={() => props.toggleItem(props.todo.id)}
        className={props.todo.cleared === true ? "cleared" : ""}
        >
        <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo