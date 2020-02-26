import React, {useState, useReducer} from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import {initialState, reducer} from './reducers/reducers';

let data = [
  { name: "cheese", id: 1, selected: false },

  { name: "almonds", id: 2, selected: false }
];

function App() {
  
  const [todos, setTodos] = useState(data)
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state.todos)
  console.log(todos)

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
      item: item,
      id: Date.now(),
      completed: false
    };
    
    dispatch({type: 'ADD_TODO', payload: newItem})
  }

    return (
      <div>
        <TodoForm addItem={addItem} />
        <TodoList todos={state.todos} toggle={toggle} />
        <button onClick={deleteItem}>Clear Selected</button>
      </div>
    );
}

export default App;
