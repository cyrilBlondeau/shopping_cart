import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, addToAmount } from '../actions/index';

class ProductList extends Component {
  renderProducts() {
    return this.props.productList.map((product, i) => {
      
      let disabled = false;
      if (product.quantity === 0) {
        disabled = true;
      } else if (product.quantity > 0) {
        disabled = false
      }

      return (
        <li key={i} className="product">
          <img src={product.img} alt="Product" /><br />
          <h4>{product.name}</h4>
          <h5>{product.price} €</h5>
          <p>Quantité : {product.quantity}</p>
          <button type="button" className="addButton" disabled={disabled} onClick={() => {this.props.addToCart(product); this.props.addToAmount(product)}}>Ajouter au panier</button>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="product-list">
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