import React from 'react'

class TodoForm extends React.Component { // you always extend from React.Component in React
    constructor(props) {
        super(props)
        this.state = { 
            todoText: "",
    }
}

handleInput = e => {
    this.setState({
        todoText: e.target.value
    })
}

handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.todoText)
    this.setState({
        todoText: ""
      });
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="todoText"
                value={this.state.todoText}
                onChange={this.handleInput}
                />
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm