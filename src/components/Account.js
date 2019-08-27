import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

export default class Account extends Component {
  render() {
    return (
      <Col xs={12}>
        <br />
        <br />
        <h2 className='text-center'>Login</h2>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form >
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button>Login</Button>
          </Form>
        </div>
      </Col>
    );
  }
}
