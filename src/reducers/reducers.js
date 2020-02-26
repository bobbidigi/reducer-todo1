export const initialState = {
  todos: [{
  item: "Learn about reducers",
  selected: false,
  id: 3892987589}]
}

export function reducer(state = initialState, action) {
  switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
            todos:  [...state.todos, action.payload]
        }
      case "TOGGLE_TODO":
        return {
          ...state,
            todos:  [...action.payload]
        }
      case "DELETE_TODO":
          return {
            ...state,
              todos:  [...action.payload]
        }  

      default:
        return state;
  }
}
