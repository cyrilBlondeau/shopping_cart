import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartList extends Component {
  renderCart() {
    return this.props.cart.map((product, i) => {
      return (
        <li key={i}>
          {product.name}<br />
          {product.price} €<br />
          <p>Quantité :</p>
          <p>Supprimer</p>
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
  };
}

export default connect(mapStateToProps)(CartList);