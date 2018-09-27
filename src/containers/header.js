import React, { Component } from 'react';
import Amount from './amount';
import { Row, Col } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Row className="header">
        <Col sm={9}>
          <h1>Shopping cart with Redux</h1>
        </Col>
        <Col sm={3}>
          <Amount />
        </Col>
      </Row>
    )
  }
}

export default Header;