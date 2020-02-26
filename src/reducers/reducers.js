export const initialState = {
  todos: [{
  item: "Learn about reducers",
  completed: false,
  id: 3892987589}]
}

export function reducer(state = initialState, action) {
  switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
            todos:  [...state.todos,  {
            item: action.payload,
            completed: false,
            id: Date.now()
              }]
        }

      default:
        return state;
  }
}
