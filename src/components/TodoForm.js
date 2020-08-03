import React from 'react'

class TodoForm extends React.Component { // you always extend from React.Component in React
    constructor(props) {
        super(props)
        this.state = { 
            todoText: "",
    }
}
    render() {
        return (
            <form>
                <input
                type="text"
                name="todoText"
                />
            </form>
        )
    }
}

export default TodoForm