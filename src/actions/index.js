export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
}

export const removeProduct = (product) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: product
  };
}

export const addToAmount = (product) => {
  return {
    type: 'ADD_TO_AMOUNT',
    payload: product.price
  };
}

export const emptyCart = () => {
  return {
    type: 'EMPTY_CART',
  };
}

export const deleteProduct = (product) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: product,
  };
}