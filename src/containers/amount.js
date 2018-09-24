import React, { Component } from 'react';
import { connect } from 'react-redux';

class Amount extends Component {
  render() {
    return (
      <div>
        <h2>Montant :</h2>
        <p>{this.props.amount} €</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    amount: state.amount,
  };
}

export default connect(mapStateToProps)(Amount);