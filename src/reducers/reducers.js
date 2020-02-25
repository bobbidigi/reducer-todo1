export const initialState = {
  todos: [{
  item: "Learn about reducers",
  completed: false,
  id: 3892987589}]
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "SOME_ACTION":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
        completedTodos: newCompletedTodos
      };

      default:
        return state;
  }
}
