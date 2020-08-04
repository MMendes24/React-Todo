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

handleClear = e => {
    this.props.clearAll()
}
    render() {
        return (
            <form className="task-form" onSubmit={this.handleSubmit}>
                <div className="form-text-container">
                <label>Add a new task: &nbsp;
                <input
                    type="text"
                    name="todoText"
                    placeholder="New Task"
                    value={this.state.todoText}
                    onChange={this.handleInput}
                />
                </label>
                </div>
                <div className="button-container">
                <button
                    >
                    Add</button>
                <button 
                    onClick={() => this.handleClear()}
                    >
                Clear</button>
                </div>
            </form>
        )
    }
}

export default TodoForm