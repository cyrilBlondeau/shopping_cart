import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeProduct } from '../actions/index';

class CartList extends Component {
  renderCart() {
     return this.props.cart.map((product, i) => {

      let disabled = false;
      if (product.added === 0) {
        disabled = true;
      } else if (product.added > 0) {
        disabled = false
      }

      return (
        <li key={i}>
          {product.name}<br />
          {product.price} €<br />
          Quantité : {product.added}<br />
          <button type="button" disabled={disabled} onClick={() => this.props.removeProduct(product)}>-</button>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Panier :</h2>
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
  return bindActionCreators({ removeProduct }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);