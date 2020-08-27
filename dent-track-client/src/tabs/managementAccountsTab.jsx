import React, { Component } from 'react';
import AccountsTable from "../components/accountsTable";
import { Col, Row, Container } from "react-bootstrap";


class ManagementAccountsTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            loading: true,
        };
    }

    componentDidMount() {
        this.populateAccountsData();
    }

    render() {
        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
                <AccountsTable
                    accounts={this.state.accounts}
                />
            )
        return (
            <Container>
                <Row>
                    <h1>Accounts Management</h1>
                </Row>
                <Row>
                    <Col>{content}</Col>
                </Row>
            </Container>
        );
    }

    async populateAccountsData() {
        this.setState({
            accounts: [
                {
                    lastName: "Test",
                    firstName: "Test",
                    userName: "Test",
                    role: "Admin",
                    phoneNumber: "Test",
                },
                {
                    lastName: "Test",
                    firstName: "Test",
                    userName: "Test",
                    role: "Admin",
                    phoneNumber: "Test",
                },
            ],
            loading: false,
        });
    }

}
export default ManagementAccountsTab;