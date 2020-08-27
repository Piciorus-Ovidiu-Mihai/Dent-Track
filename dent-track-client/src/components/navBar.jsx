import React, { Component } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="your-activity">Your Activity</Nav.Link>
            <Nav.Link href="technicians">Technicians</Nav.Link>
            <Nav.Link href="statistics">Statistics</Nav.Link>
            <Nav.Link href="manage-accounts">Manage Accounts</Nav.Link>
          </Nav>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Link href="login" onClick={this.props.onLogout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
