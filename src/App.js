import React, {useReducer} from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import {initialState, reducer} from './reducers/reducers';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(state.todos)
  // console.log(todos)

  const toggle = itemId => {
      dispatch({type: 'TOGGLE_TODO', payload: itemId})
  };

  const deleteItem = (e) => {
      e.preventDefault();
      dispatch({type: "DELETE_TODO"})
  };

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', payload: item})
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
