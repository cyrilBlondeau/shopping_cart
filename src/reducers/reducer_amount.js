let initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_AMOUNT':
      return state + action.payload
    case 'REMOVE_PRODUCT':
      return state - action.payload.price
    case 'DELETE_PRODUCT':
      return state - (action.payload.price * action.payload.added)
    case 'EMPTY_CART':
      return state = initialState
  default: return state;
  }
}