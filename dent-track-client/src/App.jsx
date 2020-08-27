import React, { Component } from "react";

import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
class App extends Component {
  state = {};
  render() {
    return this.checkIfLoggedIn() ? (
      <MainPage
        token={sessionStorage.getItem("authenticationToken")}
        onLogout={this.handleLogout}
      />
    ) : (
      <LoginPage onLogin={this.handleLogin} />
    );
  }
  checkIfLoggedIn() {
    const authenticationToken = sessionStorage.getItem("authenticationToken");
    return authenticationToken === null ? false : true;
  }
  handleLogin = (x) => {
    sessionStorage.setItem("authenticationToken", x);
    this.setState({});
  };
  handleLogout = () => {
    sessionStorage.removeItem("authenticationToken");
    this.setState({});
  };
}

export default App;
