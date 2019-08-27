import React, { Component } from "react";
import "./styles/Menu.css";
import Home from "./Home";
import Messages from "./Messages";
import { WishList } from "./WishList";

export default class Menu extends Component {
  render() {
    if (this.props.menu.home) {
      return <Home depar={this.props.depar} deleteD={this.props.deleteD} />;
    } else if (this.props.menu.msg) {
      return <Messages />;
    } else if (this.props.menu.wish) {
      return <WishList />;
    }
  }
}
