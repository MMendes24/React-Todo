import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <ul className="todo-list">
            {props.listItems.map(item => (
            <Todo key={item.id} todo={item} toggleItem={props.toggleItem} />
        ))}
        </ul>
    )

}

export default TodoList