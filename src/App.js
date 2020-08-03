import React from 'react';
import TodoList from './components/TodoList'


const listItems = [
  {
    name: "Create a todo list",
    id: 1,
    cleared: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = { listItems } // props destructuring, similar to what you do with Hooks (compare later)
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList listItems={this.state.listItems} />
      </div>
    );
  }
}

export default App;
