export default (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TO_AMOUNT':
      return state + action.payload
  default: return state;
  }
}