import React, { Component } from 'react';
import ProductList from '../containers/product-list';
import CartList from '../containers/cart';
import Header from '../containers/header';
import { Row, Col } from 'react-bootstrap';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Row>
          <Col sm={9} className="products">
            <ProductList />
          </Col>
          <Col sm={3} className="cart">
            <CartList />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;