import React, { Component } from 'react';
import ProductList from '../containers/product-list';
import CartList from '../containers/cart';
import Amount from '../containers/amount';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="calculatorApp">
        <ProductList />
        <CartList />
        <Amount />
      </div>
    );
  }
}

export default App;