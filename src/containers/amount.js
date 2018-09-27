import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';

class Amount extends Component {
  render() {
    return (
      <div className="amount">
        <Row>
          <p className="labelAmount">Montant : </p>&nbsp;
          <p className="totalAmount">{this.props.amount} €</p>
        </Row>
        <Row>
          <p className="labelAmount">Articles : </p>&nbsp;
          <p className="totalAmount">{this.props.quantity}</p>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    amount: state.amount,
    quantity: state.quantity
  };
}

export default connect(mapStateToProps)(Amount);