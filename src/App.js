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
  // console.log(state.todos)
  // console.log(todos)

  const toggle = itemId => {
      let newTodos = state.todos.map(todo => {
        if (itemId === todo.id) {
          return {
            ...todo,
            selected: !todo.selected
          };
        }
        return todo;
      })
      console.log(newTodos)
      dispatch({type: 'TOGGLE_TODO', payload: newTodos})
  };

  const deleteItem = (e) => {
      e.preventDefault();
      let newTodos = state.todos.filter(item => {
        return !item.selected;
      })
      dispatch({type: "DELETE_TODO", payload: newTodos})
  };

  const addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      item: item,
      id: Date.now(),
      selected: false
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
