import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

let data = [
  { name: "cheese", id: 1, selected: false },

  { name: "almonds", id: 2, selected: false }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: data
    };
  }
  // this is a method of App
  toggle = itemId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        console.log(todo);
        if (itemId === todo.id) {
          return {
            ...todo,
            selected: !todo.selected
          };
        }
        return todo;
      })
    });
  };

  delete = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.selected;
      })
    });
  };

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  render(props) {
    return (
      <div>
        <TodoForm addItem={this.addItem} />
        <TodoList todos={this.state.todos} toggle={this.toggle} />
        <button onClick={this.delete}>Clear Selected</button>
      </div>
    );
  }
}

export default App;
