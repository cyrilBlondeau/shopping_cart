import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeProduct, addToCart, addToAmount } from '../actions/index';
import { Row, Col } from 'react-bootstrap';

class CartList extends Component {
  renderCart() {
     return this.props.cart.map((product, i) => {

      let disabled = false;
      if (product.added === product.quantity) {
        disabled = true;
      } else if (product.added > 0) {
        disabled = false
      }

      return (
        <li key={i}>
        <Row>
          <p>{product.name} :</p>&nbsp;
          <p>{product.price} €</p>
        </Row>
        <Row>
          <button type="button" className="buttonMoins" onClick={() => this.props.removeProduct(product)}>-</button>
          <button type="button" className="buttonPlus" disabled={disabled} onClick={() => {this.props.addToCart(product); this.props.addToAmount(product)}}>+</button>
          <div className="cartQuantity"><p>{product.added}</p></div>
        </Row>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="cart">
        <h3>Panier</h3>
        <ul>
          {this.renderCart()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    amount: state.amount,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeProduct, addToCart, addToAmount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);