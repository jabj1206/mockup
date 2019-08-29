import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Departures from "./Departures";

class Home extends Component {
  state = { search: "" };
  _handleChange = e => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { search } = this.state;
    const lowercasedFilter = search.toLowerCase();
    const filteredData = this.props.depar.filter(item => {
      return item['origin'].toLowerCase().includes(lowercasedFilter) || item['destiny'].toLowerCase().includes(lowercasedFilter)
    });

    return (
      <>
        <br />
        <Row>
          <Col xs={12} className="text-right">
            <input
              className="text-center"
              style={{ border: "none", borderRadius: "10px" }}
              placeholder="Search"
              onChange={this._handleChange}
              value={this.state.search}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Departures depar={filteredData} deleteD={this.props.deleteD} />
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
