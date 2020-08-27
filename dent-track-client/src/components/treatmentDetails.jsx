import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Container, Button } from "react-bootstrap";
class TreatmentDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="font-weight-bold">
        <Row>
          <h3>{this.props.treatment.treatmentName}</h3>
        </Row>
        <Row>
          <Col>
            <p>
              Medic:{" "}
              <span className="font-weight-normal">
                {this.props.treatment.medicName}
              </span>
            </p>
          </Col>
          <Col>
            <p>
              Technician:{" "}
              <span className="font-weight-normal">
                {this.props.treatment.technicianName}
              </span>
            </p>
          </Col>
          <Col>
            <p>
              Patient:{" "}
              <span className="font-weight-normal">
                {this.props.treatment.patientName}
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Starting date:{" "}
              <span className="font-weight-normal">
                {this.props.treatment.startingDate}
              </span>
            </p>
          </Col>
          <Col>
            <p>
              Current Step:{" "}
              <span className="font-weight-normal">
                {this.props.treatment.currentStep}
              </span>
            </p>
          </Col>
          <Col>
            <p>
              Deadline:{" "}
              <span className="font-weight-normal">
                {this.props.treatment.deadlineCurrentStep}
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Details:{" "}
              <pre className="font-weight-normal">
                {this.props.treatment.details}
              </pre>
            </p>
          </Col>
          <Col>
            <p>
              History:{" "}
              <pre className="font-weight-normal">
                {this.props.treatment.history}
              </pre>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="success">Finish Step</Button>
          </Col>
          <Col>
            <Button variant="danger">Repeat Step</Button>
          </Col>
          <Col>
            <Button variant="warning">Change Deadline</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TreatmentDetails;
