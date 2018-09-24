import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, addToAmount } from '../actions/index';

class ProductList extends Component {
  renderProducts() {
    return this.props.productList.map((product, i) => {
      return (
        <li key={i}>
          {product.name}<br />
          {product.price} €<br />
          Quantité : {product.quantity}<br />
          <p onClick={() => {this.props.addToCart(product); this.props.addToAmount(product)}}>Ajouter au panier</p>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Boutique :</h2>
        <ul>
          {this.renderProducts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    productList: state.productList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart, addToAmount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);