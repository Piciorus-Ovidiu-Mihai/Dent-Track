import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
class LoginPage extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1>Welcome to Dent-Track</h1>
        </Row>
        <Row className="justify-content-md-center">
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button
              href="/"
              variant="primary"
              type="button"
              onClick={this.validateInput}
            >
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
  validateInput = () => {
    var x = 1;
    if (x === 1) {
      this.props.onLogin(x.toString());
    } else {
    }
  };
}

export default LoginPage;
