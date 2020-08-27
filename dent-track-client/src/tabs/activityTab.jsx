import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import TreatmentsTable from "../components/treatmentsTable";
import { Col, Row, Container } from "react-bootstrap";
import TreatmentDetails from "../components/treatmentDetails";

class ActivityTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treatments: [],
      loading: true,
      showDetails: false,
      detailedTreatment: {},
    };
  }
  componentDidMount() {
    this.populateTreatmentsData();
  }

  render() {
    let content = this.state.loading ? (
      <p>
        <em> Loading... </em>
      </p>
    ) : (
        <TreatmentsTable
          treatments={this.state.treatments}
          onViewDetails={this.handleViewDetails}
        />
      );
    let details = this.state.showDetails ? (
      <TreatmentDetails treatment={this.state.detailedTreatment} />
    ) : null;

    return (
      <Container>
        {details}
        <Row>
          <h1>Treatments</h1>
        </Row>

        <Row>
          <Col>{content}</Col>
        </Row>
      </Container>
    );
  }

  handleViewDetails = (id) => {
    const treatment = this.state.treatments.filter((t) => t.id === id);
    window.scrollTo(0, 0);

    this.setState({ showDetails: true, detailedTreatment: treatment[0] });
  };

  async populateTreatmentsData() {
    //aici se apeleaza serviciu rest pentru obtinerea treatments-urilor

    this.setState({
      treatments: [
        {
          id: 1,
          technicianId: 1,
          treatmentName: "Test1",
          medicName: "Test",
          techicianName: "Test",
          currentStep: "1",
          deadlineCurrentStep: "1",
        },
        {
          id: 2,
          treatmentName: "Test2",
          medicName: "Test",
          techicianName: "Test",
          currentStep: "1",
          deadlineCurrentStep: "1",
        },
        {
          id: 3,
          technicianId: 1,
          treatmentName: "Test3",
          medicName: "Test",
          techicianName: "Test",
          currentStep: "1",
          deadlineCurrentStep: "1",
        },
        {
          id: 4,
          treatmentName: "Test4",
          medicName: "Test",
          techicianName: "Test",
          currentStep: "1",
          deadlineCurrentStep: "1",
        },
        {
          id: 5,
          technicianId: 1,
          treatmentName: "Test5",
          medicName: "Test",
          techicianName: "Test",
          currentStep: "1",
          deadlineCurrentStep: "1",
        },
        {
          id: 6,
          technicianId: 1,
          treatmentName: "Test6",
          medicName: "Test",
          techicianName: "Test",
          currentStep: "1",
          deadlineCurrentStep: "1",
        },
        {
          id: 7,
          treatmentName: "Test7",
          medicName: "Test",
          techicianName: "Test",
          currentStep: "1",
          deadlineCurrentStep: "1",
        },
        {
          id: 8,
          treatmentName: "Test8",
          medicName: "Test",
          techicianName: "Test",
          currentStep: "1",
          deadlineCurrentStep: "1",
        },
        {
          id: 9,
          technicianId: 1,
          treatmentName: "Test9",
          medicName: "Test",
          techicianName: "Test",
          currentStep: "1",
          deadlineCurrentStep: "1",
        },
      ],
      loading: false,
    });
  }
}

export default ActivityTab;
