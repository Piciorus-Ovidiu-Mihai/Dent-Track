import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Account extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>{this.props.account.lastName}</td>
        <td>{this.props.account.firstName}</td>
        <td>{this.props.account.userName}</td>
        <td>{this.props.account.role}</td>
        <td>{this.props.account.phoneNumber}</td>
        <td>
          <Button>
            Modify
          </Button>
        </td>
        <td>
          <Button>
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

export default Account;
