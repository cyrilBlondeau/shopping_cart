import { combineReducers } from 'redux';
import ProductList from './reducer_product_list';
import Cart from './reducer_cart';
import Amount from './reducer_amount';

const rootReducer = combineReducers({
  productList: ProductList,
  cart: Cart,
  amount: Amount
});

export default rootReducer;