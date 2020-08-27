import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import Account from "./account";

class AccountsTable extends Component {
    constructor(props) {
        super(props);
        this.state = { accounts: props.accounts };
    }

    render() {
        return (
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.accounts.map((t) => (
                        <Account
                            account={t}
                        />
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default AccountsTable;
