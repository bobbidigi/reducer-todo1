import React, {useState} from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

let data = [
  { name: "cheese", id: 1, selected: false },

  { name: "almonds", id: 2, selected: false }
];

function App() {
  
  const [todos, setTodos] = useState(data)

  const toggle = itemId => {
      let newTodos = todos.map(todo => {
        if (itemId === todo.id) {
          return {
            ...todo,
            selected: !todo.selected
          };
        }
        return todo;
      })
      setTodos(newTodos)
  };

  const deleteItem = (e) => {
      e.preventDefault();
      let newTodos = todos.filter(item => {
        return !item.selected;
      })
      setTodos(newTodos)
  };

  const addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };

      setTodos([...todos, newItem])
  }

    return (
      <div>
        <TodoForm addItem={addItem} />
        <TodoList todos={todos} toggle={toggle} />
        <button onClick={deleteItem}>Clear Selected</button>
      </div>
    );
}

export default App;
