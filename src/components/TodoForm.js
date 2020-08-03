import React from 'react'
import Grid from '@material-ui/core/Grid'

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
            <form onSubmit={this.handleSubmit}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                <input
                    type="text"
                    name="todoText"
                    value={this.state.todoText}
                    onChange={this.handleInput}
                />
                <button>Add Task</button>
                <button onClick={() => this.handleClear()}>Clear Completed</button>
                </Grid>
            </form>
        )
    }
}

export default TodoForm