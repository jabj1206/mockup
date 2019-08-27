import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import FormD from "./components/FormD";
import "moment-timezone";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      sortByDate: false,
      depar: depar,
      classN: "menu",
      addClass: false
    };
  }

  static shouldComponentUpdate() {
    return true;
  }

  sortt = st => {
    const { depar } = this.state;
    let newDepar = depar;
    if (st.sale) {
      newDepar.sort((a, b) => (a.date > b.date ? 1 : -1));
    } else {
      newDepar.sort((a, b) => (b.date > a.date ? 1 : -1));
    }
    this.setState({
      depar: newDepar
    });
  };

  addD = (date, time, origin, destiny, price, quantity) => {
    const newD = {
      id: this.state.depar.length,
      date: date,
      time: time,
      origin: origin,
      destiny: destiny,
      price: price,
      quantity: quantity
    };
    this.setState({
      depar: [...this.state.depar, newD]
    });
  };

  deleteD = id => {
    const deleteD = this.state.depar.filter(d => d.id !== id);
    this.setState({ depar: deleteD });
  };

  render() {
    let boxClass = ["menu"];
    if (this.state.addClass) {
      boxClass.push("active");
    }
    return (
      <>
        <Container>
          <Row>
            <Col xs={3}>
              <Sidebar sortt={this.sortt} />
            </Col>
            <Col xs={9}>
              <div className="menuWrapper">
                <Link
                  to="/"
                  
                  className={boxClass.join(" ")}
                  id="home"
                >
                  <span>
                    <i
                      style={{ fontSize: "25px" }}
                      
                      className="fa fa-home"
                    />
                  </span>
                  <span style={{ fontSize: "14px" }}>Home</span>
                </Link>
                <Link
                  to="/messages"
                  
                  className="menu"
                  id="msg"
                >
                  <span>
                    <i
                      style={{ fontSize: "25px" }}
                      className="fa fa-envelope-o"
                    ></i>
                  </span>
                  <span style={{ fontSize: "14px" }}>Messages</span>
                </Link>
                <Link
                  to="wish-list"
                  
                  className="menu"
                >
                  <span>
                    <i style={{ fontSize: "25px" }} className="fa fa-star"></i>
                  </span>
                  <span style={{ fontSize: "14px" }}>WishList</span>
                </Link>
                <Link
                  to="settings"
                  
                  className="menu"
                >
                  <span>
                    <i style={{ fontSize: "25px" }} className="fa fa-cog"></i>
                  </span>
                  <span style={{ fontSize: "14px" }}>Settings</span>
                </Link>
                <div style={{ textDecoration: "none" }} className="menu">
                  <span>
                    <i style={{ fontSize: "25px" }} className="fa fa-user"></i>
                  </span>
                  <span style={{ fontSize: "14px" }}>Account</span>
                </div>
              </div>
              <Menu
                depar={this.state.depar}
                menu={this.state.menu}
                deleteD={this.deleteD}
              />
              <br />
            </Col>
          </Row>
        </Container>
        <FormD addD={this.addD} />
      </>
    );
  }
}

const depar = [
  {
    id: 0,
    date: "2019-06-12",
    time: "19:34",
    origin: "Houston, TX, 33619",
    destiny: "Atlanta, GA, 30123",
    price: 250000,
    quantity: 1
  },
  {
    id: 1,
    date: "2019-07-01",
    time: "20:00",
    origin: "Houston, TX, 33619",
    destiny: "Atlanta, GA, 30123",
    price: 100000,
    quantity: 2
  },
  {
    id: 2,
    date: "2019-08-02",
    time: "14:30",
    origin: "Houston, TX, 33619",
    destiny: "Atlanta, GA, 30123",
    price: 100000,
    quantity: 2
  }
];

const styleLink = { textDecoration: "none" }

export default App;
