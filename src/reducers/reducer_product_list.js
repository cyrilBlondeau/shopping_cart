import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.png';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';

let initialState = [
    {name: 'Article 1', price: 5, quantity: 10, added: 1, img: img1},
    {name: 'Article 2', price: 15, quantity: 8, added: 1, img: img2},
    {name: 'Article 3', price: 7, quantity: 15, added: 1, img: img3},
    {name: 'Article 4', price: 9, quantity: 5, added: 1, img: img4},
    {name: 'Article 5', price: 11, quantity: 100, added: 1, img: img5},
    {name: 'Article 6', price: 23, quantity: 20, added: 1, img: img6},
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
