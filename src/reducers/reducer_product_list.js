let initialState = [
    {name: 'Article 1', price: 5, quantity: 10, added: 1, img: 'https://via.placeholder.com/500x350'},
    {name: 'Article 2', price: 15, quantity: 8, added: 1, img: 'https://via.placeholder.com/500x350'},
    {name: 'Article 3', price: 7, quantity: 15, added: 1, img: 'https://via.placeholder.com/500x350'},
    {name: 'Article 4', price: 9, quantity: 5, added: 1, img: 'https://via.placeholder.com/500x350'},
    {name: 'Article 5', price: 11, quantity: 100, added: 1, img: 'https://via.placeholder.com/500x350'},
    {name: 'Article 6', price: 23, quantity: 20, added: 1, img: 'https://via.placeholder.com/500x350'},
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

    case 'REMOVE_PRODUCT':
      return state.map(product => {
        if (product.name === action.payload.name) {
          return {...product, quantity: product.quantity + 1}
        };
      return product;
    });

    case 'DELETE_PRODUCT':
      return state.map(product => {
        if (product.name === action.payload.name) {
          return {...product, quantity: action.payload.quantity}
        };
      return product;
    });

    case 'EMPTY_CART':
      return state = initialState
      
    default: return state
  }
}
