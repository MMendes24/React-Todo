import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'


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

toggleItem = id => {
  this.setState({
    listItems: this.state.listItems.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          cleared: !todo.cleared
        }
      } else {
        return todo
      }
    })
  })
}

addTodo = todoText => {
  const newTodo = {
    name: todoText,
    id: new Date(),
    cleared: false
  }
  this.setState({ // you always use setState with classes
    listItems: [ newTodo, ...this.state.listItems]
  }) 
}

clearAll = () => {
  this.setState({
    listItems: this.state.listItems.filter(clTodo => {
      if (clTodo.cleared === false) {
        return {
          ...clTodo
        }
      } else {
        return null
      }
    })
  })
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        addTodo={this.addTodo} 
        clearAll={this.clearAll}
        />
        <TodoList 
        toggleItem={this.toggleItem}
        listItems={this.state.listItems} />
      </div>
    );
  }
}

export default App;
