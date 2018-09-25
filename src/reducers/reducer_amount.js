export default (state = 0, action) => {
  switch (action.type) {
    case 'ADD_TO_AMOUNT':
      return state + action.payload
    case 'REMOVE_PRODUCT':
      return state - action.payload.price
  default: return state;
  }
}