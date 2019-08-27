import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Departures from "./Departures";

class Home extends Component {
  render() {
    return (
      <>
        <br />
        <Row>
          <Col xs={12} className="text-right">
            <input
              className="text-center"
              style={{ border: "none", borderRadius: "10px" }}
              placeholder="Search"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Departures depar={this.props.depar} deleteD={this.props.deleteD} />
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
