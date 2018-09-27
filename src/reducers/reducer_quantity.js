let initialState = 0

export default (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_AMOUNT':
        return state += 1
      case 'REMOVE_PRODUCT':
        return state -= 1
      case 'DELETE_PRODUCT':
        return state - action.payload.added
      case 'EMPTY_CART':
        return state = initialState
    default: return state;
    }
  }