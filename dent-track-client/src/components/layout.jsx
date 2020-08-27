import React, { Component } from "react";
import NavBar from "./navBar";

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar onLogout={this.props.onLogout} />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
