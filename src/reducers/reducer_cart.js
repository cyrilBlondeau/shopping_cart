export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
    let present = false;

    for (let i = 0; i < state.length; i++) {
      if (state[i].name === action.payload.name) {
        present = true;
      }
    }

    if (present === false) {
      return [...state, action.payload]
    } else if (present === true) {
      return state
    }
  break;
  default: return state;
  }
}