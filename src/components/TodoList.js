import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
    <div className="todo-list">
        {props.listItems.map(item => (
            <Todo key={item.id} item={item}/>
        ))}
    </div>
    )

}

export default TodoList