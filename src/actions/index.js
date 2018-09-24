export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
}

export const addToAmount = (product) => {
  return {
    type: 'ADD_TO_AMOUNT',
    payload: product.price
  };
}