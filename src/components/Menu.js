import React, { Component } from "react";
import "./styles/Menu.css";
import Home from "./Home";
import Messages from "./Messages";
import Settings from "./Settings";
import { WishList } from "./WishList";
import { Switch, Route } from "react-router-dom";

export default class Menu extends Component {
  render() {
    //  if (this.props.menu.home) {
    //    return <Home depar={this.props.depar} deleteD={this.props.deleteD} />;
    //  } else if (this.props.menu.msg) {
    //    return <Messages />;
    //  } else if (this.props.menu.wish) {
    //    return <WishList />;
    //  }
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home depar={this.props.depar} deleteD={this.props.deleteD} />
          )}
        />
        <Route path="/messages/" component={Messages} />
        <Route path="/wish-list/" component={WishList} />
        <Route path="/settings/" component={Settings} />
        
      </Switch>
    );
  }
}
