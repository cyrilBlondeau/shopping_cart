let initialState = [
    {name: 'Article 1', price: 5, quantity: 10},
    {name: 'Article 2', price: 15, quantity: 8},
    {name: 'Article 3', price: 7, quantity: 15},
    {name: 'Article 4', price: 9, quantity: 5},
    {name: 'Article 5', price: 11, quantity: 100},
    {name: 'Article 6', price: 23, quantity: 20},
  ]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state.map(product => {
        if (product.name === action.payload.name) {
          return {...product, quantity: product.quantity - 1}
        };
        return product;
      });
    default: return state
  }
}
