import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

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
        </Row>
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